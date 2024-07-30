import { Test, TestingModule } from '@nestjs/testing';
import { SociosEventosController } from './socios-eventos.controller';

describe('SociosEventosController', () => {
  let controller: SociosEventosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SociosEventosController],
    }).compile();

    controller = module.get<SociosEventosController>(SociosEventosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
