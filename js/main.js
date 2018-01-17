$(document).ready(function(){

  //input
  $(document).on("focus", ".input_input", function () {
      $(this).parent().addClass("focused").addClass("underline");
  }).on("blur", ".input_input", function () {
      $(this).parent().removeClass("underline");
      if($(this).val().length == 0){
          $(this).parent().removeClass("focused");
      }
  }).on("keydown", ".input_input", function (e) {
      console.log("key pressed on input");
      $('.search_res_card').each(function () {
          var card_title_text = $('.card_title', this).text();
          if (card_title_text.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
              $(this).removeClass('hidden');
          } else {
              $(this).addClass('hidden');
          }
      });
      if($(this).val().length !== 0){
          $(this).parent().addClass("focused");
      } else {
          $('.search_res_card').removeClass('hidden');
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
    var link = $(this).attr("data-href");
    setTimeout(function(){
      window.location.href = link;
    }, 400);
  });
});
