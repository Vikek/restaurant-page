function header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.textContent = 'Restuarang';

    const btnContainer = document.createElement('div');
    const homeBtn = createHeaderBtn('Home');
    const menuBtn = createHeaderBtn('Menu');
    const contactBtn = createHeaderBtn('Contact');

    header.appendChild(title);
    btnContainer.appendChild(homeBtn);
    btnContainer.appendChild(menuBtn);
    btnContainer.appendChild(contactBtn);

    header.appendChild(btnContainer);
    document.getElementById('content').appendChild(header);
}

function toggleActiveTab(tab) {
    const contentTabs = document.querySelectorAll('.content-tabs div');
    contentTabs.forEach((contentTab) => contentTab.classList.remove('active'));

    tab.classList.add('active');
}

function createHeaderBtn(btnTextContent) {
    const btn = document.createElement('button');
    btn.textContent = btnTextContent;
    btn.id = `btn-${btnTextContent}`;
    btn.onclick = toggleActiveTab(btn);

    return btn;
}

export default header;