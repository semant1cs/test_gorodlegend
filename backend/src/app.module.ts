import { Module } from '@nestjs/common';

import { DistributionModule } from './distribution/distribution.module';
import { DataBaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DistributionModule, DataBaseModule, ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
