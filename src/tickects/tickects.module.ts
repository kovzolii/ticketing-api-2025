import { Module } from '@nestjs/common';
import { TickectsService } from './tickects.service';
import { TickectsController } from './tickects.controller';

@Module({
  controllers: [TickectsController],
  providers: [TickectsService],
})
export class TickectsModule {}
