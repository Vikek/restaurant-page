import './header.css';

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Restuarang';

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    const homeBtn = createHeaderBtn('Home');
    const menuBtn = createHeaderBtn('Menu');
    const contactBtn = createHeaderBtn('Contact');

    header.appendChild(title);
    btnContainer.appendChild(homeBtn);
    btnContainer.appendChild(menuBtn);
    btnContainer.appendChild(contactBtn);

    header.appendChild(btnContainer);
    return header;
}

function toggleActiveTab(tabId) {
    const contentTabs = document.querySelectorAll('.content-tabs > div');
    contentTabs.forEach((contentTab) => contentTab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
}

function createHeaderBtn(btnTextContent) {
    const btn = document.createElement('button');
    const tabId = btnTextContent.toLowerCase();
    btn.textContent = btnTextContent;
    btn.id = `btn-${tabId}`;
    btn.addEventListener('click', () => toggleActiveTab(tabId));

    return btn;
}

export default createHeader;