import { Module } from '@nestjs/common';
import { PokemonApiAdapter } from './poke-api.adapter';

@Module({
  providers: [PokemonApiAdapter],
  exports: [PokemonApiAdapter],
})
export class PokeApiModule {}
