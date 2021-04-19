const fizzbuzz = require("./fizzbuzz");

describe('Given a fizzbuzz function', () =>{
  describe('When 1 is passed as a parameter', () =>{
    test('Then will return 1', () =>{
    //arrange
    const expected = 1;
    //act
    const result = fizzbuzz(1);
    //assert
    expect(result).toBe(expected)
    })
  })
  describe('When 3 is passed as a parameter', () =>{
    test('Then will return fizz', () =>{
    //arrange
    const expected = 'fizz';
    //act
    const result = fizzbuzz(3);
    //assert
    expect(result).toBe(expected)
    })
  })
  describe('When 5 is passed as a parameter', () =>{
    test('Then will return buzz', () =>{
    //arrange
    const expected = 'buzz';
    //act
    const result = fizzbuzz(5);
    //assert
    expect(result).toBe(expected)
    })
  })
  describe('When 15 is passed as a parameter', () =>{
    test('Then will return fizzbuzz', () =>{
    //arrange
    const expected = 'fizzbuzz';
    //act
    const result = fizzbuzz(15);
    //assert
    expect(result).toBe(expected)
    })
  })
  describe('When 0 is passed as a parameter', () =>{
    test('Then will return 0', () =>{
    //arrange
    const expected = 0;
    //act
    const result = fizzbuzz(0);
    //assert
    expect(result).toBe(expected)
    })
  })
})