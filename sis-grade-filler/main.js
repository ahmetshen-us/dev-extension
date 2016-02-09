// window.onload = 
function myFunc(){

  try
  {

var url = "https://www.codecademy.com/users/textBlaster76324/achievements";
var searchTerm ={unit5p1:"More on Control Flow in JS",
                unit5p2:"Choose Your Own Adventure 2"};
var point = 0;
// var searchTerm ="Arrays and Objects in JS";
$(function(){
    $.get(url, function(data, status){
//         alert("Data: " + data + "\nStatus: " + status);
//       console.log(data.indexOf(searchTerm));
      for (var key in searchTerm) {
//   console.log("key " + key + " has value " + myArray[key]);
        if(data.indexOf(searchTerm[key])!=-1){
            console.log(key + " is finished");
          point+=50;
        }else {
          point = 0;
        }
}
      console.log(point);
    });
});





    // leftArrowKey = 37
    //    upArrowKey = 38
    //    rightArrowKey = 39
    //    downArrowKey = 40

    //    e = jQuery.Event("keydown");
    //    e.which = downArrowKey;
    //    $("tGrd_r1_c24_cs0grd789903").trigger(e);


    
  }
catch(err)
  {
   
  }

}
document.onload=myFunc();
// setTimeout(myFunc, 500);

