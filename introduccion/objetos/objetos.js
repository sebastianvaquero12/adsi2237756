//capacidad tanque, cilindraje ,    metodo donde pueda: tanquear,
    //cuantos kilometros puede recorrer un auto?     cuantos kilometros por galon recorre un auto?,
    
function Auto(marca,modelo,captanque,cilindraje){
    this.marca = marca;
    this.modelo=modelo;
    this.captanque=captanque;
    this.cilindraje=cilindraje;

    this.setMarca=function(marca){
        this.marca=marca;
    this.infoauto=()=>"Esta marca es";
    
}
    this.setModelo=function(modelo){
        this.modelo=modelo;
    this.infoauto=()=>"Este modelo es";
}

    this.setCaptanque=function(captanque){
        this.captanque=captanque;
    this.infoauto=()=>"Este es la capacidad de tanqueo";
    
    }

    this.setCilindraje=function(cilindraje){
        this.captanque=captanque;
    this.infoauto=()=>"Este es la capacidad de cilindraje";
    
    }

    };

  
    
    var a=new Auto("mazda","explorer");
var b=new Auto(95+"litros");
var c=new Auto(3.6+"Lv6");
var d=new Auto(95+"litros", 3.6+"Lv6");

    a.setMarca("dodge");
    b.setModelo("caliber");
    c.setCaptanque(97+"litros");
    d.setCilindraje(3.6+"Lv6");
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    
    
    
    
   
    





    
    //el unico atributo que tiene es un arreglo de numeros, hacer metodo para contar pares y sumar impares
    
    /*const arreglo= [2,5,53,84]
    
    function Numeros (impar,par){
    
        var d=new= Numeros(impar1), (impar2) , (par1) , (par2) ;
    
    this.impar="par1","par2";
    this.par=",""
         
    };
    
    /*
    function Arreglo vec=vec;
        this.cuentaPar=function(){
    let cont=0;
    for(let i=0; i < this.vec.length; i++) {
        if (this.vec[i]%2==0) {
    cont ++;
        
    
        }
    
    
    */
    
    
    
    
    