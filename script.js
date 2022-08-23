function ShowHideDiv() {
    var dropOrDelivery = document.getElementById("dropOrDelivery");
    var divDelivery = document.getElementById("divDelivery");
    divDelivery.style.display = dropOrDelivery.value == "Delivery" ? "block" : "none";
}


$('.sidebar').on( 'keypress click' , 'input:last-of-type' , function(e){
        $(this).after('<input type="text" placeholder="Any other Chore" />') 
});
