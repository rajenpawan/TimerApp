var expect = require('expect');

it('should properly run tests', () => {
  expect(1).toBe(1);
});

describe('App', () =>{
  it('should Properly run tests', () => {
    expect(1).toBe(2);
  });
});
