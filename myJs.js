/*console.log("Hello World");
//Variable data type coercion (js converts data types as per requirement-strings, numbers, boolean, undefined, null)
var firstName = 'Soyam';
var age;
var job= "software developer";

console.log(firstName +" "+'is a ' + age + ' '+'year old ' + job );   

//Variable mutation (reclaring variable changes their value)

age= 30;
job= 'driver';
alert(firstName +" "+'is a ' + age + ' '+'year old ' + job ); 

//usage of prompt method (gives a prompot question, you answer the question, and it gets stored in that variable.)

var lastName= prompt('What is my last name?')
console.log(lastName); */

//first coding challenge

/*var massMark = 60 ;
var heightMark = 1.75;

var massJohn = 80;
var heightJohn = 1.80;

var markBmi = massMark/ (heightMark*heightMark);
var johnBmi = massJohn/ (heightJohn*heightJohn);
console.log(markBmi);
console.log(johnBmi);

var isMarkHigh= markBmi >= johnBmi ;
console.log("Is Mark's BMI higher than John's?"+ " "+ isMarkHigh); */

/*var myName= "Soyam";
var myAge = 28;

myAge>= 18 ? console.log(myName + ' can drink beer!')
    : console.log(myName + ' cannot drink beer!.');

var myDrink = myAge>=18 ? 'beer' : "juice" ;
    console.log(myDrink);

    if(myAge>=18){
         myDrink= 'beer';
    } else{
        myDrink= 'juice';
    }
    console.log(myDrink); */

  /*  var myJob= "rapper";
    var myName = "Soyam";

    switch (myJob){
        case "singer" :
            case "rapper" :
         console.log('Soyam teaches how to sing.');
            break;
            case "dancer" :
                console.log('Soyam teaches how to dance.');
                break;
                default :
                console.log('Soyam teaches something else.')
                
        } */

        var newName= 'Soyam';
        var newAge= 2;

       /* if(newAge<13) {
            console.log(newName+ ' is a girl.');
        }
        else if(newAge>=13 && newAge<20){
            console.log(newName+ ' is a teenager.');
        }
        else if(newAge>=20 && newAge<=30){
            console.log(newName+ ' is a young woman.');
        }
        else{
            console.log(newName+ ' is a woman.')
        }; */

        //Ternanry operator

         /*newAge<13 ? console.log(newName+ ' is a girl.')
        : console.log(newName+ ' is a woman.'); */

        //Switch statements

      /* newAge= 15;

        switch (newAge){                                             //CODE NOT WORKING WITH CHANGING VARIABLE.      
         case newAge<13:
             console.log(newName+ ' is a girl.');
             break;
         case newAge>=13 && newAge<20:
             console.log(newName + ' is a teenager.');
             break;
         case newAge>=20 && newAge<50:
             console.log(newName+ ' is a woman.');
             break;
         default:
             console.log(newName+ ' is an oldie.');          
        } */
        
        // Truthy and falsy values

  //  var height;
  //  height;

   /* if(height){
        console.log('It is defined.');               //output is else because underfined is a falsy value, not recognized.
    }                                                // same with 0, null, '', NaN
    else{
        console.log('It is not defined.');
    } */

  //  height= 0;
    /*if(height){
        console.log('It is defined.');                  //still shows not defined because 0 is a falsy value.
    }
    else{
        console.log('It is not defined.');
    } */ 

   /* if(height || height===0){
        console.log('It is defined.');                 //it is defined because of our condition. used to check falsy variables in code.
    }
    else{
        console.log('It is not defined.');
    } */ 

   /* height= '23';
    if (height===23){                                   // == (equal values) && ===(equal value and type)
        console.log('== does type coercion.');
    }
    else{
        console.log('=== does not do type coercion.');
    } */

   // CODING CHALLENGE 2
 /*  var mGame1= 11, mGame2= 94, mGame3=3;
   var jGame1=11, jgame2= 94, jGame3= 3;
   var maryGame1=11, maryGame2=94, maryGame3=   3;

   var avgMike= (mGame1+mGame2+mGame3)/3;
   var avgJohn=(jGame1+jGame3+jGame3)/3;
   var avgMary=(maryGame1+maryGame2+maryGame3)/3;

   if(avgMike>avgJohn && avgMike>avgMary){
       console.log("Mike is the winner.");
       console.log(avgMike);
   } 
   else if(avgJohn>avgMike && avgJohn>avgMary){
       console.log("John is the winner.");
       console.log(avgJohn);
   }
   else if(avgMary>avgJohn && avgMary>avgMike){
       console.log("Mary is the winner.");
       console.log(avgMary);
   }
   else {
       console.log(avgJohn);
       console.log(avgMike);
       console.log(avgMary  );
   } */

   // Functions

 /*  function findAge(birthYear){
       return 2021-birthYear;
   }
   var ageSoyam= findAge(1993);
   console.log(ageSoyam);

   var ageDeepak= findAge(1992);
   console.log(ageDeepak);

   var ageDad= findAge(1968);
   console.log(ageDad);

   var ageMom= findAge(1972);
   console.log(ageMom);

   function myRetirement(year){
       console.log(65-findAge);

   }
   myRetirement(1993); */

