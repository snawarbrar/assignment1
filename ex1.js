
// Constructor function for Person objects
function Customer(name, typeOfDrink, sizeOfCofee, drizzle, whippedCream, sweetner, coldFoam, diary) {
  this.name = name;
  this.typeOfDrink = typeOfDrink;
  this.sizeOfCofee = sizeOfCofee;
  this.drizzle = drizzle;
  this.whippedCream = whippedCream;
  this.sweetner = sweetner;
  this.coldFoam = coldFoam;
  this.diary = diary;
  this.order= function(){
  var output = "Hello "+name+ " You ordered "+typeOfDrink+ ". The Size of drink is "+ sizeOfCofee+" with ";
  if(drizzle.toLowerCase() === 'yes'){
    output = output.concat("drizze, ");
  }
  if(whippedCream.toLowerCase() === 'yes'){
     output = output.concat("whip Cream, ");
  }
  if(sweetner.toLowerCase()=== 'yes'){
     output = output.concat("sweetner, ");
  }
  if(coldFoam.toLowerCase()=== 'yes' ){
     output = output.concat("and cold");
  }
  alert(output);
}
}
let customer1= new Customer('snawar','latte','tall','No','Yes','yes','yes','2%milk');
customer1.order();
let customer2=new Customer('karan','latte','tall','yes','yes','yes','yes','2%milk');
customer2.order();
