'use strict';

const Controller = require('egg').Controller;
class PersonalController extends Controller {
    async personal(){
      const{ ctx }=this;
      var re=await this.service.centre.personal(ctx.request.body)
      console.log(ctx.request.body,11111);
      if(re[0]){
        ctx.body={code:2002}
      }else{
          ctx.body={code:4004}
      }
        
       
    }
}

module.exports = PersonalController;
