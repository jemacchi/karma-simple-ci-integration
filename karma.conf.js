// Karma configuration

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // frameworks to use
    frameworks: ['qunit'],

    // list of files / patterns to load in the browser
    files: [
      './lib/qunit-1.15.0.js',	
	  './app/scripts/libs/angular-1.2.1.js',
	  './app/scripts/app.js',
	  './app/scripts/services/ContactService.js',
	  './app/scripts/controllers/ContactController.js',
	  './app/scripts/libs/sqrt.js',
	  './test/test.sqrt.js',	  
	  './test/test.contactController.js',	  
    ],


    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    //reporters: ['progress', 'coverage', 'junit'],
	reporters: ['progress','coverage','junit'],
	
    preprocessors: { 
        './app/scripts/app.js': ['coverage'] ,
	    './app/scripts/services/ContactService.js': ['coverage'] ,
	    './app/scripts/controllers/ContactController.js': ['coverage'] ,
	    './app/scripts/libs/sqrt.js': ['coverage'] ,
		'./app/scripts/sqrt.js': ['coverage'] ,
	    './test/test.sqrt.js': ['coverage'] ,
	    './test/test.contactController.js': ['coverage'] ,	  		
	},
	
	// optionally, configure the reporter
    coverageReporter: {
      type : 'lcov',
      dir : './reports/coverage/'
    },
	
	// the default configuration
    junitReporter: {
      outputFile: './reports/qunit/TEST-results.xml',
      suite: ''
    },
	
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,	

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};

