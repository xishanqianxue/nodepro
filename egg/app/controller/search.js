'use strict';
const Controller = require('egg').Controller;
class TwoController extends Controller {
  async search() {
    const { ctx } = this;
    var re = await this.service.search.search(ctx.query);
    console.log(re,666);
    if(re[0]){
    ctx.body = {code:2003,re:re};
    }else if(!re[0]){
    ctx.body = {code:4003};
    }
  }
}
module.exports = TwoController;