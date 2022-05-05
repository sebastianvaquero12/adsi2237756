 //instanciar una funcion para libros:titulo,numero de pagina,año de impresion


//cuantas paginas se lee por minuto, cuanto se demoraria el libro, dependinedo de las paginas que tenga el libro,
//metodo:si ese libro tiene mas de 10 años deicr que ese libro se debe remplazar, si tiene menos de 10  años cuanta vida util le queda al libro


function Libro(paginas,titulo,minuto,añosL,añoImp,vidaul){

    this.paginas = paginas;
    this.titulo=titulo;
    this.minuto=minuto;
    this.añosL=añosL;
    this.añoImp=añoImp;
    this.vidaul=vidaul;

     };

     this.setPaginas=function(paginas){
        this.paginas=paginas;
    this.infolibro=()=>"este libro tiene"+ 200 + "paginas";
    
}

var a=new Libro(41);

a.setPaginas(134);
console.log(a);