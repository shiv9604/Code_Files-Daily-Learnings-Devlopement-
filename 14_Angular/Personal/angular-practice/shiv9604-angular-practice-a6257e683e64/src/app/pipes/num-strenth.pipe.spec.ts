import { NumStrenthPipe } from './num-strenth.pipe';

describe('NumStrenthPipe', () => {
  let pipe: NumStrenthPipe;

  beforeEach(()=>{
    pipe = new NumStrenthPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('it should return weak for value 3',()=>{
    expect(pipe.transform(3)).toEqual('3 [weak]')
  });

  it('it should return strong for the value 7',()=>{
    expect(pipe.transform(7)).toEqual('7 [strong]')
  });

  it('it should return strongest for the value 15',()=>{
    expect(pipe.transform(15)).toEqual('15 [strongest]')
  })
});
