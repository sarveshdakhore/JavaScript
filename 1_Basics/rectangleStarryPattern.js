// to print rectangle 1unit = dist b/w two '*'
// takes length and breadth accordingly
function rectangle(length,height){
    var s1 = '';
    for (i=0;i<=length;i++){
        s1+='*  '
    }
    console.log(s1);
    var s2='*  ';
    // to take length-2 spaces
    for(i=1;i<length;i++){
        s2+='   ';
    }s2+='*'
    //to take height-2 rows
    for (i=2;i<height+1;i++){
        console.log(s2)
    }console.log(s1)
}
rectangle(1,1)
console.log()
rectangle(2,2)
console.log()
rectangle(3,3)
console.log()
rectangle(5,6)
console.log()
rectangle(20,20)