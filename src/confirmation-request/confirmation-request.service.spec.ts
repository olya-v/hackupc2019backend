import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmationRequestService } from './confirmation-request.service';

describe('ConfirmationRequestService', () => {
  let service: ConfirmationRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfirmationRequestService],
    }).compile();

    service = module.get<ConfirmationRequestService>(ConfirmationRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
