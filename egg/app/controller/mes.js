'use strict';
const Controller = require('egg').Controller;
class MesController extends Controller {
  async login() {
    const { ctx } = this;
    var re = await this.service.mes.login(ctx.request.body) ;
    if(re[0]){
        ctx.body = {code:2001};
    }else if(!re[0]){
        ctx.body = {code:4003};
    }
  }
  async add() {
    const { ctx } = this;
    var re = await this.service.mes.search(ctx.request.body) ;
    if(!re[0]){
        this.service.mes.add(ctx.request.body);
        ctx.body = {code:2002};
    }else if(re[0]){
        ctx.body = {code:4002};
    }
  }
  async del() {
    const { ctx } = this;
    var re = await this.service.mes.search(ctx.request.query) ;
    if(re[0]){
        await this.service.mes.del(ctx.request.query);
        ctx.body = {code:2002,info: ctx.request.query.goodsID}
    }else if(!re[0]){
        ctx.body = {code:4003}
    }
  }
  async search() {
    const { ctx } = this;
    var re = await this.service.mes.search(ctx.request.query) ;
    if(re[0]){
        var data = {code:2003}
        data.re = re[0];
        ctx.body = data;
    }else if(!re[0]){
        var data = {code:4003}
        ctx.body = data;
    }
    
  }
  async open() {
    const { ctx } = this;
    var re = await this.service.mes.login(ctx.request.body);
    if(re[0]){
        ctx.body = {code:2001};
    }else if(!re[0]){
        ctx.body = {code:4003};
    }
  }
  async change(){
      const{ ctx } = this;
      var re = await this.service.mes.search(ctx.request.body);
      if(re[0]){
          await this.service.mes.change(ctx.request.body);
          ctx.body = {code:2002}
      }else if(!re[0]){
          ctx.body = {code:4003}
      }
  }
}
module.exports = MesController;