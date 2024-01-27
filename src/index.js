import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import debounce from "lodash.debounce";

const selectors = {
    input: document.querySelector('#search'),
    catInfo: document.querySelector('.cat-info'),
};

function sendIziToast(text, type) {
  iziToast[type]({
    message: text,
    position: "topCenter",
    transitionIn: 'fadeInDown'
  });
}

function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            console.log(response);
            if (response.status === 404) {
                sendIziToast('Oops, there is no country with that name', 'error');
                return [];
            }
            throw new Error(response.statusText);
        })
        .catch(err => {
            sendIziToast(err, 'error');
        });
}

function countriesList(countries) {
    const countriesList = countries.map(country => `
    <li class="country-name-block">
        <img src="${country.flags.svg}" alt="${country.name.common}" width="20" height="15">
        <p>${country.name.common}</p>
    </li>`).join('');
    return `<ul class="countries-list">${countriesList}</ul>`;
}

function countryCard(country) {
    return `<div class="country-card">
    <div class="country-name-block">
        <img src="${country[0].flags.svg}" alt="${country[0].name.common}" width="20" height="15">
        <h2>${country[0].name.official}</h2>
    </div>
    <p><b>Capital:</b> ${country[0].capital}</p>
    <p><b>Population:</b> ${country[0].population}</p>
    <p><b>Languages:</b> ${Object.values(country[0].languages).join(', ')}</p>
    </div>`;
}

function handlerInput(e) {
    const countryName = e.target.value;
    if (countryName === '') {
        selectors.catInfo.innerHTML = '';
        return;
    }
    fetchCountries(countryName)
        .then(data => {
            if (data.length > 10) {
                sendIziToast('Too many matches found. Please enter a more specific name!', 'info');
                return;
            }
            if (data.length === 1) {
                selectors.catInfo.innerHTML = countryCard(data);
                return;
            }
            if (data.length <= 5) {
                console.log(data);
                selectors.catInfo.innerHTML = countriesList(data);
                return;
            }
        })
        .catch(err => {
        sendIziToast(err, 'error');
        });
}

selectors.input.addEventListener('input', debounce(handlerInput, 300));

