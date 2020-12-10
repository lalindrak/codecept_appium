const { I } = inject();
module.exports = {
    locators: {
      btnNumber: 'com.google.android.calculator:id',
      btnEquals:'com.google.android.calculator:id/eq',
      btnArithmatic:'com.google.android.calculator:id',
      txtFinalResult:'com.google.android.calculator:id/result_final'
    },
    pressNumber(number){
      I.tap({id:this.locators.btnNumber+`/digit_${number}`})

    },
    pressEquals(){
      I.tap({id:this.locators.btnEquals})
    },
    pressArithmaticOperation(arithmatic){
      if(arithmatic ==='+'){
        I.tap({id:this.locators.btnArithmatic+'/op_add'})
      }
      else if(arithmatic === '-'){
        I.tap({id:this.locators.btnArithmatic+'/op_sub'})
      }
      else if(arithmatic === 'x'){
        I.tap({id:this.locators.btnArithmatic+'/op_mul'})
      }
      else
        I.tap({id:this.locators.btnArithmatic+'/op_div'})
    },
    async verifyResult(number){
      let result = await I.grabTextFrom({id:this.locators.txtFinalResult})
      I.assert(result,number,'Results do not match')

    }
}