import { Module } from '@nestjs/common';
import { DistributionService } from './distribution.service';
import { DistributionController } from './distribution.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import Distribution from './entities/distribution.entity';

@Module({
  controllers: [DistributionController],
  providers: [DistributionService],
  imports: [SequelizeModule.forFeature([Distribution])],
  exports: [DistributionService],
})
export class DistributionModule {}
