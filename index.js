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
            message: 'Hi Team Manager! What is your name?',
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
            message: 'What is your office number?',
            name: 'managerOffice',
        } 
    ])
    .then((data) => {
    const htmlStuff = createHtml(data);
    const filename = `./dist/myteam.html`;
    fs.writeFile(filename, htmlStuff, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
    exit();
    }); 

    
};

// create the html output
function createHtml(answers){
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
                <h5 class="card-title">${answers.managerName}</h5>
                <h6 class="card-subtitle mb-2"><i class="icon-control fas fa-camera"></i>Team Manager</h6>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${answers.managerId}</li>
                        <li class="list-group-item">Email Address:<a href="mailto:${answers.managerEmail}"> ${answers.managerEmail}</a></li>
                        <li class="list-group-item">Office Number: ${answers.managerOffice}</li>
                      </ul>
                </div>
            </div>
           
    `;
    return htmlOutput;

};

function exit(){
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add an Engineer or an Intern to the team?',
                name: 'teamChoice',
                choices: [
                    'Engineer',
                    'Intern',
                    'None'
                ],
            },
        ]).then((answers) => {
            if(answers.teamChoice === 'Engineer'){
                engineerInit(); 
            } else if (answers.teamChoice === 'Intern'){
                internInit();
            } else {
                noMoreTeam();
            }
        })
};

function engineerInit(){

    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Hi Engineer! What is your name?',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'engineerId',
        },
        {
            type: 'input',
            message: 'What is your work email address?',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        } 
    ]).then((data) => {
        const htmlStuff = engCardCreate(data);
        const filename = `./dist/myteam.html`;
        // fs.writeFile(filename, htmlStuff, (err) =>
        //     err ? console.log(err) : console.log('Success!')
        // );
        fs.appendFile(filename, htmlStuff, (err) =>
        err ? console.log(err) : console.log('Success!'))
        exit()
        }); 

    function engCardCreate(answers){
        const htmlOutput =`
        <div class="card col-lg" style="width: 18rem;">
        <h5 class="card-title">${answers.engineerName}</h5>
        <h6 class="card-subtitle mb-2"><i class="icon-control fas fa-camera"></i>Engineer</h6>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${answers.engineerId}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${answers.engineerEmail}">${answers.engineerEmail}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
            </ul>
        </div>
    </div>
    `;
    return htmlOutput;
    }
};

function internInit(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Hi Intern! What is your name?',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'internId',
        },
        {
            type: 'input',
            message: 'What is your work email address?',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'What School do you attend?',
            name: 'school',
        } 
    ]).then((data) => {
        const htmlStuff = intCardCreate(data);
        const filename = `./dist/myteam.html`;
        fs.appendFile(filename, htmlStuff, (err) =>
        err ? console.log(err) : console.log('Success!'))
        exit();
        }); 

    function intCardCreate(answers){
        const htmlOutput =`
        <div class="card col-lg" style="width: 18rem;">
        <h5 class="card-title">${answers.internName}</h5>
        <h6 class="card-subtitle mb-2"><i class="icon-control fas fa-camera"></i>Engineer</h6>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${answers.internId}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${answers.internEmail}">${answers.internEmail}</a></li>
                <li class="list-group-item">School: ${answers.school}</li>
            </ul>
        </div>
    </div>
    `;
    return htmlOutput;
    }
}

function noMoreTeam(){

    const htmlStuff = finishHtml();
        const filename = `./dist/myteam.html`;
        fs.appendFile(filename, htmlStuff, (err) =>
        err ? console.log(err) : console.log('Success!'))
 
    function finishHtml(){
        const htmlOutput =`
        </div>
</div>
</body>
</html>
    `;
    return htmlOutput;
    }
}

managerInit();


