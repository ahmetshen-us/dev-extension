function myFunc(){

  try
  {
document.getElementById("assignmentBar").style.width = "1000px";
// document.getElementById("assignmentBar").style.paddingRight = "20px";
// document.getElementById("assignmentBar").setAttribute("cellpadding","5px");
var gradeBarElement = document.getElementById("gradeBar");
gradeBarElement.style.width = "1000px";
// gradeBarElement.style.paddingRight = "20px";

// gradeBarElement.setAttribute("cellpadding","5px")


document.getElementById("ScrollY").style.width = "1000px";
var objDiv = document.getElementById("ScrollY");
// objDiv.scrollTop = objDiv.scrollHeight;
objDiv.scrollLeft = objDiv.scrollWidth;

// var gradesTableElement = document.getElementById("gradesTable");
// gradesTableElement.setAttribute("cellpadding","5px")
    
  }
catch(err)
  {
   
  }

}
// document.onload(myFunc);
setTimeout(myFunc, 1000);

