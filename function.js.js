// function with parameter and no return type
function fullName (fname,lname){
    console.log(fname+" "+lname);
    
} 
fullName("kavita","manoj");
//function with parameter and retun type
function WPNRT( fname,lname){
    return fname+lname;
}
var name= WPNRT("kavita","pandey");
//function without parameter and return type
function WOPNRT(){
    return "Manoj"+"Shukla";
}
var Name = WOPNRT();
// function without parameter and no return type
function WOPANRT(){
  console.log ("pragati"+"pandey"); 
    var a=5;
    var b=2;
    var c= a+b;
    var arr= [];
    for (let i=0; i<5;i++){
    arr.push(c+i); 
    }
    console.log(arr);
        
}WOPANRT();

