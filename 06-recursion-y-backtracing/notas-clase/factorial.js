
function factorial(x){
    // debugger; // útil para identificar paso por paso que ocurre en lugar de user console.log

    if(x === 0){
        return 1;
    }
    else{
        return x * factorial(x-1)
    }

}

let total = factorial(3);
console.log(total);
