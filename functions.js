function readBook(){
    console.log("Which Book Shoud I Read now?");
    console.log("Ans: How to Program, Java");
}

readBook();

function tripleIt(x){
    var result1 = x*3 ;
    return result1;
}




function returnIt(y){
     var result2 = y*2;
     return result2;

}


var r1 = tripleIt(2);
var r2 = returnIt(3);
//console.log(result1,result2) not do this

console.log(r1, r2)



function add(p, q){
    var sum = p+ q;
    return sum;
}
 var collect = add(10,20)
console.log("Collect: " +collect);  