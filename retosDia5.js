function calculadora(operacion, op1, op2 = 0) {

    if (operacion === "sum") {

      return op1 + op2;

    } else if (operacion === "subs") {
        
      return op1 - op2;

    } else if (operacion === "mult") {

      return op1 * op2;

    } else if (operacion === "div") {

      return op1 / op2;
    }
    else if (operacion === "cuad") {

      return op1 * op1;
    }
}

console.log(sum, 5, 3);
console.log(subs, 5, 3);
console.log(mult, 5, 3);
console.log(div, 5, 3);
console.log(cuad, 5);