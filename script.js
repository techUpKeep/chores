function ShowHideDiv() {
    var dropOrDelivery = document.getElementById("dropOrDelivery");
    var divDelivery = document.getElementById("divDelivery");
    divDelivery.style.display = dropOrDelivery.value == "Delivery" ? "block" : "none";
}
