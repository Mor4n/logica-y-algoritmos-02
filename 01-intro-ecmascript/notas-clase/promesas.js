
// Se usa para obtener datos de bdds, apis, u otras cosas de forma asincrona

let promesa = new Promise ( (resolve, reject) =>{
    resolve("De vuelta")
})

//esto

promesa.then (
    (res) =>{
        console.log(res);
        
    }

)


// equivale a esto con ecmascript

const fn = async (params) => {
    let res = await prom;
    console.log(res);
    
}

fn();