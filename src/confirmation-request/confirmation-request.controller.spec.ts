import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmationRequestController } from './confirmation-request.controller';

describe('ConfirmationRequest Controller', () => {
  let controller: ConfirmationRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfirmationRequestController],
    }).compile();

    controller = module.get<ConfirmationRequestController>(ConfirmationRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
