var rect={
  perimeter:(x,y)=>{return 2*(x+y)},
  area:(x,y)=>{ return x*y}
};
function solveRect(l,b)
{
console.log("solving for rectangle with l=" + l + "and b = " + b);
if(l<=0 || b<=0){
console.log("Rectangle dimensions should be greaterthan zero:l="  + l + ", b="+ b);
}
else{
    console.log("the area of rectangle is " + rect.area(l,b));
    console.log("the perimeter of the rectangle is " + rect.perimeter(l,b));
}
}
solveRect(2,4);
solveRect(-3,5);
solveRect(0,5);
solveRect(3,4);