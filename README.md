# NewsHUB
This is a project using meteor as the development tools 

# How to host
To host the web, install meteor from [Meteor](https://www.meteor.com/install) website
Before you run this project, please change the time in main.js inside folder public
```
var schedule = later.parse.recur().on([CHANGE TO THE NEXT MINUTE]).minute();
```

# Guide to read the project
To start with, I personaly suggest you to read the index.html in client folder and trace back by reading what sources have been imported 
The structure of the source code is as follows
```
|--- client               //all data for client sides are stored here
|-------- stylesheet      //stylesheet of the website are stored in here
|
|--- imoprts              //folder storing react components
|-------- api             //storing the componenets for other scripts to call
|-------- stylesheets     //store stylesheets for font-awesome and ionicons 
|-------- ui              //components related to ui stored here
|----------- accounts     //account components
|----------- container    //container component
|
|--- node_modules         //for storing node.js modules
|--- public               //for storing images or fonts that are opend to public
|--- server               //all data or scripts for server sides are stored here
```

# Dependency
This project used these npm dependencies:
  - react
  - react-dom
  - react-bootstrap
  - react-mfb
  - babel-runtime
  - react-addons-pure-render-mixin
  - bcrypt
  
```
meteor npm install --save react react-dom react-bootstrap react-mfb babel-runtime react-addons-pure-render-mixin bcrypt
```
