'use strict';
const Controller = require('egg').Controller;
class TwoController extends Controller {
  async search() {
    const { ctx } = this;
    var re = await this.service.search.search(ctx.query);
    this.ctx.session.username = ctx.request.username;
    this.ctx.session.pwd = ctx.request.pwd;
    if(re[0]){
    ctx.body = {code:2003,re:re};
    }else if(!re[0]){
    ctx.body = {code:4003};
    }
  }
  async onload(){
    const {ctx} = this;
    var re = await this.service.search.onload();
    ctx.body = {re:re};
  }
  async duble(){
    const {ctx} = this;
    console.log(ctx.request.body,1111);
    var re = await this.service.search.duble(ctx.request.body);
    ctx.body = {re:re};
  }
}
module.exports = TwoController;