const arreglo = [1,4,7,7,5,3,8,9,9,1,0,0,0,3,3,1].sort();

console.log(arreglo)
let unicosElementos = [];
let alcenarrepeticiones = [];
let contador =1;

for (let i=0; i < arreglo.length; i++){
   if(arreglo[i+1] === arreglo[i]){
      // console.log("se repite el numero" + arreglo [i]);


contador++;
   }else{
       unicosElementos.push(arreglo[i]);
       alcenarrepeticiones.push(contador);
   contador =1;
}
  }

  console.log(unicosElementos)
  console.log(alcenarrepeticiones)

  for( let j=0; j <unicosElementos.length; j++){
    console.log(" el valor " + unicosElementos[j] +" se repite " + alcenarrepeticiones [j])
  }