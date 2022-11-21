items = [
    ["Watermelon Parfait", "$9.99"],
    ["Melon Za", "$14.99"],
    ["Melon Za (Pineapple Variant)", "$16.99"],
    ["Melon Sandwhich", "$12.99"],
    ["Assorted Melons", "$2.99"],
    ["Melon de Grill", "$8.99"],
    ["Melon Skewer", "$6.99"],
    ["Melon Salit", "$9.99"],
    ["Melon Salit (Shrimp Variant)", "$14.99"],
    ["Watermato", "$9.99"],
    ["Melon con Pollo", "$11.99"],
    ["Watermelon and Cherries", "$3.99"],
    ["Watermelon", "$1.99"],
    ["Chilled Melon", "$2.99"],
    ["Hot Melon", "$2.99"],
    ["Melon Sherbert", "$4.99"],
    ["Melon Iceberg", "$12.99"],
    ["Melon Smoothie", "$3.99"],
    ["Water Smootie", "$1.99"],
    ["Melon Water","$2.99"]
]

let table = new DataTable('#menu_table', {
    data: items,
    columns: [
        {title: "Item"},
        {title: "Price"}
    ]
});