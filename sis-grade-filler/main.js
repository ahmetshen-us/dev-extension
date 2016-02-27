var p4 = {
    //   P4
    //   ==============================================================================
    "Dogukan Aciker": "https://www.codecademy.com/users/webJumper62951/achievements",
    "Furkan Aldemir": "https://www.codecademy.com/users/furkan28aldemir/achievements",
    "Ihsan Alkin": "https://www.codecademy.com/users/IhsanAlkin/achievements",
    "Burak Bilgen": "https://www.codecademy.com/users/BurakBilgen/achievements",
    "Yunus Celik": "https://www.codecademy.com/users/chipSolver75435/achievements",
    "Abdulkerim Eygoren": "https://www.codecademy.com/users/systemPro77748/achievements",
    "Omer Gece": "https://www.codecademy.com/users/omergece/achievements",
    "Sajidur Kader": "https://www.codecademy.com/users/teraBlaster90154/achievements",
    "Cankutay Katkat": "https://www.codecademy.com/users/arcAce82707/achievements",
    "Selim Kopuz": "https://www.codecademy.com/users/SelimKopuz/achievements",
    "Yavuz Korkmaz": "https://www.codecademy.com/users/courseJumper57960/achievements",
    "Tashku Mishto": "https://www.codecademy.com/users/textRunner98433/achievements",
    "Taha Nas": "https://www.codecademy.com/users/dataRockstar16388/achievements",
    "Bugrahan Ozkaya": "https://www.codecademy.com/users/coreMaster38580/achievements",
    "Ahmet Pamukcuoglu": "https://www.codecademy.com/users/javaSurfer71293/achievements",
    "Dogukan Sahin": "https://www.codecademy.com/users/bitPro93681/achievements",
    "Toprak Unsal": "https://www.codecademy.com/users/webRunner73460/achievements",
    "Abdulkadir Talha Yilmaz": "https://www.codecademy.com/users/talhayilmaz/achievements",
    "Isa Yolbarsov": "https://www.codecademy.com/users/Iyolbarsov/achievements"
        //   ==============================================================================
}
var p5 = {

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

// JavaScript
// var unit5 = {
//     unit5p1: "More on Control Flow in JS",
//     unit5p2: "Choose Your Own Adventure 2"

// };
// var unit6 = {

//     unit6p1: "Arrays and Objects in JS",
//     unit6p2: "Contact List"

// };
// var unit7 = {

//     unit7p1: "Introduction to Objects I",
//     unit7p2: "Building an Address Book"

// };
// var unit8 = {
//     unit8p1: "Introduction to Objects II",
//     unit8p2: "Building a Cash Register"
// };

// HTML CSS
var unit1 = {
    unit1p1: "HTML Basics",
    unit1p2: "Build Your Own Webpage"
};
var unit2 = {
    unit2p1: "HTML Basics II",
    unit2p2: "Social Networking Profile"
};
var unit3 = {
    unit3p1: "HTML Basics III",
    unit3p2: "Clickable Photo Page"
};
var unit4 = {
    unit4p1: "CSS: An Overview",
    unit4p2: "Design a Button for Your Website"
};
// var results = [];
var results = {};

var point = 0;
var unit;
var column;

function myFunc() {

    try {
        var nameUrl = eval(prompt("Class?", "p4"));
        // console.log(nameUrl);
        unit = prompt("Please enter  unit", "unit4");
        // console.log(unit);
        var searchTerm = eval(unit);
        // console.log(searchTerm);
        // console.log(unit.slice(-1)-4);

        // unit = unit.slice(-1);
        // console.log(typeof unit);
        // console.log(unit);
        // console.log(unit+4);
        // console.log(parseInt(unit)+4);


        // console.log(unit.slice(-1) + 4);
        // column = prompt("Please enter column number", "1");

        // Object.size = function(obj) {
        //     var size = 0,
        //         key;
        //     for (key in obj) {
        //         if (obj.hasOwnProperty(key)) size++;
        //     }
        //     return size;
        // };

        // // console.log("Dogukan Aciker".split(" ")[1]);
        // // console.log("Abdulkadir Talha Yilmaz".split("")[1]);
        // var size = Object.size(nameUrl);
        // console.log(size);

        var size = ((nameUrl==p4)?19:21);

        var grades = [];
        var countSize =0;

        // var keys = Object.keys(nameUrl).sort(function(a, b) {


        //     a = a.toString().split(" ");
        //     a = a[a.length - 1];
        //     // console.log(a);



        //     b = b.toString().split(" ");
        //     b = b[b.length - 1];
        //     // console.log(b);
        //     if (a < b) return -1;
        //     if (a > b) return 1;
        //     return 0;
        // });
        // console.log(keys);
        // TODO: Try to implement with async and in order
        // console.log("p5.length => "+p5.length);

        //         for (var i = 0; i <= p5.length; i++) {
        //             for (key in p5[i]) {

        //                 // if (info.links[i].hasOwnProperty(key)) {

        //                 // } // hasOwnProperty check
        //             } // for each object
        //         } //for each array element



        // for (var i = 0; i < keys.length; i++) {

        //     callme(nameUrl[keys[i]], keys[i])

        // }
        // for(var key in keys){
        //     // console.log(nameUrl[keys[key]], keys[key]);
        //     console.log(keys[key]);
        // }


        for(var key in nameUrl){
            callme(nameUrl[key], key);
            // console.log(nameUrl[key], key);
            // console.log(key);
        }




        function callme(theUrl, newName) {



            $.ajax({
                url: theUrl,
                dataType: "text",

                async: true,
                success: function(data) {
                    point = 0;
                    for (var key in searchTerm) {

                        if (data.indexOf(searchTerm[key]) != -1) {

                            point += 50;


                        }


                        // console.log(newName + " => " + searchTerm[key]);
                        // console.log(newName + " => " + point);
                        results[newName] = point;
                        // results.push({name:newName,point:point});
                        // results.push({newName,point});

                    }
                    countSize++;
                    if(countSize == size){

                       ajaxCallBack(point); 
                    }
                    // console.log(results);
                    
                    
                }

            });



        }

        function ajaxCallBack(p) {


                // for (var key in results) {
                //     var value = results[key];
                //     console.log(key + " ===> " + value);


                // }
                // console.log(results);

                var keys = Object.keys(results).sort(function(a, b) {


                    a = a.toString().split(" ");
                    a = a[a.length - 1];
                    // console.log(a);



                    b = b.toString().split(" ");
                    b = b[b.length - 1];
                    // console.log(b);
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                });


        for(var key in keys){

            // console.log(keys[key] + " ===> "+ results[keys[key]]);
            grades.push(results[keys[key]]);

        }

                // console.log(keys);


                // console.log(results);

                myFunc2(grades);
                console.log(grades);
                console.log(grades.length);
            

        }









    } catch (err) {
        console.log("err " + err);
    }

}

function myFunc2(gr) {

    // var column = prompt("Please enter column number", "1");
    // var column = unit.slice(-1) - 4;
    var column = parseInt(unit.slice(-1)) + 4;

    // console.log(column);

    var i = 0;

    $('#gradesTable td:nth-child(' + column + ')').each(function() {
        // TODO: fix this late done assignments
        // var curValue = $(this).find(":input").val();
        // console.log(curValue);
        // if (curValue == 0 &&gr[i]>0) {
        //     $(this).find(":input").val(gr[i++]-10);
        // } else{
        $(this).find(":input").val(gr[i++]);
        // }

    });

    // var save = prompt("Save?", "Yes");
    // if (save === "Yes") {

    // document.getElementById("bSave").click();
    // }



}
// key('⌘+r, ctrl+r', function() {
key('ctrl+r', function() {

    myFunc();

});