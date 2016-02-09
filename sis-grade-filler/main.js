// window.onload = 
function myFunc(){

  try
  {
// ===============================================
/*
var url = {"Dogukan Aciker": "https://www.codecademy.com/users/webJumper62951/achievements"};


var searchTerm ={unit5p1:"More on Control Flow in JS",
                unit5p2:"Choose Your Own Adventure 2",
                unit6p1:"Arrays and Objects in JS",
                unit6p2:"Contact List"};
var point = 0;
// var searchTerm ="Arrays and Objects in JS";
$(function(){
  for(var st in url){
    
  }
    $.get(url[st], function(data, status){
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
    }
         );
});
*/
// ===============================================

/*
var response = '';
$.ajax({ type: "GET",   
         url:"https://www.codecademy.com/users/webJumper62951/achievements",   
         async: false,
         success : function(text)
         {
             response = text;
         }
});
console.log(response.indexOf("More on Control Flow in JS")!=-1);
*/



    
  }
catch(err)
  {
   
  }

}
document.onload=myFunc();
// setTimeout(myFunc, 500);

