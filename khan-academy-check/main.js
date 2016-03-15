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
      var completed = 0;
      var uncompleted = 0;
    $('table span').each(function() {
      // console.log($(this).attr());

      // console.log($(this).hasClass("pipe")&&$(this).hasClass("completed"));

      // if($(this).is( ".pipe.completed" )){
      //   count++;
      // }

      $this = $(this);
      if($this.hasClass("pipe")&&$this.hasClass("completed")&&(!$this.hasClass("started"))){
        completed++;
      }else if($this.hasClass("pipe")&&$this.hasClass("completed")&&($this.hasClass("started"))){
        uncompleted++;
      }

      count =  completed+uncompleted;
    // console.log(count);

    // if(count == 10){
    //   count =0;
    //   completed =0 ;
    //   uncompleted = 0;
    //   alert("Part 1 Intro to HTML is Finished");

    // }else if(count == 9){
    //   count =0;
    //   completed =0 ;
    //   uncompleted = 0;
    //   alert("Part 2 Intro to CSS is Finished");

    // }
    // else if(count == 8){
    //   count =0;
    //   completed =0 ;
    //   uncompleted = 0;
    //   alert("Part 3 More HTML tags is Finished");

    // }
    //  else if(count == 11){
    //   count =0;
    //   completed =0 ;
    //   uncompleted = 0;
    //   alert("Part 4 CSS Text properties is Finished");

    // }
    //  else if(count == 16){
    //   count =0;
    //   completed =0 ;
    //   uncompleted = 0;
    //   alert("Part 5 CSS Layout is Finished");

    // }
    //  else if(count == 11){
    //   count =0;
    //   completed =0 ;
    //   uncompleted = 0;
    //   alert("Part 6 More CSS Selectors is Finished");

    // }
    // else if(count == 6){
    //   count =0;
    //   completed =0 ;
    //   uncompleted = 0;
    //   alert("Part 7 Last Part")

    // }

    });
    // alert(count);
    alert(count);
alert(completed);

    // console.log(count);

}


key('ctrl+q', function() {
console.log("heyo")
    myFunc();

});