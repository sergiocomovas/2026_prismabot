import { Test, TestingModule } from '@nestjs/testing';
import { SociosEventosService } from './socios-eventos.service';

describe('SociosEventosService', () => {
  let service: SociosEventosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SociosEventosService],
    }).compile();

    service = module.get<SociosEventosService>(SociosEventosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
