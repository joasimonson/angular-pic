import { VMessageModule } from './vmessage.module';

describe('VmessageModule', () => {
  let vmessageModule: VMessageModule;

  beforeEach(() => {
    vmessageModule = new VMessageModule();
  });

  it('should create an instance', () => {
    expect(vmessageModule).toBeTruthy();
  });
});
