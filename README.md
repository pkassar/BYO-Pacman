Build Your Own Pacman Game
==========================

## A PacMan clone built in pure Javascript with minimal Libraries or Frameworks

#### by Henry Hobhouse, Paul Kassar, Slaiman Ahmadshah and Bertie Wooles

A version of PacMan built in pure Javascript in 2 weeks for our final project at Maker's Academy. The game was built with minimal Libraries or Frameworks to increase the understanding of the code, and the help us learn and improve as developers. To play the game, please visit:
https://project-byo-man.herokuapp.com/

* Written in JS using NodeJS as a server-side Runtime Libary. No other Node packages used to run the app other than testing.
* The app is created using Object Orientated Design principles
* The app almost completely mimics the original Pac-Man with only a few features missing.

## Quick Start

The app is interacted via a web browser. The following instructions are a simple method to start.

* Clone the github repo and navigate to the route using your terminal/console.
* Assuming nodeJS is already installed. Run "npm install" to install required packages which are used for mainly testing although requireJS is part of the app it is was only installed to allow a clean pairing of the testing frameworks and the app due to how Node and Browsers allow seperate files and JS objects to talk to each other.
* Start the server using 'npm start'
* Open your browser to http://localhost:3000 and enjoy playing Pac-Man!

### Tests

Tests can be run by navigating to the root of the app using terminal/console. Run "npm test". If this fails then run "npm install" to ensure testing packages are installed.

## Notes on functionality

When creating the App we spent a lot of time creating, and developing, an enviroment for Object Orientated Design. This enabled us to scale the app very quickly towards the end of the project to almost have a fully functioning Pac-Man game. Key missing features include:

* No delay at start of game.
* Ghosts don't leave center at different times
* No animation on Pac-Man death
* No score acumlator on multiple ghosts being eaten on one frightened instance
* ghosts don't make their own way back to center, along with eye animation, upon being eaten
* No Animation of ghosts within center of level
* Levels with increasing difficulty
* Ghosts do not flash when about to leave frightened state

All features are planned on implementation but we simply ran out of time to complete. Expect completion on at least one of the teams own github repos soon I am sure ;)

Issues encountered during the build were mostly around movement and removing edge cases created by different speed of animated objects and how we had adjust postision upon edge cases happening. Other than that we also had issues with ansyncronous nature of JS execution that sometimes meant undesired order of functions which occasionally caused problems. This mostly affected the ghost AI and espcially made it hard to get the ghosts to return to the center themselves. A feature that unfortunately didn't get finished before project end.

The only other major issue is that there are extremely limited testing frameworks for full feature testing of canvas that we could find. The nearest was Canteen but it was simplistic in both results and also how it worked that ultimately meant it wouln't work with our project by how we split objects within the canvas(s).

Future features we envisaged, in addition to completing the stock elements of the game, are placing the game logic server side which would mean it would be possible to view others remotely playing the game. The next step would be to introduce multiplayer although this would require a much improved scoring mechanism and game logic to underpin that. Maybe in the future...




