
   $(document).ready(function(){         
    PopUpHide();
    $('.buy_button').click(function(e){
    var buttonClicked = e.target;     
    var buttonPressed = e.target.parentElement; 
     console.log(buttonPressed);     
    var product= $(buttonPressed).children(".model").val();
    console.log(product);
    
    $("#popup2").show();
    $("#blindLayer").css("display","block"); 
    $("#deal").text("Заказать " + product);
    // $('#buy_product').append("<p>" + product + "</p>");
    $("#product_to_buy").val(product);
           
    });
    });

    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
        $("#blindLayer").css("display","block");

    }
    //Функция скрытия PopUp1
    function PopUpHide(){
        $("#popup1").hide();
        $("#blindLayer").css("display","none");
    }

function PopUpShow2() {
    $('#popup2').show();
    $("#blindLayer").css("display","block");
}

function PopUpHide2() {
    $('#popup2').hide();
    $("#blindLayer").css("display","none");
}

// $(document).ready(function(){
//     $('.buy_product').click(function(e){
//       var buttonClicked = e.target;
     
//       var buttonPressed = e.target.parentElement;
      
//       var product= $(buttonPressed).children(".model").text();
        
//         });
//             });



