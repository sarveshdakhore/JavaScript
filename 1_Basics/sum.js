// Function to add a range
function sum(fromIncluding,toExcluding,interval=1) {
    var sum = 0;
    if (interval===0){
        return "interval can't be 0"
    }

    if (fromIncluding>toExcluding){
        for(i=fromIncluding;i>toExcluding;i+=interval){
            sum+=i
        };
    }else{
        for(i=fromIncluding;i<toExcluding;i+=interval){
            sum+=i
        };
    }
    return sum;
}

console.log(sum(2,6))
console.log(sum(5,1,-1))