total = 0
function pButton(price, item){
    button = `<button onclick="addToOrder(this, '${item}')" style="width: 5em;">${price}</button>`
    return button
}

function addToOrder(button, item){
    order = document.getElementById("order")
    totalElement = document.getElementById("total")

    //create unique item id
    id = item.replaceAll(' ',"-")
    
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
        text.classList.add("w-50")
        text.classList.add("flex-fill")
        text.classList.add("justify-content-center")

        
        ptext.classList.add("mb-0")
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
        remove.addEventListener("click", removeItem(remove))
        remove.value=id
        remove.classList.add("btn");
        remove.classList.add("btn-danger");
        remove.classList.add("ms-3");
        remove.classList.add("mb-3");
        
        remove.innerText= "-1"

        btnSpan.appendChild(remove)

        container.appendChild(text)
        
        container.appendChild(btnSpan)
        order.appendChild(container)
    }


    price = button.innerText.substring(1)    
    total += Number(price)
    totalElement.innerText = total.toFixed(2)
}

function removeItem(btn){

}

items = [
    ["Watermelon Parfait", pButton("$9.99", "Watermelon Parfait")],
    ["Melon Za", pButton("$14.99", "Melon Za")],
    ["Melon Za (Pineapple Variant)", pButton("$16.99", "Melon Za (Pineapple Variant)")],
    ["Melon Sandwhich", pButton("$12.99", "Melon Sandwhich")],
    ["Assorted Melons", pButton("$2.99", "Assorted Melons")],
    ["Melon de Grill", pButton("$8.99", "Melon de Grill")],
    ["Melon Skewer", pButton("$6.99", "Melon Skewer")],
    ["Melon Salit", pButton("$9.99", "Melon Salit")],
    ["Melon Salit (Shrimp Variant)", pButton("$14.99", "Melon Salit (Shrimp Variant)")],
    ["Watermato", pButton("$9.99", "Watermato")],
    ["Melon con Pollo", pButton("$11.99", "Melon con Pollo")],
    ["Watermelon and Cherries", pButton("$3.99", "Watermelon and Cherries")],
    ["Watermelon", pButton("$1.99", "Watermelon")],
    ["Chilled Melon", pButton("$2.99", "Chilled Melon")],
    ["Hot Melon", pButton("$2.99", "Hot Melon")],
    ["Melon Sherbert", pButton("$4.99", "Melon Sherbert")],
    ["Melon Iceberg", pButton("$12.99", "Melon Iceberg")],
    ["Melon Smoothie", pButton("$3.99", "Melon Smoothie")],
    ["Water Smootie", pButton("$1.99", "Water Smootie")],
    ["Melon Water",pButton("$2.99", "Melon Water")]
]

let table = new DataTable('#menu_table', {
    data: items,
    columns: [
        {title: "Item"},
        {title: "Price"}
    ]
});