import { ShowIfLoggedModule } from './show-if-logged.module';

describe('ShowIfLoggedModule', () => {
  let showIfLoggedModule: ShowIfLoggedModule;

  beforeEach(() => {
    showIfLoggedModule = new ShowIfLoggedModule();
  });

  it('should create an instance', () => {
    expect(showIfLoggedModule).toBeTruthy();
  });
});
