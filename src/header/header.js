import './header.css';

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Restaurant';

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    const homeBtn = createHeaderBtn('Home');
    homeBtn.classList.add('active'); // home btn active by default

    const menuBtn = createHeaderBtn('Menu');
    const contactBtn = createHeaderBtn('Contact');

    header.appendChild(title);
    btnContainer.appendChild(homeBtn);
    btnContainer.appendChild(menuBtn);
    btnContainer.appendChild(contactBtn);

    header.appendChild(btnContainer);
    return header;
}

function onClickHandler(btnId, tabId) {
    toggleActiveTab('.content-tabs > div', tabId); //toggle active on page
    toggleActiveTab('.btn-container > button', btnId); //toggle active on buttons
}

function toggleActiveTab(selector, id) {
    const tabs = document.querySelectorAll(selector);
    tabs.forEach((tab) => tab.classList.remove('active'));

    document.getElementById(id).classList.add('active');
}

function createHeaderBtn(btnTextContent) {
    const btn = document.createElement('button');
    const tabId = btnTextContent.toLowerCase();
    btn.textContent = btnTextContent;
    btn.id = `btn-${tabId}`;
    btn.addEventListener('click', () => onClickHandler(btn.id ,tabId));

    return btn;
}

export default createHeader;