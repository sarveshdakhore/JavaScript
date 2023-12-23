n0 = 1;
n1 = 1;

// Non recursive
function fibo(n0,n1,term){
    if (term===0){
        return n0;
    }else if (term===1){
        return n1;
    }
    var temp = [n0,n1];
    for (i=2;i<=term;i++){
        var x = temp[1]
        temp[1]=temp[0]+temp[1]
        temp[0]=x
    }return temp[1];
}

console.log(fibo(1,3,9))


//Recursive
function fiboRecursive(n0,n1,term) {
    if (term===0){
        return n0;
    }else if (term===1){
        return n1;
    }else{
        return fiboRecursive(n0,n1,n-1)+fiboRecursive(n0,n1,n-2)
    }
}
console.log(fibo(1,3,9))

//123
//123
// Same for both recursive and naive