// feet to mile conversion

 function feetToMile(feet){
        if(feet < 0 ){
            console.log("measurements can not be negative.please input positive value");
        }
        else{
            var mile = feet/5280;
            return mile.toFixed(2);
        }
 }
 var resultInMile = feetToMile(13200);
  console.log(resultInMile);

//   wood calculation

function woodCalculator(chair,table,bed){
    if(chair <0 || table<0 || bed <0){
         console.log("please input positive value");
    }
    else{
        totalWood = 1*chair + 3*table + 5*bed;
    return totalWood;
    }
}

var requiredWoodAmount = woodCalculator(4,3,1);
console.log("you will need", requiredWoodAmount , "cubic feet of wood");

// brick calculation 
 
function brickCalculator(n){
    if(n<=0){
        return "undefined";
    }
    else if( n>0 && n<=10){
        brickTotal = n*15*1000;
        return brickTotal;
    }
    else if(n>10 && n<=20){
        brickTotal = (n-10)*12*1000 ;
        return brickTotal + 150000;
    }
    else if(n>20){
        brickTotal = (n-20)*10*1000;
        return brickTotal + 150000 + 120000 ;
    }
}

var requiredBrick = brickCalculator(22);
console.log("you will need" ,requiredBrick , "piece of bricks");

// finding tiny friend
 
function tinyFriend(friends){
    if(friends.length ==0){
        return "please,at first,get some friends";
    }
    else{
        var tiny = friends[0];
    for(var i=0 ; i<friends.length ; i++){
        currentElement = friends[i];
        if(currentElement.length < tiny.length){
            tiny = currentElement
        }
    }
    return tiny;
    }
}
var myFriends = ["junayed","haris","kawsar","joy","rownak"];
var smallestFriend = tinyFriend(myFriends);
console.log( "my tiny friend is" , smallestFriend );

