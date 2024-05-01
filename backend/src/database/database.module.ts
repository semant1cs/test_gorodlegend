import Distribution from '../distribution/entities/distribution.entity';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

const getConfig = (configService: ConfigService) => {
  return {
    dialect: configService.get('DATABASE_DIALECT'),
    host: configService.get('DATABASE_HOST'),
    port: +configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USERNAME'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    models: [Distribution],
    autoLoadModels: true,
    synchronize: true,
  };
};

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => getConfig(configService),
      inject: [ConfigService],
    }),
  ],
})
export class DataBaseModule {}
