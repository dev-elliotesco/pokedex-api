import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class PokemonService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ) {}
  

  async create(createPokemonDto: CreatePokemonDto) {
    
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();

    try {   
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;

    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {

    const {limit = 10, offset = 0} = paginationDto;

    return await this.pokemonModel.find()
    .limit(limit)
    .skip(offset)
    .select('-__v')
  }

  async findOne(term: string) {

    let pokemon:Pokemon;

    if (!isNaN(+term)){
      pokemon = await this.pokemonModel.findOne({no: term});
    }

    if (!pokemon && isValidObjectId(term)){
      pokemon = await this.pokemonModel.findById(term);
    }

    if(!pokemon){
      pokemon = await this.pokemonModel.findOne({name : term.toLocaleLowerCase().trim()});
    }

    if  (!pokemon){
      throw new NotFoundException(`Pokemon with id, name or no  "${term}" not found`);
    }

    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {


    const Pokemon = await this.findOne(term);

    if (updatePokemonDto.name){
      updatePokemonDto.name = updatePokemonDto.name.toLocaleLowerCase();
    }

    try {
      await Pokemon.updateOne(updatePokemonDto);
      return {...Pokemon.toJSON(), ...updatePokemonDto};
      
    } catch (error) {
      this.handleExceptions(error);
      
    }
  }

  async remove(id: string) {

    const { deletedCount } = await this.pokemonModel.deleteOne({_id: id});

    if (deletedCount == 0){
      throw new NotFoundException(`Pokemon with id "${id}" not found`);
    }

    return {message: `Pokemon with id "${id}" deleted`};
  }

  private handleExceptions(error: any) {
    if (error.code == 11000 ){
      throw new BadRequestException(`Pokemon already exists ${ JSON.stringify( error.keyValue)}`);
    }
    throw new InternalServerErrorException('Error creating pokemon');
  }
}
