// window.onload = 
function myFunc(){

  try
  {

document.getElementById("assignmentBar").style.width = "1000px";
document.getElementById("assignmentBar").style.paddingRight = "50px";
// document.getElementById("assignmentBar").setAttribute("cellpadding","5px");
var gradeBarElement = document.getElementById("gradeBar");
gradeBarElement.style.width = "1000px";
gradeBarElement.style.paddingRight = "50px";

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

  try{
    document.getElementById("lStudents").style.height = "350px";
        // console.log(document.getElementById("lStudents"));

  } 
  catch(err){

  }

}
document.onload=myFunc();
// setTimeout(myFunc, 500);

