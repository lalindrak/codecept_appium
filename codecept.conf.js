exports.config = {
  output: './allure-results',
  helpers: {
    Appium: {
      app: 'C:\\Users\\DELL\\Documents\\appium_demo\\calculator_testing.apk',
      platform: 'Android',
      device: 'Pixel 2',
      //runner: 'local',
      port: 4723
    },
    AssertWrapper : {
      require: 'codeceptjs-assert'
    }
  },
  include: {
    I: './steps_file.js',
    calculatorHome:'./pages/CalculatorHome.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./features/step_definitions/calculator_home_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled:true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  name: 'appium_demo'
}