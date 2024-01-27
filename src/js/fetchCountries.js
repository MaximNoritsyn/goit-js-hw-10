import { sendIziToast } from "./notification";

export function fetchCountries(name) {
    if (name === '') {
        return [];
    }
    const params = new URLSearchParams({
        fields: ['name', 'capital', 'population', 'languages', 'flags'].join(','),
    });
    const url = `https://restcountries.com/v3.1/name/${name}?${params}`
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            if (response.status === 404) {
                sendIziToast('Oops, there is no country with that name', 'error');
                return [];
            }
            sendIziToast(response.statusText, 'error');
            throw new Error(response.statusText);
        })
        .catch(err => {
            console.error(err);
            sendIziToast('Sorry, something went wrong', 'error');
            return [];
        });
}