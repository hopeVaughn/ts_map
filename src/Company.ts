import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor () {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  markerContent(): string {
    return `
    <div>
    <h3>${this.companyName}</h3>
    <h5>${this.catchPhrase}</h5>
    </div>
    `
  }
}