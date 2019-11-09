const exercise = require("../exercise1");

describe("fizzBuzz", () => {
  it("Should throw an exception if input is not a namber", () => {
    expect(() => {
      exercise.fizzBuzz("michael");
    }).toThrow();
    expect(() => {
      exercise.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      exercise.fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      exercise.fizzBuzz({});
    }).toThrow();
  });

  it("Should return FizzBuzz if input is divisible by 3 and 5", () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("Should return Fizz if input is only divisible by 3", () => {
    const result = exercise.fizzBuzz(18);
    expect(result).toBe("Fizz");
  });

  it("Should return Buzz if input is only divisible by 5", () => {
    const result = exercise.fizzBuzz(20);
    expect(result).toBe("Buzz");
  });

  it("Should return input if it is not divisibly by 3 and 5", () => {
    const result = exercise.fizzBuzz(17);
    expect(result).toBe(17);
  });
});
