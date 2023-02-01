
var max = 100;

var array = [];

for(var i=0; i<max-1; i++){
    if(i%3 == 0 && i%5 == 0){
        result3="Kadal Buntung";
        array.push(result3);
    }
    else if(i%3 == 0){
        result1="Kadal";
        array.push(result1);
    }
    else if(i%5 == 0){
        result2="Buntung";
        array.push(result2);
    }
    else{
        array.push(i);
    }
}

console.log(array)