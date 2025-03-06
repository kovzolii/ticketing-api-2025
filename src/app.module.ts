import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TickectsModule } from './tickects/tickects.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [TickectsModule, PrismaModule.forRoot({ isGlobal: true }), BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
