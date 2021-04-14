// import the dependencies
const fs = require("fs");
const inquirer = require('inquirer');
const path = require("path");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

// create a function call managerInit(); 
function managerInit(){
    // prompt user for manager infos
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'What is your work email address?',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'What is your officeNumber?',
            name: 'managerOffice',
        } 
    ])
    .then((data) => {
    const htmlStuff = createHtml(data);
    const filename = `./dist/myteam.html`;
    fs.writeFile(filename, htmlStuff, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
    }); 
};

// create the html output
function createHtml(){
    const htmlOutput =`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="jumbo-control jumbotron jumbotron-fluid text-center">
        <div class="container">
          <h1 class="display-4">My Amazing Team!</h1>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <!-- card 1 -->
            <div class="card col-lg" style="width: 18rem;">
                <h5 class="card-title">William Lucht</h5>
                <h6 class="card-subtitle mb-2"><i class="icon-control fas fa-camera"></i>Team Manager</h6>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: 1</li>
                        <li class="list-group-item">Email Address: william@fake.com</li>
                        <li class="list-group-item">Office Number: 1337</li>
                      </ul>
                </div>
            </div>
            <!-- card 2 -->
            <div class="card col-lg" style="width: 18rem;">
                <h5 class="card-title">Tyler Abegg</h5>
                <h6 class="card-subtitle mb-2"><i class="icon-control fas fa-camera"></i>Engineer</h6>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: 2</li>
                        <li class="list-group-item">Email Address: <a href="mailto:TEMPLATE-LITERAL-EMAIL">tyler@fake.com</a></li>
                        <li class="list-group-item">Github: <a href="mailto:TEMPLATE-LITERAL-GITHUB">TylerA</a></li>
                    </ul>
                </div>
            </div>
            <!-- card 3 -->
            <div class="card col-lg" style="width: 18rem;">
                <h5 class="card-title">Random Jack</h5>
                <h6 class="card-subtitle mb-2"><i class="icon-control fas fa-camera"></i>Intern</h6>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: 3</li>
                        <li class="list-group-item">Email Address: <a href="mailto:TEMPLATE-LITERAL-EMAIL">RanJack@fake.com</a></li>
                        <li class="list-group-item">School: UCSD</li>
                    </ul>
                </div>
            </div>
            <!-- card 4 -->
            <div class="card col-lg" style="width: 18rem;">
                <h5 class="card-title">Biggie Codes</h5>
                <h6 class="card-subtitle mb-2"><i class="icon-control fas fa-camera"></i>Engineer</h6>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: 4</li>
                        <li class="list-group-item">Email Address: <a href="mailto:TEMPLATE-LITERAL-EMAIL">biggieC@fake.com</a></li>
                        <li class="list-group-item">Github: <a href="mailto:TEMPLATE-LITERAL-GITHUB">BiggieC</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
    return htmlOutput;
};

// initialize the code
// function init(){
//     // prompt user
//     // run the manager to start
//     // managerInit();

// }

managerInit();
