$(document).ready(function(){

  //input
  $(document).on("focus", ".input_input", function () {
      $(this).parent().addClass("focused").addClass("underline");
  }).on("blur", ".input_input", function () {
      $(this).parent().removeClass("underline");
      if($(this).val().length == 0){
          $(this).parent().removeClass("focused");
      }
  }).on("keydown", ".input_input", function () {
      console.log("key pressed on input");
      if($(this).val().length != 0){
          $(this).parent().addClass("focused");
      }
  });

  //sidebar
  $(document).on("click", ".category_item", function () {
    $(".category_item").removeClass("active");
    $(this).addClass("active");
  });

  // warenkorb
  $(document).on("click", ".enter_course", function(e){
    $(this).removeClass("enter_course").addClass("course_entered").html("vorgemerkt");
    $("#course_counter").html(parseInt($("#course_counter").html()) + 1);
  });
  $(document).on("click", ".leave_course", function(e){
    $(this).removeClass("leave_course").addClass("course_left").html("vorgemerkt");
    $("#course_counter").html(parseInt($("#course_counter").html()) - 1);
  });



  //fake links
  $(document).on("click", "*[data-href]", function(e){
    window.location.href = $(this).attr("data-href");
  });
});
