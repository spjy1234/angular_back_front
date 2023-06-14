import { Test, TestingModule } from '@nestjs/testing';
import { AnimalMenuService } from './animal-menu.service';

describe('AnimalMenuService', () => {
  let service: AnimalMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimalMenuService],
    }).compile();

    service = module.get<AnimalMenuService>(AnimalMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
