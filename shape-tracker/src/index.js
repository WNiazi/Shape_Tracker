//User Logic 
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Triangle from './triangle.js';
import $ from 'jquery';
import 'bootstrap';

$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event) {
    event.preventDefault();
    const length1 = $('#length1').val();
    const length2 = $('#length2').val();
    const length3 = $('#length3').val();
    const triangle = new Triangle(length1, length2, length3)
    const response = triangle.checkType();
    $('#response').append("<p>" + response + "</p>");
  });
});


//Jest is a tool for automated test, 
//minified : to make smaller so code runs faster 
//developement environments what coders use and production is what the machines use
// npm: helps manage javascript and webpack condenses and put it on our code.  html-webpack-plugin allows us to get html templates, webpack-dev-sever reloads code, webpack.condfi: hold our webpack.  eslint checks for errors.  Defn: dist and src: finished code.  bundle.js: automatic, bundle.  _test_ all test (one for each shape). package : all things we may need, and package lock is automatic
// npm init (will get you the json package)//this help other replicate the project ,first they need to clone then run : npm install.  allows us to add own scripts  (custom npm commands).  1st npm install wepack@4.39.3 -has --save dev (development/maching side) and --save exact (get exact version)
// 2. install webpack clic : it has ^it can be one we specify but can interact badly with others.  but ~ an older one can be used. npm prune "clean up" = dependencies that are in the project are installed.  you can always trash it and reinstall folder again. 3. all projects should have gitignore: node/modules are too big to put in repository 
// note:  git rm -r --cached [FILE-NAME]
//  git diff ready-to-commit.js
// First, get the $ git status.
// Use $ git diff [FILE-NAME] to verify that the changes look correct.
// Use $ git add [FILE-NAME] to select a file to commit. Multiple files can be committed at once if they are related to the same feature - but should be added one by one by doing $ git add file1 file2 etc.
// Run $ git commit and add a great commit message.