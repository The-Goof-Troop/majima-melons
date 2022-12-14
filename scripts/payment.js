

creditcard_div = document.getElementById("creditcard")
giftcard_div = document.getElementById("giftcard")

function CreditCard() {
    //divs
    creditcard_div = document.getElementById("creditcard")
    giftcard_div = document.getElementById("giftcard")
    
    if (creditcard_div.style.display == "block") {
      creditcard_div.style.display = "none";
    } else {
        console.log(creditcard_div)
        creditcard_div.style.display = "block";
        //hide everything else
        giftcard_div.style.display = "none";
    }
}
  function GiftCard() {
    creditcard_div = document.getElementById("creditcard")
    giftcard_div = document.getElementById("giftcard")
    if (giftcard_div.style.display == "block") {
      giftcard_div.style.display = "none";
    } else {
      giftcard_div.style.display = "block";
      creditcard_div.style.display = "none";
    }
}

function not_fill(){
  //Billing Address
  FullN = document.getElementsByName("firstname")
  Email = document.getElementsByName("email")
  Address = document.getElementsByName("address")
  City = document.getElementsByName("city")
  State = document.getElementsByName("state")
  Zip = document.getElementsByName("zip")
  //Payment 
  NoC = document.getElementsByName("cardname")
  CcN = document.getElementsByName("cardnumber")
  ExpM = document.getElementsByName("expmonth")
  ExpY = document.getElementsByName("expyear")
  CVV = document.getElementsByName("cvv")

}