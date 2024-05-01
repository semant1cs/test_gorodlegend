import { Injectable } from '@nestjs/common';
import { CreateDistributionDto } from './dto/create-distribution.dto';
import { UpdateDistributionDto } from './dto/update-distribution.dto';
import { InjectModel } from '@nestjs/sequelize';
import Distribution from './entities/distribution.entity';

@Injectable()
export class DistributionService {
  constructor(@InjectModel(Distribution) private distributionRepository: typeof Distribution) {}
  create(createDistributionDto: CreateDistributionDto) {
    return this.distributionRepository.create(createDistributionDto);
  }

  findAll() {
    return this.distributionRepository.findAll();
  }

  findOne(id: number) {
    return this.distributionRepository.findByPk(id);
  }

  async update(id: number, updateDistributionDto: UpdateDistributionDto) {
    await this.distributionRepository.update(updateDistributionDto, { where: { id } });
    return await this.distributionRepository.findByPk(id);
  }

  async remove(id: number) {
    const distribution = await this.distributionRepository.findByPk(id);
    await this.distributionRepository.destroy({ where: { id } });
    return distribution;
  }
}
