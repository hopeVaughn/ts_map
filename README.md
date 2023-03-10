# ts_map project
## Initializing with parcel
I'll be using parcel to run this project. I no longer need install parcel globally. In your project folder run the command `npx parcel index.html`. This will create both a .cache and a dist folder inside the project directory because the script tag inside my `index.html` file contains a *script* tag that allows parcel to draw from the index.ts file in the src directory. 
```html 
<script src="./src/index.ts"></script>
```
## Dependencies
This project utilizes the [faker](https://github.com/faker-js/faker) dependency from github. The previous version of faker is deprecated and no longer maintained. This version was captured to preserve it. This version of faker supports types already so there's no need to add the @type to the dependency.

This project utilizes the google map api and therefore needs to have the @types/google.maps dependency. This also means that at the top of our index.ts file we need to include ``` /// <reference types="@types/google.maps" />``` 
Documentation around why that is can be found [here](https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import).

