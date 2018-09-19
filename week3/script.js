/*----- --------------------------1--------------------------------------- */

let  mystring ="hello,this, is, a, difficult, to, read, sentence"

console.log(mystring);
console.log(mystring.length);// length of mystring

  mystring.replace(/,/g," ");//thisis built in function :replace
  console.log(mystring);// log mystring with out commas

  /*----- --------------------------2--------------------------------------- */

  let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
  
  favoriteAnimals.push('turtule');// add turtle to an array favoriteAnimals
  
  console.log(favoriteAnimals);
  
  favoriteAnimals.splice(1,0,'meerkat');// add meerkat after blowfish at index 1 deleting 0 items

  console.log('the new value of the array is: blowfish, meerkat, capricorn, giraffe, turtle ')

  console.log(favoriteAnimals); // new value of the array

  console.log('the array has a length of:' + favoriteAnimals.length);// shows length of the array

  favoriteAnimals.splice(3,1)// delete giraffe at index 3  and  1 item to be deleted.

  console.log(favoriteAnimals); // logging new array
  

  
//2.9
  
  for ( let i = 0; i < favoriteAnimals.length; i++){
      if (favoriteAnimals[i]==='meerkat'){                //search for the string meerkant and returns the index of it.
      console.log('The item you are looking for is at index:' + i);
      }

  }

 



                // More JavaScript
  /* _____________________________1___________________________________ */
  let a;
  let b;
  let c;
  function sum(a, b, c,){
     return a + b + c;
  }

 let result=sum(1,2,3);
  console.log('the result of an addition of 1,2 and 3 is :'+result);// sum is 6


  /* _____________________________2___________________________________ */

  let carC;
  function colorCar(carC){ // delclaring of the function colorCar
      
      console.log('the color of the car is :' + carC )

 }
colorCar('red');  // calling the function colorCar() with red color ;
colorCar('blue');  // calling the function colorCar() with blue color ;

/* _____________________________3__________________________________ */
 
/*let obj={}

   function fullName(obj){

     console.log(obj);
     }


fullName('zer','solo');
*/


 /* _____________________________4_________________________________ */
 // this functions recieves cC(car color) and Code and prints out 
  let cC;
  let codeVehicle;
  
 function vehicleType(cC,codeVehicle) {
    if (codeVehicle ===1 ){
      console.log('a ' + cC + ' Car')
    }
     else if(codeVehicle===2) {
      console.log('a ' +cC +' motorbike')
     }

 }

 vehicleType('blue',2) // calling the above function
 
 vehicleType('Black',1)

 
 /* _____________________________5_________________________________ */

console.log(3===3 ? 'yes':'no');

 /* _____________________________6________________________________ */

// function with parameter color ,code and age and prints the status of the vehicle.

let age;
function vehicle(cC,codeVehicle,age) {
  if (codeVehicle === 1 && age >2 ){
    console.log('a ' + cC + '  Used Car')
  }

 else if (codeVehicle === 1 && age<=2){
    console.log('a ' + cC + '  new Car')
  }

   else if(codeVehicle === 2 && age > 2) {
    console.log('a ' +cC +' Used motorbike')
   }
   else if(codeVehicle === 2 && age <= 2) {
    console.log('a ' +cC +' new motorbike')
   }


}
//calling the above function

vehicle('blue',1,5) //  a blue used car :       

vehicle('black',2,10) // black used motorbike

/* _____________________________7________________________________ */

let vehicleList=[ 'car','motorbike', 'caravan', 'bike'];

/* _____________________________8________________________________ */

let thirdElement=vehicleList[2]; // getting third element from the list

console.log(thirdElement);




/* _____________________________9________________________________ */


function newVehicle(cC,codeVehicle,age) {
  //Car
  if (codeVehicle === vehicleList.indexOf('car') && age >2 ){
    console.log('a ' + cC + '  Used Car')
  }

 else if (codeVehicle === vehicleList.indexOf('car') && age<=2){
    console.log('a ' + cC + '  new Car')
  }
//Motorbike
   else if(codeVehicle === vehicleList.indexOf('motorbike') && age > 2) {
    console.log('a ' +cC +' Used motorbike')
   }
   else if(codeVehicle === vehicleList.indexOf('motorbike') && age <= 2) {
    console.log('a ' +cC +' new motorbike')
   }
   
   //Caravan
   else if(codeVehicle === vehicleList.indexOf('caravan') && age > 2) {
    console.log('a ' +cC +' Used caravan')
   }
   else if(codeVehicle === vehicleList.indexOf('caravan') && age <= 2) {
    console.log('a ' +cC +' new caravan')
   }

//bike
 else if(codeVehicle === vehicleList.indexOf('bike') && age > 2) {
    console.log('a ' +cC +' Used bike')
   }
   else if(codeVehicle === vehicleList.indexOf('bike') && age <= 2) {
    console.log('a ' +cC +' new bike')
   }

  }

  
newVehicle('gray',0,1)
newVehicle('Green',3,1)


/* _____________________________10________________________________ */

let s = "";
for( let i = 0; i < vehicleList.length-1;i++){
    s += vehicleList[i].toUpperCase() + ", " ;  


}

// 4
console.log("Amazing Joe's Garage, we service" + " " + s + 'and ' + vehicleList[vehicleList.length-1].toUpperCase() + ". "); 



  /* _____________________________11_______________________________ */
 // add one vehicle to the existing vehicle list

  vehicleList.push('truck'); // adds truck 

 
  console.log(vehicleList); // log the updated list of vehicles.

  console.log("Amazing Joe's Garage, we service" + " " + s + 'and ' + vehicleList[vehicleList.length-1].toUpperCase() + ". "); // updated advertisment with one item added

/* _____________________________12-14________________________________ */



 let teachers={ htmlCss:'Evana',
                git:'Unmesh', 
                jS:'Marco'
                }


console.log(teachers.htmlCss)

console.log(teachers.git)

console.log(teachers.jS)

/* _____________________________15________________________________ */

let p = [1,2,3];
let q = [1,2,3];
let r = q;

console.log(p==q); //returns false 
console.log(p===q); //returns false : In both cases(regular or strict equality) returns false this is because p and q have differnet memories , i.e they refer 
                      // to differnt arrays p and q
console.log(r==q);//returns true   .In this case r has the same memory as q.They refer to the same array. 
 
/* _____________________________16________________________________ */
let o1 = {foo: 'bar', foo1:'bar1'};
let o2 = {foo:'bar'};
let o3 = o2;

console.log(o3);

/*          ---changing o2  changs also o3  because they are refering to the same memory:
            ---changing o1 doesnt effect or changes o3
            ---the order matters ofcourse because when we do o3= o2 means o3 is pointing to the memory of the already assigned o2 :
            ---but the other way round doesn't make sense.
*/


/* _____________________________17________________________________ */

let bar = 42;
console.log(typeof typeof bar);// returns string
// it rreturns because the type of bar is number, but the second typeof accepts the word number and ofcourse it is string. 
console.log(bar);
