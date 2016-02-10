// window.onload = 
function myFunc() {

    try {
        // ===============================================

var nameUrl = {
    "Dogukan Aciker": "https://www.codecademy.com/users/webJumper62951/achievements",
  "Furkan Aldemir":"https://www.codecademy.com/users/furkan28aldemir/achievements",
  "Ihsan Alkin":"https://www.codecademy.com/users/IhsanAlkin/achievements",
  "Burak Bilgen":"https://www.codecademy.com/users/BurakBilgen/achievements",
  "Yunus Celik":"https://www.codecademy.com/users/chipSolver75435/achievements",
  "Abdulkerim Eygoren":"https://www.codecademy.com/users/systemPro77748/achievements",
  "Omer Gece":"https://www.codecademy.com/users/omergece/achievements",
  "Sajidur Kader":"https://www.codecademy.com/users/teraBlaster90154/achievements",
  "Cankutay Katkat":"https://www.codecademy.com/users/arcAce82707/achievements",
  "Selim Kopuz":"https://www.codecademy.com/users/SelimKopuz/achievements",
  "Yavuz Korkmaz":"https://www.codecademy.com/users/courseJumper57960/achievements",
  "Tashku Mishto":"https://www.codecademy.com/users/textRunner98433/achievements",
  "Taha Nas":"https://www.codecademy.com/users/dataRockstar16388/achievements",
  "Bugrahan Ozkaya":"https://www.codecademy.com/users/coreMaster38580/achievements",
  "Ahmet Pamukcuoglu":"https://www.codecademy.com/users/javaSurfer71293/achievements",
  "Dogukan Sahin":"https://www.codecademy.com/users/bitPro93681/achievements",
  "Toprak Unsal":"https://www.codecademy.com/users/webRunner73460/achievements",
  "Abdulkadir Talha Yilmaz":"https://www.codecademy.com/users/talhayilmaz/achievements",
  "Isa Yolbarsov":"https://www.codecademy.com/users/Iyolbarsov/achievements"

};


var searchTerm = {
//     unit5p1: "More on Control Flow in JS",
//     unit5p2: "Choose Your Own Adventure 2",
    unit6p1: "Arrays and Objects in JS",
    unit6p2: "Contact List"
};
var point = 0;

$(function() {
    for (var name in nameUrl) {
        callme(nameUrl[name], name);
    }

    function callme(theUrl, newName) {
        $.get(theUrl, function(data, status) {
            // console.log("Data: " + data + "\nStatus: " + status);


            for (var key in searchTerm) {
                //   console.log("key " + key + " has value " + myArray[key]);
                  

                if (data.indexOf(searchTerm[key]) != -1) {
//                     console.log(key + " is finished");
                  var count =0;
                  count++;
                   point += 50;
                  if(count == 2){
                    count=0;
                    console.log(newName +" = "+point);
                    point=0;
                  
                  }
                   
              
               }
              
          

            }
       
            console.log(newName +" = "+point);
             point=0;
        });
    }
  console.clear();
});





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




    } catch (err) {

    }

}
document.onload = myFunc();
// setTimeout(myFunc, 500);