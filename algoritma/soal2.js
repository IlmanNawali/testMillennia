function makeInput(min,max,input){
    if (max <= input){
        console.log ("-- output : input is more than value")
    }else if (min >= input){
        console.log ("-- output : input is less than value")
    }else if (min <= input && max >= input){
        console.log ("-- output : input is in range")
    }
}
function main(){
    var min = 0
    var max = 10 
    var input = 12
    var init= makeInput(min,max,input);
    console.log(init)
}
console.log(main())