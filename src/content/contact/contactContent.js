import './contact.css';

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.id = 'contact';

    contact.appendChild(createContactInfo(
        '123 Forest Drive, Forestville, Maine',
        'totaly-real-email@real.com',
        '000 111 22')
    );

    return contact;
}

function createContactInfo(adressContent, emailContent, teleNumberContent) {
    const contactInfo = document.createElement('div');

    //adress
    const adressContainer = document.createElement('div');
    adressContainer.classList.add('adress-container');

    const adressSvg = createSvg('http://www.w3.org/2000/svg', 
    '<path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />');
    adressContainer.appendChild(adressSvg);

    const adress = document.createElement('div');
    adress.textContent = adressContent;
    adressContainer.appendChild(adress);

    //email
    const emailContainer = document.createElement('div');
    emailContainer.classList.add('email-container');

    const emailSvg = createSvg('http://www.w3.org/2000/svg', 
    '<path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />');
    emailContainer.appendChild(emailSvg);

    const email = document.createElement('div');
    email.textContent = emailContent;
    emailContainer.appendChild(email);

    //tele-number
    const teleNumberContainer = document.createElement('div');
    teleNumberContainer.classList.add('tele-number-container');
    
    const teleSvg = createSvg('http://www.w3.org/2000/svg', 
    '<path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />');
    teleNumberContainer.appendChild(teleSvg);

    const number = document.createElement('div');
    number.textContent = teleNumberContent;
    teleNumberContainer.appendChild(number);

    contactInfo.appendChild(adressContainer);
    contactInfo.appendChild(emailContainer);
    contactInfo.appendChild(teleNumberContainer);

    return contactInfo;
}

function createSvg(link, path) {
    const svg = document.createElementNS(link, 'svg');
    svg.setAttribute('xmlns', link);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.innerHTML = path;

    return svg;
}

export default createContact;