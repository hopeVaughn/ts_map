# ts_map project
## Initializing with parcel
I'll be using parcel to run this project. I no longer need install parcel globally. In your project folder run the command `npx parcel index.html`. This will create both a .cache and a dist folder inside the project directory because the script tag inside my `index.html` file contains a *script* tag that allows parcel to draw from the index.ts file in the src directory. 
```html 
<script src="./src/index.ts"></script>
```
## Dependencies
This project utilizes TypeScript. TypesScript is essentially the best dang linter that JavaScript ever did see. To learn more about TypeScript and it's uses please visit the official documentation [here](https://www.typescriptlang.org/docs/)

This project utilizes the [faker](https://github.com/faker-js/faker) dependency from github. The previous version of faker is deprecated and no longer maintained. This version was captured to preserve it. This version of faker supports types already so there's no need to add the @type to the dependency.

This project utilizes the google map api and therefore needs to have the @types/google.maps dependency. You will also need to generate your own Google Maps API key. This can be done in the Google Developers page. This also means that at the top of our index.ts file we need to include ``` /// <reference types="@types/google.maps" />``` 
Documentation around why that is can be found [here](https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import).

## Core Concepts
* We want to limit the amount of exposed area of our google map api. To do so we added the *private* modifier to the CustomMap class. This way when we create a new instance of CustomMap we limit the access to the numerous methods available through the google maps api. 

* We used an interface to establish the contents of the arguments we passed into our map api. Both our Company and User classes we're adjusted to make sure they met the requirements. This also allowed us to minimize repeated code by setting up a dependency between CustomMap and anything being passed in as arguments.