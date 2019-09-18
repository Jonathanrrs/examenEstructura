let btn = document.querySelector("#btn").addEventListener("click", () => {
    class numAmigos {
        constructor() {

        }

        calcular() {
            let suma1 = 0;
            let suma2 = 0;
            for (let i = 1; i <= 3000; i++) {
                for (let x = 1; x <= 3000; x++) {
                    if(i%x == 0) {
                        suma1+=x;     
                    }
                    
                }
            }
            for (let c = 1; c <= 3000; c++) {
                for (let x2 = 1; x2 <= 3000; x2++) {
                    if(c%x2 == 0) {
                        suma2+=x2;
                    }  
                }
            }
            if(i == suma2 && c == suma1) {
                console.log("son amigos" + i + ", " + c);
            }
        }
    }
    let numeros = new numAmigos();
    numeros.calcular();
    

});

