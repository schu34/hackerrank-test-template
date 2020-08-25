# How to Create HackerRank tests using this repo

First, make sure you're on node version 8. HackerRank uses node 8 in their environment so using higher versions can easily break the tester.


This repo is basically just a Create React app with some extra HackerRank config files. When students submit your test, hackerRank will basically run "npm test" and give them the results of that command. 

You should create starter code with *failing* tests, and the students will edit the files (mostly `App.js`) to make the tests pass. Then you should create a solution branch and push that up to github so that volunteers won't have to solve the challenges themselves :D. 
