import { ImmediateClickModule } from './immediate-click.module';

describe('ImmediateClickModule', () => {
  let immediateClickModule: ImmediateClickModule;

  beforeEach(() => {
    immediateClickModule = new ImmediateClickModule();
  });

  it('should create an instance', () => {
    expect(immediateClickModule).toBeTruthy();
  });
});
