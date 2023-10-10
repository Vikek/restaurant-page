import './menu.css';
import LasagnaImg from './menu assets/lasagna.jpg';
import PancakesImg from './menu assets/pancakes.jpg';

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.id = 'menu';

    const lasagna = createMenuItem('Lasagna', 'A rich and creamy whole-wheat pasta dish filled layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and topped with imported, premium quality mozzarella', '15$', LasagnaImg);

    const pancakes = createMenuItem('Pancakes', 'Our signature house-made buttermilk pancake, topped with whipped butter and served with Slopeside Pure Vermont Maple Syrup.', '8$', PancakesImg);

    menu.appendChild(lasagna);
    menu.appendChild(pancakes);

    return menu;
}

function createMenuItem(titleContent, descriptionContent, priceContent, imgContent) {
    const menuItem = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = titleContent;
    title.classList.add('menu-title');

    const description = document.createElement('p');
    description.textContent = descriptionContent;
    description.classList.add('menu-description');

    const price = document.createElement('div');
    price.textContent = priceContent;
    price.classList.add('menu-price');

    const img = document.createElement('img');
    img.src = imgContent;

    menuItem.appendChild(title);
    menuItem.appendChild(description);
    menuItem.appendChild(price);
    menuItem.appendChild(img);

    return menuItem;
}

export default createMenu;