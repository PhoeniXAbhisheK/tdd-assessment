##Steps to run the project.
 - Checkout the repository locally.
 - Run `npm install` to download any missing dependencies.
 - Open terminal of your choice and run command `npm run test`.
 - If everything is in place, you should be able to see o/p as below

```
  input validation suite
    ✔ checks if function has input
    ✔ checks if input is blank, return zero
    ✔ checks if input is string

  input addition suite
    ✔ checks if input is single, return input
    ✔ checks if input is double, return sum
    ✔ checks if input is longer than 2, return sum

  newline and delimiter handling suite
    ✔ checks if input contains \n, if does treat as comma and return sum
    ✔ checks if input contains custom delimiters, replace with comma, and return sum
```