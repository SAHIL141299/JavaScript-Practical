const numbers = Array.from({ length: 100 }, (_, index) => index + 1);
numbers.map((number) => console.log(number%3==0 && number%5==0 ? "FizzBuzz":number%3==0?"Fizz":number%5==0?"Buzz":number));

