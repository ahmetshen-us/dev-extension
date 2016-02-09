// window.onload = 
function myFunc() {

    try {
        // ===============================================

        var nameUrl = {
            "Dogukan Aciker": "https://www.codecademy.com/users/webJumper62951/achievements",
            "Furkan Aldemir": "https://www.codecademy.com/users/furkan28aldemir/achievements"
        };


        var searchTerm = {
            unit5p1: "More on Control Flow in JS",
            unit5p2: "Choose Your Own Adventure 2",
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
                        // console.log("key " + key + " has value " + myArray[key]);


                        if (data.indexOf(searchTerm[key]) != -1) {
                            // console.log(key + " is finished");

                            point += 50;
                        }
                    }

                    console.log(newName + " = " + point);
                    point = 0;
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