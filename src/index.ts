/// <reference types="@types/google.maps" />
// must update all my applicable classes with : import { faker } from "@faker-js/faker";
import { User } from './User'
import { Company } from './Company'
import { CustomMap } from "./CustomMap";
const user = new User;
const company = new Company;
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);