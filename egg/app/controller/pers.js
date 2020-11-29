'use strict';

const Controller = require('egg').Controller;
class PersonalController extends Controller {
    async personal(){
      const{ ctx }=this;
      var re=await this.service.centre.personal(ctx.request.body)
      console.log(11,re,22);
      if(re){
        ctx.body={code:2002}
      }else if(!re){
          ctx.body={code:4004}
      }
        
       
    }
}

module.exports = PersonalController;
