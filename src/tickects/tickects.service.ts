import { Injectable } from '@nestjs/common';
import { CreateTickectDto } from './dto/create-tickect.dto';
import { UpdateTickectDto } from './dto/update-tickect.dto';

@Injectable()
export class TickectsService {
  create(createTickectDto: CreateTickectDto) {
    return 'This action adds a new tickect';
  }

  findAll() {
    return `This action returns all tickects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tickect`;
  }

  update(id: number, updateTickectDto: UpdateTickectDto) {
    return `This action updates a #${id} tickect`;
  }

  remove(id: number) {
    return `This action removes a #${id} tickect`;
  }
}
