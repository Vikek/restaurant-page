import './home.css';

function createHome() {
    const home  = document.createElement('div');
    home.classList.add('home');
    home.classList.add('active'); //active tab when website loads in
    home.id = 'home';

    const description = document.createElement('div');

    const descriptionTitle = document.createElement('h2');
    descriptionTitle.textContent = 'Welcome';
    description.appendChild(descriptionTitle);

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at orci sed libero tristique tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas auctor convallis dui in consequat. Curabitur ut ipsum leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce vel ultrices urna. Nullam auctor augue orci, in faucibus massa egestas eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur bibendum lectus non dictum porta. Nunc id posuere nunc.';
    description.appendChild(descriptionInfo);

    const openHours = document.createElement('div');

    const openHoursTitle = document.createElement('h2');
    openHoursTitle.textContent = 'Open';
    openHours.appendChild(openHoursTitle);

    openHours.appendChild(addWeekDays('Monday: 6am - 6pm'));
    openHours.appendChild(addWeekDays('Tuesday: 6am - 6pm'));
    openHours.appendChild(addWeekDays('Wednesday: 6am - 6pm'));
    openHours.appendChild(addWeekDays('Thursday: 6am - 10pm'));
    openHours.appendChild(addWeekDays('Friday: 6am - 10pm'));
    openHours.appendChild(addWeekDays('Saturday: 8am - 10pm'));
    openHours.appendChild(addWeekDays('Sunday: 8am - 8pm'));

    const location = document.createElement('div');

    const locationTitle = document.createElement('h2');
    locationTitle.textContent = 'Location';
    location.appendChild(locationTitle);

    const locationInfo = document.createElement('p');
    locationInfo.textContent = '123 Forest Drive, Forestville, Maine';
    location.appendChild(locationInfo);

    home.appendChild(description);
    home.appendChild(openHours);
    home.appendChild(location);

    return home;
}

function addWeekDays(info) {
    const day = document.createElement('p');
    day.textContent = info;

    return day;
}

export default createHome;