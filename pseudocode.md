1 create file structure based on readme

2 build class for each of the following (file for each, export for each)
    - employee 
        - name
        - id
        - email
        - getName()
        - getId()
        - getEmail()
        - getRole() -- return employee
    - manager
        - officeNumber
        - getRole() -- return manager
    - engineer
        - github username
        - getGit()
        - getRole() -- return engineer
    - intern
        - school
        - getSchool()
        - getRole() -- return intern

3 import classes to index js

4 create array to store employees

5 function to initialize, divide based on employee roles
    - all teams need at least 1 manager -- nested function to generate manger with prompts
    - create new Manager object using manager class and data from prompts
    - push object to array of employees

    - same for engineers and interns (if or switch statements)

    - use prompt to ask if more employee or finish -- use conditionals

    - function that stops inquirer and generates html page
        - use fs to write to dist folder

6 create helper function in src to generate HTML file
    - generate employee cards and pass in data from prompts
    - array to store html then push html for employee into array and return as string

7 testing boooooooo
    - suite of tests for each class (test folder)
    - focus on constructors