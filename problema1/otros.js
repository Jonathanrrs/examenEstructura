calcular() {
    for (let i = 1; i <= 3000; i++) {
        let suma = 0;
        for (let c = 1; c <= 3000; c++) {
            if(i%c == 0) {
                suma = suma + i;
                
            }
        }
    }
}

divisores() {
    for (let i = 1; i <= 3; i++) {
        for (let c = 1; c <= 3; c++) {
            if(i%c == 0) {
                console.log(c);
            }
        }
    }
}

numero() {
    let suma = 0;
     for (let i = 1; i <= 4; i++) {
         if(4%i == 0) {
             suma = suma + i;
             console.log(suma); 
         }
     }
     
}