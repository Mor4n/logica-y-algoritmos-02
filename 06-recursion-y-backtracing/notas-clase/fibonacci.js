

function fibo(n) {
    // fibonacci tiene 2 casos base:
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }

    // Fuera de eso, si no es ninguno, regresamos:
    return fibo(n-1) + fibo(n- 2)


}

let result = fibo(2);

console.log(result);
