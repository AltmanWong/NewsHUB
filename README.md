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
# To-do
  - Login 
  - Dashboard
