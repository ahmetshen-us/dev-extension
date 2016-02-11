// var $ = require('jQuery');
// window.onload = 
// var namePoint = {};
var namePoint = [];


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
    "Ahmet Akarsu": "https://www.codecademy.com/users/methodAce46548/achievements",
    "Ahmet Aksu": "https://www.codecademy.com/users/microSurfer34186/achievements",
    "Hamza Baris": "https://www.codecademy.com/users/byteMaster05043/achievements",
    "Murat Berber": "https://www.codecademy.com/users/dataPro63482/achievements",
    "Atakan Bilen": "https://www.codecademy.com/users/cssSolver47981/achievements",
    "Asim Ciceksay": "https://www.codecademy.com/users/microSurfer10716/achievements",
    "Kemal Dernek": "https://www.codecademy.com/users/textSlayer31184/achievements",
    "Darwin Diaz": "https://www.codecademy.com/users/courseBlaster77354/achievements",
    "Ertugrul Emiroglu": "https://www.codecademy.com/users/coreMaster88068/achievements",
    "Furkan Goktepe": "https://www.codecademy.com/users/chipWhiz84045/achievements",
    "Rafath Kader": "https://www.codecademy.com/users/teraJumper75054/achievements",
    "Burhan Karabulut": "https://www.codecademy.com/users/cloudRockstar24840/achievements",
    "Bilal Kemaloglu": "https://www.codecademy.com/users/chipSolver51649/achievements",
    "Akhmet Mamedov": "https://www.codecademy.com/users/pyWhiz10376/achievements",
    "Yousef Masri": "https://www.codecademy.com/users/microAce35449/achievements",
    "Dean Motasis": "https://www.codecademy.com/users/textBlaster76324/achievements",
    "Ilker Onal": "https://www.codecademy.com/users/teraRockstar81999/achievements",
    "Guancheng Qiao": "https://www.codecademy.com/users/scriptMaster79852/achievements",
    "Selim Yavuz": "https://www.codecademy.com/users/blogJumper35935/achievements",
    "Enver Yeniyurt": "https://www.codecademy.com/users/tagCoder73722/achievements",
    "Yusuf Celik": "https://www.codecademy.com/users/microSurfer10716/achievements"
};

function myFunc() {

    try {
        // ===============================================

        // var namePoint = {};


        var searchTerm = {
            //     unit5p1: "More on Control Flow in JS",
            //     unit5p2: "Choose Your Own Adventure 2"
            //     unit6p1: "Arrays and Objects in JS",
            //     unit6p2: "Contact List"
            unit7p1: "Introduction to Objects I",
            unit7p2: "Building an Address Book"
        };

        var myAssociativeArr = [];




        $(function() {

            for (var name in nameUrl) {

                callme(nameUrl[name], name);

            }

            function callme(theUrl, newName) {
                var jqxhr = $.get(theUrl, function(data, status) {
                    // console.log("Data: " + data + "\nStatus: " + status);

                    var point = 0;
                    for (var key in searchTerm) {
                        //   console.log("key " + key + " has value " + myArray[key]);


                        if (data.indexOf(searchTerm[key]) != -1) {
                            //                     console.log(key + " is finished");
                            point += 50;

                        }


                    }

                    //                         console.log(newName +" = "+point);
                    // namePoint.name = newName;
                    // namePoint.point = point;
                    namePoint.push({
                        name: newName,
                        point: point
                    });



                    // console.log(nameUrl[newName]);
                    // console.log(nameUrl);



                    // console.log("in .get "+namePoint.name + " => " + namePoint.point);



                    // alert(namePoint.name + " => " + namePoint.point);



                    //             var newElement = {};
                    //             newElement.name = newName;
                    //             newElement.point = point;
                    //             myAssociativeArr.push(newElement);
                    //             console.log(myAssociativeArr);

                    //           Sort array by firstname (alphabetically) in Javascript
                    //           myAssociativeArr.sort(function(a, b){
                    //     if(a.name < b.name) return -1;
                    //     if(a.name > b.name) return 1;
                    //     return 0;
                    // });




                });

                //       $.get( "theUrl", function( data ) {
                // //   $( ".result" ).html( data );
                //   alert( "Load was performed." );
                // });

                //       $.ajax({
                //   url: "http://fiddle.jshell.net/favicon.png",
                //   beforeSend: function( xhr ) {
                //     xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
                //   }
                // })
                //   .done(function( data ) {
                //     if ( console && console.log ) {
                //       alert( "Sample of data:", data.slice( 0, 100 ) );
                //     }
                //   });


                //        namePoint.newName=point;
            }



            // console.clear();


            // console.log("in .function "+namePoint.name + " => " + namePoint.point);




        });

        // console.log("in .try "+namePoint);







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
        console.log("hey");
    }

}

function myFunc2() {
    // alert("in func");
    var column = prompt("Please enter column number", "1");
    var i = 0;
    // alert(column);
    $('#gradesTable td:nth-child(' + column + ')').each(function() {
        //$('#foo td:has(:input)').each(function() {
        //$(this).css('background-color', '#bbb');
        // alert($(this).text());
        //alert($(this).html());
        var value = $(this).find(":input").val();
        // alert(value);
        $(this).find(":input").val("");
        document.getElementById("bSave").click();
        //$(this).text("$$$");


    });


    // $("#foo").children("tbody").children("tr").children("td:nth-child(3)").each(function() {
    //     //alert("Third Column Value: " + $(this).html());
    // });



}
key('⌘+r, ctrl+r', function() {
    // alert('you pressed a!');
    // myFunc2();
    // console.log(namePoint);

    // if(Object.keys(namePoint).length==0){
    myFunc();

    Object.size = function(obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    // Get the size of an object
    var size = Object.size(namePoint);
    console.log(size)


    // namePoint.sort(function(a, b) {


    //     a=a.toString().split(" ")[1];
    //     b=b.toString().split(" ")[1];

    //     if (a.name < b.name) return -1;
    //     if (a.name > b.name) return 1;
    //     return 0;
    // });

    console.log(Object.keys(namePoint).length == 0);

    for (var key in namePoint) {
        console.log(namePoint[key].name + " => " + namePoint[key].point);
    }

    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$");









    // console.log(namePoint["Ahmet Akarsu"]);
    return false;
});
// document.onload = myFunc();
// document.onload = myFunc2();
// myFunc();
// setTimeout(myFunc, 500);