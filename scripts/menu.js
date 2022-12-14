total = 0
function pButton(price, item){
    button = `<button onclick="addToOrder(this, '${item}')" style="width: 5em;" >${price}</button>`
    return button
}

function removeItem(id,price){
    if(document.getElementById(id)){
        //if the ID exists
        item = document.getElementById(id)
        numberLeft = Number(document.getElementById(id + "-num").innerText)
        
        if(numberLeft > 1){
            //more than one left
            //lessen number in order by 1
            numberLeft-=1
            document.getElementById(id + "-num").innerText = numberLeft
            //remove cost
            total -= Number(price)
            totalElement.innerText = total.toFixed(2)
        }else{
            //remove cost
            total -= Number(price)
            totalElement.innerText = total.toFixed(2)
            //remove from page
            document.getElementById(id).remove()
        }
        isZero()
    }
}

function addToOrder(button, item){
    order = document.getElementById("order")
    totalElement = document.getElementById("total")

    //create unique item id
    id = item.replaceAll(' ',"-")
    price = button.innerText.substring(1) 
    //search if id exists on the page
    if(document.getElementById(id)){
        //item exists
        num = document.getElementById(id+"-num")
        number = Number(num.innerText)
        number++
        num.innerText = number
    }
    else{
        //item does not exist

        //container
        container = document.createElement("div")
        container.id = id
        container.classList.add("row");
        //inner span
        text = document.createElement("span")
        ptext = document.createElement("p")
        ptext.innerText = `${item} x `

        
        text.classList.add("col");
        text.classList.add("w-25")
        text.classList.add("flex-fill")
        text.classList.add("justify-content-center")

        
        ptext.classList.add("mb-0")
        ptext.classList.add("text-end")
        ptext.style.paddingTop=".3em"

       
        //num span
        num = document.createElement("span")
        num.innerText = "1"
        num.id = id+"-num"
        ptext.appendChild(num)
        text.appendChild(ptext)
        //btn to remove
        btnSpan=document.createElement("span")
        btnSpan.classList.add("col")
        btnSpan.classList.add("w-50")
        btnSpan.classList.add("d-flex")

        remove = document.createElement("button")
        remove.id = `remove-${id}`
        
        
        remove.classList.add("btn");
        remove.classList.add("btn-danger");
        remove.classList.add("ms-3");
        remove.classList.add("mb-3");
        
        remove.innerText= "-1"

        btnSpan.appendChild(remove)
        
        container.appendChild(text)
        
        container.appendChild(btnSpan)
        order.appendChild(container)

        //IIFE Work Around
        document.getElementById(`remove-${id}`).onclick = (function (copyId, copyPrice) {
            return () => {
                removeItem(copyId, copyPrice)
            };
          })(id,price);
    }


       
    total += Number(price)
    totalElement.innerText = total.toFixed(2)
    isZero()
}

function isZero()
{
    totalElement = document.getElementById("total")
    if(total < 1 && total > -1){
        total = 0.00
        totalElement.innerText = total.toFixed(2)
    }   
}


items = [
    ["Watermelon Parfait", pButton("$9.99", "Watermelon Parfait"),450],
    ["Melon Za", pButton("$14.99", "Melon Za"), "200 per slice"],
    ["Melon Za (Pineapple Variant)", pButton("$16.99", "Melon Za (Pineapple Variant)"),"240 per slice"],
    ["Melon Sandwhich", pButton("$12.99", "Melon Sandwhich"), 180],
    ["Assorted Melons", pButton("$2.99", "Assorted Melons"), 425],
    ["Melon de Grill", pButton("$8.99", "Melon de Grill"), 90],
    ["Melon Skewer", pButton("$6.99", "Melon Skewer"),120],
    ["Melon Salit", pButton("$9.99", "Melon Salit"), 200],
    ["Melon Salit (Shrimp Variant)", pButton("$14.99", "Melon Salit (Shrimp Variant)"), 340],
    ["Watermato", pButton("$9.99", "Watermato"), 80],
    ["Melon con Pollo", pButton("$11.99", "Melon con Pollo"), 400],
    ["Watermelon and Cherries", pButton("$3.99", "Watermelon and Cherries"), 100],
    ["Watermelon", pButton("$1.99", "Watermelon"), 85],
    ["Chilled Melon", pButton("$2.99", "Chilled Melon"), 85],
    ["Hot Melon", pButton("$2.99", "Hot Melon"), 85],
    ["Melon Sherbert", pButton("$4.99", "Melon Sherbert"), 220],
    ["Melon Iceberg", pButton("$12.99", "Melon Iceberg"), 85],
    ["Melon Smoothie", pButton("$3.99", "Melon Smoothie"), 95],
    ["Water Smootie", pButton("$1.99", "Water Smootie"), 0],
    ["Melon Water",pButton("$2.99", "Melon Water"), 10]
]

let table = new DataTable('#menu_table', {
    data: items,
    columns: [
        {title: "Item"},
        {title: "Price"},
        {title: "Calories"}
    ]
});