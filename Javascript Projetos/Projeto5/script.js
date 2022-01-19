function ValidaArray(arr, num) {

    try {
        if (!arr && !num) throw new ReferenceError("Envie os parametros");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if (typeof arr !== 'number') throw new TypeError("Num precisa ser do tipo number");

        if (arr.length !== num) throw new RangeError("Tamando invalido!");

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro e um ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro e um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro e um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro nao esperado:" + e);
        }
    }
}

console.log(ValidaArray([], 5));