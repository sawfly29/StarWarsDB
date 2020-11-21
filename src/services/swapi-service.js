// fetch('https://swapi.dev/api/people')
// .then((answ) => {return answ.json()})
// .then((response) => {console.log('answer: ', response)})

export default class SwapiService {
    _apiBase = "https://swapi.dev/api";
  
    async getResource(url) {
      const serverAnswer = await fetch(`${this._apiBase}${url}`);
      if (!serverAnswer.ok) {
        throw new Error(`couldn't fetch ${url}, received ${serverAnswer.status}`);
      }
      const itemBody = await serverAnswer.json();
      return itemBody;
    }
    async getAllPeople(){
      const res = await this.getResource('/people/')
      return res.results.map(this._transformPerson)
    }
    async getPerson(id){
      const res = await this.getResource(`/people/${id}`)
      return this._transformPerson(res)
    }
    async getAllStarships(){
      const res = await this.getResource('/starships/')
      return res.results.map(this._transformStarship)
    }
    async getStarship(id){
      const res = await this.getResource(`/starships/${id}`)
      return this._transformStarship(res)
    }
    async getAllPlanets(){
      const res = await this.getResource('/planets/')
      return res.results.map(this._transformPlanet)
    }
    async getPlanet(id){
      const planet = await this.getResource(`/planets/${id}`)
      return this._transformPlanet(planet)
    }
    _extractId(item){
      const idRegExp=/\/([0-9]*)\/$/;
      const id = item.url.match(idRegExp)[1]
      return id
    }
    _transformPlanet = (planet)=> {
      const id = this._extractId(planet)
      return {
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter}
    }
    _transformPerson = (person) =>{
      const id = this._extractId(person)
     
      return {
        id,
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color,
    }
  }
    _transformStarship = (starship) =>{
      const id = this._extractId(starship)
      return {
        id,
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity,
    }
  }
}