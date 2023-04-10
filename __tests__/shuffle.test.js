const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  const unshuffle = [1, 2, 3, 4, 5]
  test('check that shuffle returns an array', () => {
    let array = shuffle(unshuffle)
    expect(Array.isArray(array)).toBeTruthy()
  })
  test('check that it returns an array of the same length as the argument sent in', () => {
    let array = shuffle(unshuffle)
    expect(array.length).toBe(unshuffle.length)
  })
});

