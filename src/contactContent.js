function createContact() {
    const contact = document.createElement('div');

    const contactInfo = createContactInfo(
        '123 Forest Drive, Forestville, Maine',
        'totaly-real-email@real.com',
        '000 111 22'
    );

    contact.appendChild(contactInfo);

    document.getElementById('content').appendChild(contact);
}

function createContactInfo(adressContent, emailContent, teleNumberContent) {
    const contactInfo = document.createElement('div');

    const adress = document.createElement('p');
    adress.textContent = adressContent;

    const email = document.createElement('p');
    email.textContent = emailContent;

    const teleNumber = document.createElement('div');
    teleNumber.textContent = teleNumberContent;

    contactInfo.appendChild(adress);
    contactInfo.appendChild(email);
    contactInfo.appendChild(teleNumber);

    return contactInfo;
}

export default createContact;