karma-simple-ci-integration
===========================

This is a karma configuration example that can be easily integrated into a CI environment (in particular jenkins + sonar).

This example runs some tests for 2 types of applications:

- A simple functionallity (SQRT function, sqrt.js file)
- An AngularJS simple application (Contacts CRUD, based on http://jsfiddle.net/viralpatel/72vT5/light/, and Qunit using injection as in http://stackoverflow.com/questions/22210888/angularjs-and-qunit-testing-controller-with-service-dependency)

Tests were developed using QUnit, following an approach of stacked technologies as mentioned at  http://josemacchi.wordpress.com/2014/09/16/ui-testing-e-integracion-continua-ci/#more-113
QUnit was used since it's not the typical framework used with AngularJS (basically you will find more examples if you use Jasmine)

Karma runs those tests and generates reports in a folder (reports folder).

##Installation

Simply execute following commands:
 
 - npm install 
 - npm test
 
## Running on a CI (jenkins + sonar)
(if you understand spanish, then you can check this [URL] (http://josemacchi.wordpress.com/2014/09/16/ui-testing-e-integracion-continua-ci/), that explains same concepts)

Basically, once you have the project running, then you have 2 important approachs on how to use developed TESTs to address any concern.

### For developers
If you are a UI Dev and you want to check how your code is working fine (considering tests as you validation tool) then you should change/set the singleRun option to false in karma.conf.js file.

That will keep browsers opened (those declared in Karma config file) and tests running every time that your "files" change. 
It´s similar to have a continue checking process on your code.

That way then you - as developer - will be aware of changing code that could generate tests failures, at CI environment.

### For technical leads/managers

As TL or Manager on a project you could desire to have a continuos checking process of the code, to be sure that complaints with some minimal tests (that could be related to TDD or BDD approachs).

For that, then you will have to set up a CI environment (Jenkins + Sonar could be a full approach, including reports)

* Jenkins: it's an CI opensource, and will let you to define a schedule of tasks to be executed (like cron in unix)
* Sonar: it´s an OS platform that will let you see reports on code quality.

So, first step is to have that enviroment up. Then,

- Install Jenkins (http://http://jenkins-ci.org/)
- Install Sonar (http://www.sonarqube.org/ )
- Integrate Sonar Plugin on Jenkins ( http://docs.codehaus.org/display/SONAR/Configuring+SonarQube+Jenkins+Plugin )

Then you should create a task at Jenkins that will run your "karma start" command from your console (at any time you define).
In this case, as the Jenkins runner will executed your command when you define, it's important to set singleRun option to true (if not, then karma will keep enviroment up, even when your CI enviroment wants to run test execution one time)
Finally, you will have to config the reports folders at the SONAR plugin (on jenkins tasks), updating those reports every time they are executed.

Something like this would be the right configuration on your plugin:

```javascript
sonar.projectVersion=1.0.0.1
sonar.projectKey=ProjectKey
sonar.projectName=ProjectKey
sonar.dynamicAnalysis=reuseReports
sonar.javascript.jstestdriver.reportsPath=./script/tests/reports/jasmine
sonar.javascript.lcov.reportPath=./script/tests/reports/coverage/Chrome 35.0.1916 (Windows 7)/lcov.info
javascript-module.sonar.exclusions=**/packages/**/*, projectFolder/Content/**/*
```
 
At the end, every time that jenkins execute your karma configuration, this one will execute tests and will place reports on the specified folders.
Then, sonar plugin will tell Sonar from where to take generated reports, and will present them into the Sonar format (that is why we get JUnit and LCOV formats as output format from Karma)
 
Update (25/9/2014):  If you prefer it´s possible to use this plugin https://wiki.jenkins-ci.org/display/JENKINS/NodeJS+Plugin  from Jenkins, that would made easier to configure calls to commands like "karma start"
 
## Author

[Jose Macchi](https://github.com/jemacchi)



