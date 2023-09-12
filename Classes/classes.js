function JsClass() {
    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
    }

        const myCar = new Car("Ford", 2015);

        document.getElementById("demo").innerHTML = myCar.name;
    
}

function ClassInheritance(){
    class Car{
        constructor(brand){
            this.carname = brand;
        }
        present(){
            return'I have a ' + this.carname;
        }
    }
    class Modele extends Car{
        constructor(brand, mod){
            super(brand);
            this.model = mod;
        }
        show(){
            return this.present() + ", it is a " + this.model;
        }
    }
    const mycar = new Modele("Ford","Mustang");
    document.getElementById("demo").innerHTML = mycar.show();

}