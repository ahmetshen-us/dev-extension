function myFunc(){

  try
  {
document.getElementById("assignmentBar").style.width = "1000px";
document.getElementById("gradeBar").style.width = "1000px";
document.getElementById("ScrollY").style.width = "1000px";
var objDiv = document.getElementById("ScrollY");
// objDiv.scrollTop = objDiv.scrollHeight;
objDiv.scrollLeft = objDiv.scrollWidth;
    
  }
catch(err)
  {
   
  }

}
// document.onload(myFunc);
setTimeout(myFunc, 1000);

