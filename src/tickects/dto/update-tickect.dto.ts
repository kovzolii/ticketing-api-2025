import { PartialType } from '@nestjs/mapped-types';
import { CreateTickectDto } from './create-tickect.dto';

export class UpdateTickectDto extends PartialType(CreateTickectDto) {}
