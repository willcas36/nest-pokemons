import { Module } from '@nestjs/common';
import { AxiosApiAdapter } from './adapters/axios.adapter';

@Module({
  providers: [AxiosApiAdapter],
  exports: [AxiosApiAdapter],
})
export class CommonModule {}
