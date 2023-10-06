import createHeader from "./header/header.js";
import createHome from "./content/home/homeContent.js";
import createMenu from "./content/menu/menuContent.js";
import createContact from "./content/contact/contactContent.js";
import './styles.css';

const Website =(() => {
    const content = document.getElementById('content');

    const main = document.createElement('main');
    main.classList.add('content-tabs');

    const header = createHeader();
    const home = createHome();
    const menu = createMenu();
    const contact = createContact();

    main.appendChild(home);
    main.appendChild(menu);
    main.appendChild(contact);

    content.appendChild(header);
    content.appendChild(main);
})();
