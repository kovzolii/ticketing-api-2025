import { Test, TestingModule } from '@nestjs/testing';
import { TickectsService } from './tickects.service';

describe('TickectsService', () => {
  let service: TickectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TickectsService],
    }).compile();

    service = module.get<TickectsService>(TickectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
