import { User } from './User'
import { Company } from './Company'

// This interface is a check on the arguments given to the addMarker method in the CustomMap class. TypeScript uses an implicit check on the arguments given to check if the meet the interface requirements. The arguments are the User and Company classes passed in through the index.ts
interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor (divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hello Hope!'
      });
      infoWindow.open(this.googleMap, marker)
    })
  }

}