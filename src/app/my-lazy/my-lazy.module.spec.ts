import { MyLazyModule } from './my-lazy.module';

describe('MyLazyModule', () => {
  let myLazyModule: MyLazyModule;

  beforeEach(() => {
    myLazyModule = new MyLazyModule();
  });

  it('should create an instance', () => {
    expect(myLazyModule).toBeTruthy();
  });
});
