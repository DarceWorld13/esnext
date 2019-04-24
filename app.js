
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
function getWeather(cityId){
let city = cityId.toUpperCase(); 
let temperature = 20; 
        return {city, temperature}; 
}
const weather = (getWeather('Paris',)); 
console.log(weather); 
console.log("<<<<<<<<<<<<<<Affectation destructurée>>>>>>>>>>")
const {city, temperature} =weather; 
console.log(city);
console.log(temperature); 

console.log('>>>>>>>>>>>>>>>Rest operator<<<<<<<<<<<<<<<<<<<<<<<<<<')
let [parisId,nycId, ...othersCitiesId] = citiesId; 
console.log(parisId); 
console.log(nycId); 
console.log(othersCitiesId.length); 


class Trip{
    constructor(id, name, imageUrl){
        this.id = id; 
        this.name = name; 
        this.imageUrl = imageUrl; 
    }
    toString(){
        return this.id +' '+ this.name+' '+this.imageUrl + ''+ this.price; 
    }

    static getDefaultTrip(){
     
        return new Trip("rio-de-janeiro","Rio de Janeiro","img/rio-de-janeiro.jpg");
    }

    get price(){
        return this._price; 
    }
    set price(newprice){
        return this._price = newprice; 
    }
}
const parisTrip = new Trip("paris", "Paris", "img/paris.jpg"); 

console.log(parisTrip); 
const {name} = parisTrip; 
console.log(name); 

console.log(parisTrip.toString()); 

parisTrip.price = 100; 

console.log(parisTrip.toString()); 

const defaultTrip = Trip.getDefaultTrip(); 

console.log(defaultTrip.toString()); 

console.log(">>>>>>>>>>>>>>>>>>>Héritage<<<<<<<<<<<<<<<<<<<<<"); 

class FreeTrip extends Trip{

    constructor(id, name, imageUrl, price) {
        super(id, name,imageUrl);
        this.price = 0;
        ;}

        toString() {
            return 'FREE ['+ super.toString() + ' ' + this.price +']';
        }

}
const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg',0); 
console.log(freeTrip.toString()); 

console.log(">>>>>>>>>>>>>>>>>>>Promise, Set, Map, Arrow Function<<<<<<<<<<<<<");

class TripService {

    constructor(paris, nantes, rio) {
        // TODO Set of 3 trips
        
        this.paris = new Trip('paris', 'Paris', 'img/paris.jpg')
         let Nantes = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
         let Rio = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }

    findByName(tripName) {

         return new Promise((resolve, reject) => {

             setTimeout( () => {
                request(
                    
                    , {
                    json: true
                  }, (err, res, body) => {
                    if (err) {
                      reject(err);
                    } else {
                      resolve(body);
                    }
              
                  });


             }, 2000)
        });
    }
}

class PriceService {

    constructor(villesprice) {

        this.villesprice = Map (  
        new Map ("Paris", 100),
        new Map("rio-de-janiero", 800),
        new Map("nantes")
        );
    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        // ici l'exécution du code est asynchrone

                        // TODO utiliser resolve et reject en fonction du résultat de la recherche

                    }, 2000)
               });
    }
}