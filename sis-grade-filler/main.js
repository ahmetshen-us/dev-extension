var $ = require('jQuery');
// window.onload = 
function myFunc() {

    try {
        // ===============================================

var nameUrl = {
//   P4
  //   ==============================================================================
//     "Dogukan Aciker": "https://www.codecademy.com/users/webJumper62951/achievements",
//   "Furkan Aldemir":"https://www.codecademy.com/users/furkan28aldemir/achievements",
//   "Ihsan Alkin":"https://www.codecademy.com/users/IhsanAlkin/achievements",
//   "Burak Bilgen":"https://www.codecademy.com/users/BurakBilgen/achievements",
//   "Yunus Celik":"https://www.codecademy.com/users/chipSolver75435/achievements",
//   "Abdulkerim Eygoren":"https://www.codecademy.com/users/systemPro77748/achievements",
//   "Omer Gece":"https://www.codecademy.com/users/omergece/achievements",
//   "Sajidur Kader":"https://www.codecademy.com/users/teraBlaster90154/achievements",
//   "Cankutay Katkat":"https://www.codecademy.com/users/arcAce82707/achievements",
//   "Selim Kopuz":"https://www.codecademy.com/users/SelimKopuz/achievements",
//   "Yavuz Korkmaz":"https://www.codecademy.com/users/courseJumper57960/achievements",
//   "Tashku Mishto":"https://www.codecademy.com/users/textRunner98433/achievements",
//   "Taha Nas":"https://www.codecademy.com/users/dataRockstar16388/achievements",
//   "Bugrahan Ozkaya":"https://www.codecademy.com/users/coreMaster38580/achievements",
//   "Ahmet Pamukcuoglu":"https://www.codecademy.com/users/javaSurfer71293/achievements",
//   "Dogukan Sahin":"https://www.codecademy.com/users/bitPro93681/achievements",
//   "Toprak Unsal":"https://www.codecademy.com/users/webRunner73460/achievements",
//   "Abdulkadir Talha Yilmaz":"https://www.codecademy.com/users/talhayilmaz/achievements",
//   "Isa Yolbarsov":"https://www.codecademy.com/users/Iyolbarsov/achievements"
//   ==============================================================================
  //   P5
  //   ==============================================================================
  "Ahmet Akarsu":"https://www.codecademy.com/users/methodAce46548/achievements",
  "Ahmet Aksu":"https://www.codecademy.com/users/microSurfer34186/achievements",
  "Hamza Baris":"https://www.codecademy.com/users/byteMaster05043/achievements",
  "Murat Berber":"https://www.codecademy.com/users/dataPro63482/achievements",
  "Atakan Bilen":"https://www.codecademy.com/users/cssSolver47981/achievements",
  "Asim Ciceksay":"https://www.codecademy.com/users/microSurfer10716/achievements",
  "Kemal Dernek":"https://www.codecademy.com/users/textSlayer31184/achievements",
  "Darwin Diaz":"https://www.codecademy.com/users/courseBlaster77354/achievements",
  "Ertugrul Emiroglu":"https://www.codecademy.com/users/coreMaster88068/achievements",
  "Furkan Goktepe":"https://www.codecademy.com/users/chipWhiz84045/achievements",
  "Rafath Kader":"https://www.codecademy.com/users/teraJumper75054/achievements",
  "Burhan Karabulut":"https://www.codecademy.com/users/cloudRockstar24840/achievements",
  "Bilal Kemaloglu":"https://www.codecademy.com/users/chipSolver51649/achievements",
  "Akhmet Mamedov":"https://www.codecademy.com/users/pyWhiz10376/achievements",
  "Yousef Masri":"https://www.codecademy.com/users/microAce35449/achievements",
  "Dean Motasis":"https://www.codecademy.com/users/textBlaster76324/achievements",
  "Ilker Onal":"https://www.codecademy.com/users/teraRockstar81999/achievements",
  "Guancheng Qiao":"https://www.codecademy.com/users/scriptMaster79852/achievements",
  "Selim Yavuz":"https://www.codecademy.com/users/blogJumper35935/achievements",
  "Enver Yeniyurt":"https://www.codecademy.com/users/tagCoder73722/achievements",
  "Yusuf Celik":"https://www.codecademy.com/users/microSurfer10716/achievements"
};

var searchTerm = {
//     unit5p1: "More on Control Flow in JS",
//     unit5p2: "Choose Your Own Adventure 2"
//     unit6p1: "Arrays and Objects in JS",
//     unit6p2: "Contact List"
   unit7p1: "Introduction to Objects I",
   unit7p2: "Building an Address Book"
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
// document.onload = myFunc();
myFunc();
// setTimeout(myFunc, 500);