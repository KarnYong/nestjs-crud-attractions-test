import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { Attraction } from './entities/attraction.entity';

@Injectable()
export class AttractionsService {
  constructor(
    @InjectRepository(Attraction)
    private attractionsRepository: Repository<Attraction>,
  ) {}

  create(createAttractionDto: CreateAttractionDto) {
    return this.attractionsRepository.save(createAttractionDto);
  }

  findAll(): Promise<Attraction[]> {
    return this.attractionsRepository.find();
  }

  findOne(id: string): Promise<Attraction> {
    return this.attractionsRepository.findOne(id);
  }

  update(id: number, updateAttractionDto: UpdateAttractionDto) {
    return this.attractionsRepository.update(id, updateAttractionDto);
  }

  async remove(id: string): Promise<void> {
    await this.attractionsRepository.delete(id);
  }
}
