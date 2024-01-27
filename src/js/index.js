import "izitoast/dist/css/iziToast.min.css";
import debounce from "lodash.debounce";
import { fetchCountries } from "./fetchCountries";
import { sendIziToast } from "./notification";

const selectors = {
    input: document.querySelector('input#search-box'),
    catInfo: document.querySelector('.cat-info'),
};

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
    const countryName = e.target.value.trim();
    if (countryName === '') {
        selectors.catInfo.innerHTML = '';
        return;
    }
    fetchCountries(countryName)
        .then(data => {
            if (data.length > 10) {
                sendIziToast('Too many matches found. Please enter a more specific name!', 'info');
                selectors.catInfo.innerHTML = '';
                return;
            }
            if (data.length === 1) {
                selectors.catInfo.innerHTML = countryCard(data);
                return;
            }
            if (data.length <= 10) {
                selectors.catInfo.innerHTML = countriesList(data);
                return;
            }
            if (data.length === 0) {
                selectors.catInfo.innerHTML = '';
                return;
            }
        })
        .catch(err => {
            console.error(err);
            sendIziToast('Sorry, something went wrong', 'error');
        });
}

selectors.input.addEventListener('input', debounce(handlerInput, 300));