//FUNCTION Expression
/*var whatPeopleDo = function(job, firstName){
    switch (job){
        case "teacher" :
            return firstName+ ' teaches kids.';
            case "dancer" :
            return firstName+ ' teaches how to dance.';
            case "driver" :
            return firstName+ ' drives a cab.';
            default :
            return 'We don\'t know what '+ firstName+ ' does.';
                    
    }
}
console.log(whatPeopleDo('driver', 'Mukesh')); */

//ARRAYS
/*var myIntro= ["Gupta", 28, "India", "Family", "Employed", true] ;
/*console.log(myIntro.length);
console.log(myIntro[0]);

myIntro[3]= "Gurgaon";
myIntro[6]= "loves music";
myIntro[7]= "unmarried"
console.log(myIntro); */ 

//push, unshit to add elements to array.
//pop, shift to delete elements from array.
//indexOf- to check position and existence of element in array.
 
/*myIntro.shift();
myIntro.unshift("Ms.");
myIntro.pop();
myIntro.push(6478045682);

console.log(myIntro.indexOf("cream"));
console.log(myIntro); */

/*myIntro.indexOf("Soyam")=== 0 ? console.log("This is Soyam.")
: console.log("It is not Soyam."); */

//CODING CHALLENGE- $124, $48, $268-   20% IF BILL<50, 15% IF 200>BILL>50, 10% IF BILL>200.

/*function calculateTip(bill){
if(bill<50){
    return bill*0.2;
}
else if(bill>=50 && bill<=200){
    return bill*0.15;
}
else if(bill>200){
    return bill*0.10;
}
}
var bills= [124, 48, 268];
var tips=[calculateTip(bills[0]),
              calculateTip(bills[1]),
              calculateTip(bills[2])];

console.log(tips);

var finalBill=[bills[0]+tips[0],
               bills[1]+tips[1],
               bills[2]+tips[2]];

console.log(finalBill); */

/*var numbers= new Array();
numbers[0]= 77;
numbers[3]= 100;
console.log(numbers);

var mySelf={
    firstName:"Soyam",
    lastName:"Gupta",
    birthyear: 1993,
    isMarried:false
}; */

/*var myFavourite= new Object();
myFavourite.color="black";
myFavourite.food="pizza";
myFavourite['number']=100;
myFavourite['drink']="tea";

myFavourite.color="red";
myFavourite.pet="dog";
myFavourite['actor']="Ranveer Singh";
var x= 'food'
;
console.log(myFavourite[x]);

console.log(mySelf);
console.log(myFavourite);

console.log(mySelf.firstName);
console.log(mySelf['age']);
 */

/*var mySelf={
    firstName:"Soyam",
    lastName:"Gupta",
    birthYear: 1997,
    isMarried:false,
    calcAge: function(){
        this.age= 2021-this.birthYear;
    }
};

mySelf.calcAge()
console.log(mySelf); */

//CODING CHALLENGE

/*var johnObj={
    name: 'John Smith',
    mass: 60,
    height: 1.62,
    calcBMI: function(){
        return this.BMI= this.mass/this.height^2
    }
};

var markObj={
    name: 'Mark Doe',
    mass: 65,
    height: 1.55,
    calcBmi: function(){
        return this.Bmi= this.mass/this.height^2
    }
};

johnObj.calcBMI();
markObj.calcBmi();
console.log(johnObj);
console.log(markObj);

if (johnObj.BMI>markObj.Bmi){
    console.log(johnObj.name+' has the highest BMI of '+ johnObj.BMI);
} 
else if (markObj.Bmi>johnObj.BMI){
    console.log(markObj.name+' has the highest BMI of '+ markObj.Bmi);
} 
else
    console.log("It is a draw."); */

var myLife= ['love', 28, 1993, 'Soyam', 'Gupta', 647, 'India'];

/*for(var i= 0; i<myLife.length; i++){
    if(typeof myLife[i] !== 'string') continue;
    console.log(myLife[i]); */

/*for(var i= 0; i<myLife.length; i++){
    if(typeof myLife[i] !== 'string') break;
    console.log(myLife[i]); */

/*var i=0;
while (i<myLife.length){
    console.log(myLife[i]);
    i++
} */

for(var i= myLife.length; i>=0; i--){
    if(myLife[i]=== undefined) continue;
    console.log(myLife[i]);
}

    





