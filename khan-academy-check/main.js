function myFunc(argument) {

      $('table td:nth-child('+2+')').each(function(index,value) {

        var curValue = $(this).find("span");
        console.log(curValue);
      });

}


key('ctrl+q', function() {

    myFunc();

});

