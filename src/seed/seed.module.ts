import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokeApiModule } from 'src/poke-api/poke-api.module';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokeApiModule, PokemonModule],
})
export class SeedModule {}
