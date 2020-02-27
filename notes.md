create repo - clone it
add gitignore
add package.json
update test script to use jest
add jest config to package.json
add "server" and "start" scripts to package.json

# Features
list of cohorts
add a cohort
list cohort students
list of students
add a student
list of student's cohorts

|Features | Method | URL|
|:--|:--|:--|
|List of cohorts | Get | /api/cohorts|
|Add a cohort | POST | /api/cohorts|
|View Cohorts students | Get | /api/cohorts/:id/students|
|List of Students | GET | /api/students|
|Add a Student | Post | /api/studnets|
|List of students' cohorts | Get | /api/students/:id/cohorts|

## Cohorts
id
name
start date

## Students
id
name


## Testing

- functions: invoke the function with optional arguments => check results
- endpoints: make a request with optional arguments => check response