import { Test, TestingModule } from '@nestjs/testing';
import { TickectsController } from './tickects.controller';
import { TickectsService } from './tickects.service';

describe('TickectsController', () => {
  let controller: TickectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TickectsController],
      providers: [TickectsService],
    }).compile();

    controller = module.get<TickectsController>(TickectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
