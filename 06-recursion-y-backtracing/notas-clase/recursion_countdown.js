
function countdown(num){
    console.log(num);
    
    // caso base, lo que rompe el ciclo por asi decirlo, no suele contener parte recursiva, aunque se puede tener varios casos base
    if(num == 0){

        return ; // En este caso, se puede dejar el return;
    }
    
    else{
        return countdown(num - 1); // num--
    }



}



countdown(10)