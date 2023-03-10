/// <reference types="@types/google.maps" />
// must update all my imports with :
// import { faker } from "@faker-js/faker";
// import { User } from './User'
// import { Company } from './Company'
new google.maps.Map(document.getElementById('map') as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});

