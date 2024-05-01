import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

type CreateDistributionAttributes = {
  name: string;
};

@Table({ tableName: 'distribution' })
export default class Distribution extends Model<Distribution, CreateDistributionAttributes> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  @ApiProperty({
    example: 'За участие в конкурсе',
    description: 'Название рассылки',
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  @ApiProperty({
    example: 'За участие в конкурсе',
    description: 'Название рассылки',
  })
  gifts_count: number;
}
