console.log('Selam'); //Eritrea
console.log('Marhaba'); //Arabic
console.log('Hoi');//Netherlands
console.log('Bonjour'); //France

/*    ---------2--------------- */

console.log("I'm awesome");

/*    ---------3--------------- */

let x;
console.log('I think the value will be 10')
x=7;
console.log('the value of x will be: 10');
console.log('the value of x will be:'+x);
/*    ---------4--------------- */

let y='Selam';
console.log('I think the string will be: Hallo');
console.log('The actual value is:'+y);
y='Hoi';
console.log('I think the string will be: Selam');
console.log('The actual value is:'+y);

/*    ---------5--------------- */
let z=7.25;
console.log(z);
let a=7;
console.log(a);
let b=Math.max(z,a);
console.log('the higest number among:' +a+ 'and'+ z+ 'is::'+b);


/*    ---------6--------------- */
let favAnimals=[];
console.log('the value of the array is string');
favAnimals=['Dog','Cat','Cow']
console.log('list of my favourite animals:'+favAnimals);
favAnimals.push('babypig');
console.log('list of my favourite animals:'+favAnimals);


/*    ---------7--------------- */
let verse='I am blessed!';
console.log(verse);
let leng=verse.length;
console.log('this is the length of the verse is:'+leng);
/*    ---------8--------------- */
let f=20;
let g=30;
let j='First name';
let i='Nick name';
console.log('the value of f is:'+f);
console.log('the value of g is:'+g);
console.log('the value of j is:'+j);
console.log('the value of i is:'+i);

console.log('the type of the variables f and g is a number')
console.log('the type of the variables j and i is a string')

console.log( 'the actual type of the variable f is: '+ typeof(f));
console.log( 'the actual type of the variable g is: ' + typeof(g));
console.log('the actual type of the variable j is: ' + typeof(j));
console.log('the actual type of the variable i is: '+ typeof(i));

console.log('the value of the variable f is greater or equal to the value of the variable g:'+ (f>=g));
console.log('20 and 30 are equal:' + (f===g));
console.log('the length of the value j greater than length of i::' + (j.length >=i.length));

if (typeof f===typeof g)
{
    console.log('Variable f and g has the same type')
}

if (typeof f===typeof i)
{
    console.log('Variable f and i has the different type')
}



/*    ---------9--------------- */
let q=7;
let p=22;
q= q % 3;
let r;
r=p % 4;
let t=p %r
console.log('The new value of q is::'+q);
console.log('the devision reminder(modulus) of 22 and 4  is '+r );
console.log( 'the devision reminder(modulus) of 22(with var. p)and r(with the value of 2) is '+t);

/*    ---------10--------------- */

let mixedarray;
mixedarray=[2, 4, 6, 'Hallo',1,'everybody' ];
console.log( mixedarray);

if (5/0===10/0)// this means is infinity with infinity equal ---> yes, it is equal
{
    console.log(' number/0 is legal in JS: called Infinity: So it returns True');
}