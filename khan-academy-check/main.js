function myFunc() {

    // $('table td:nth-child('+2+')').each(function(index,value) {

    //   var curValue = $(this).find("span");
    //   console.log(curValue);
    // });

    // $("tr").each(function() {
    //     $this = $(this)
    //     var value = $this.find("span").html();
    //     console.log(value);
    //     // var quantity = $this.find("input.quantity").val();
    //     // console.log(quantity);

    // });
      var count = 0;
    $('table span').each(function() {
      // console.log($(this).attr());

      // console.log($(this).hasClass("pipe")&&$(this).hasClass("completed"));
      $this = $(this);
      if($this.hasClass("pipe")&&$this.hasClass("completed")&&(!$this.hasClass("started"))){
        count++;
      }
      // if($(this).is( ".pipe.completed" )){
      //   count++;
      // }

    });
    alert(count);
    if(count == 10){
      alert("Part 1 Intro to HTML is Finished");
    }else if(count == 19){
      alert("Part 2 Intro to CSS is Finished");

    }
    else if(count == 27){
      alert("Part 3 More HTML tags is Finished");

    }
     else if(count == 38){
      alert("Part 4 CSS Text properties is Finished");

    }
     else if(count == 65){
      alert("Part 6 More CSS Selectors is Finished");

    }
    else if(count == 71){
      alert("Part 7 Last Part")

    }
    // console.log(count);

}


key('ctrl+q', function() {
console.log("heyo")
    myFunc();

});