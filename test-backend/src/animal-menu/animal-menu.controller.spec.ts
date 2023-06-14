import { Test, TestingModule } from '@nestjs/testing';
import { AnimalMenuController } from './animal-menu.controller';
import { AnimalMenuService } from './animal-menu.service';

describe('AnimalMenuController', () => {
  let controller: AnimalMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalMenuController],
      providers: [AnimalMenuService],
    }).compile();

    controller = module.get<AnimalMenuController>(AnimalMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
