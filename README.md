# see-and-smell
Carbone footprint simulator/calculator I made last year with google map
# README #
[![Front‑End_Checklist followed](https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg)](https://github.com/thedaviddias/Front-End-Checklist/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)(https://github.com/dominictarr/stability)



Speak to the App and find information  :microphone: [Here](https://mys terious-atoll-69963.herokuapp.com/talk)

 
The web browser may tell you that the page tries to load unsafe script (the http Wikipedia Request) 
 

## Stability

Experimental: Expect the unexpected. Please provide feedback on api and your use-case.

### Intropduction ###



* Version
1.0.0

### How to use ###

Download

    git clone git clone https://github.com/arn-the-long-beard/talk-and-smell.git

Go to the directory
   
    cd see-and-smell
    
Install Npm Packages
    
    npm install 
    
Start the server
  
    npm start
    
* Comments  

It is working on http because of the wikiJs. 

Usually I run everything on https by using http2/spdy.

You can change development.js and the page.js inside wikisj to have full https

The redux store has information about the server in case of test on local network 

There is also a promisesCollecteur to handle Async redux actions for injecting data and render ready html for SEO if we need


* Configuration

>1 Dev config :

    npm start
or
    
    npm run start_dev


>2 Prod config :

For building for production :
    
    npm run build

For running the production server :

    npm run start_prod
    
    
##### For the production ( ie for the upload on an hosting server)
* Dependencies
* Database configuration
* How to run tests
( not set yet)
    npm test
* Deployment instructions


For building platform for production :
    
    npm build

For running the production server :

    npm start_prod

### Contribution guidelines ###

* Writing tests
* Code review

### TODO ###


* Other guidelines


### Community ###

* arn-the-long-beard
* Other community or team contact



Feel free to ask questions and help about how to run an isomorphic React-Redux app like this