# Image Processing API
## Image Processing API is an Image resizing app
### how to use : 
1. open the folder called " Image Processing API " in your editor and run this script in the terminal ```npm run start```
2. wait until see the message " server running on port 700 "
3. go to the browser and and enter the following url in the search bar```http://localhost:7000/resize/?name=&width=img name "the width you want "&height="the height you want"```
4. after this you will get the resizing image with the width and the height the entered
### available images :
1. palmtunnel 
2. santamonica
### endpoints :
1. /resize
### language frameworks libraries :
- the app in 100%  written in javascript
- the source code is written with typescript before compiling
- I used node.js as a javascript runtime environment
- i used sharp library to resize the image, express to set up my server
- i used jasmine library for testing and ESlint and prettier for clean organized fully functioning code
### scripts: 
 -   lint: ```npx eslint src/**/*.ts"```
 -  prettier: ``` npx prettier --write src/app/**/*.ts ```
 -   build :``` npx tsc```
 -   jasmine :``` jasmine```
 -   test : ``` npm run build && npm run jasmine```
 -   start : ``` nodemon src/app/server.ts```
