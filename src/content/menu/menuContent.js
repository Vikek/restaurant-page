function createMenu() {
    const menu = document.createElement('div');

    const lasagna = createMenuItem('Lasagna', 'A rich and creamy whole-wheat pasta dish filled layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and topped with imported, premium quality mozzarella', '15$');

    const pancakes = createMenuItem('Pancakes', 'Our signature house-made buttermilk pancake, topped with whipped butter and served with Slopeside Pure Vermont Maple Syrup.', '8$');

    menu.appendChild(lasagna);
    menu.appendChild(pancakes);

    document.getElementById('content').appendChild(menu);
}

function createMenuItem(titleContent, descriptionContent, priceContent) {
    const menuItem = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = titleContent;

    const description = document.createElement('p');
    description.textContent = descriptionContent;

    const price = document.createElement('div');
    price.textContent = priceContent;

    menuItem.appendChild(title);
    menuItem.appendChild(description);
    menuItem.appendChild(price);

    return menuItem;
}

export default createMenu;