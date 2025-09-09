import { Inject, Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonApiAdapter } from 'src/poke-api/poke-api.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    public readonly http: PokemonApiAdapter,
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
  ) {}
  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      console.log({ name, no });
    });
    const pokemons: Pokemon[] = data.results.map(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      return { name, no } as Pokemon;
    });
    await this.pokemonModel.insertMany(pokemons);
    return 'Seed executed';
  }
}
