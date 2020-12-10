const { I,calculatorHome } = inject();
// Add in your custom step files

Given('I press number {string}', (number) => {
  calculatorHome.pressNumber(number)
});
Given('I press equals operation', (equals) => {
  calculatorHome.pressEquals(equals)
});
Given('I press {string} as the arithmatic operation', (arithmatic) => {
  calculatorHome.pressArithmaticOperation(arithmatic)
});
Then('I should get result {string} as my answer', async(number) => {
  calculatorHome.verifyResult(number)
});


