import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TickectsService } from './tickects.service';
import { CreateTickectDto } from './dto/create-tickect.dto';
import { UpdateTickectDto } from './dto/update-tickect.dto';

@Controller('tickects')
export class TickectsController {
  constructor(private readonly tickectsService: TickectsService) {}

  @Post()
  create(@Body() createTickectDto: CreateTickectDto) {
    return this.tickectsService.create(createTickectDto);
  }

  @Get()
  findAll() {
    return this.tickectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tickectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTickectDto: UpdateTickectDto) {
    return this.tickectsService.update(+id, updateTickectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tickectsService.remove(+id);
  }
}
