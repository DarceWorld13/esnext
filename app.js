//const request = require('request');

console.log('<<<<<<<<<<<<<<<<Les Variables>>>>>>>>>>>>>>>>')
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId =['tokyo', 'conakry']; 
citiesId.push('tokyo')
console.log(citiesId);
console.log("<<<<<<<Création d'objet>>>>>>>>>>>")
function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}
const weather = (getWeather('Paris', ));
console.log(weather);
console.log("<<<<<<<<<<<<<<Affectation destructurée>>>>>>>>>>")
const { city, temperature } = weather;
console.log(city);
console.log(temperature);

console.log('>>>>>>>>>>>>>>>Rest operator<<<<<<<<<<<<<<<<<<<<<<<<<<')
let [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);


class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    toString() {
        return this.id + ' ' + this.name + ' ' + this.imageUrl + '' + this.price;
    }

    static getDefaultTrip() {

        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }

    get price() {
        return this._price;
    }
    set price(newprice) {
        return this._price = newprice;
    }
}
const parisTrip = new Trip("paris", "Paris", "img/paris.jpg");

console.log(parisTrip);
const { name } = parisTrip;
console.log(name);

console.log(parisTrip.toString());

parisTrip.price = 100;

console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip.toString());

console.log(">>>>>>>>>>>>>>>>>>>Héritage<<<<<<<<<<<<<<<<<<<<<");

class FreeTrip extends Trip {

    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl);
        this.price = 0;
        ;
    }

    toString() {
        return 'FREE [' + super.toString() + ' ' + this.price + ']';
    }

}
const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg', 0);
console.log(freeTrip.toString());

console.log(">>>>>>>>>>>>>>>>>>>Promise, Set, Map, Arrow Function<<<<<<<<<<<<<");

class TripService {

    constructor() {
        this.villes = new Set();
        this.villes.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.villes.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.villes.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                let tripFound = false;
                this.villes.forEach(trip => {
                    if (trip.name == tripName) {
                        tripFound = true;
                        resolve(tripName);
                    }
                    else {
                        reject(err => console.log(`not name found with ${tripName}`));
                    }

                })


            });


        }, 2000)

    }
}

const trip_service = new TripService();

const promise$ = trip_service.findByName('Paris');


promise$
    .then(trip => console.log('Trip trouvé', trip))
    .catch(err => console.log('OOps', err));

trip_service.findByName('Paris')
    .then(trip => console.log('Trip trouvé', trip))
    .catch(err => console.log('OOps', err));
trip_service.findByName('Toulouse')
    .then(trip => console.log('Trip trouvé', trip))
    .catch(err => console.log('OOps no trip name found with Toulouse'));

class PriceService {

    constructor(villesprice) {

        this.villesprice = new Map();
        this.villesprice.set("paris", 100);
        this.villesprice.set("rio-de-janiero", 800);
        this.villesprice.set("nantes");

    }

    ajout() {

    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                if (this.villesprice.has(tripId)) {
                    const price = this.villesprice.get(tripId);
                    resolve(price);
                }
                else {
                    reject(err => console.log(`not price  found  for ${tripId}` ));
                }
            }, 2000)
        });
    }
}

const price_service = new PriceService();
const promisessesParis$ =
    price_service.findPriceByTripId('paris');
promisessesParis$
    .then(trip => console.log('prix trouvé pour paris ', trip))
    .catch(err => console.log('OOps', err));

const promisessesrio$ =
    price_service.findPriceByTripId('rio-de-janiero');
    promisessesrio$
        .then(trip => console.log('prix trouvé pour rio ', trip))
        .catch(err => console.log('OOps', err));

trip_service.findByName('Nantes')
.then(trip =>price_service.findPriceByTripId('nantes'))
.then(price =>console.log('le prix pour nantes est ', price))
.catch(err => console.log("No price for trip id nantes"));

