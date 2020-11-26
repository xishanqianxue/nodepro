'use strict';

const Controller = require('egg').Controller;
const svgCaptcha = require("svg-captcha");
class HomeController extends Controller {
  async post() {
    const ctx = this.ctx
    console.log(ctx.request.body);
    ctx.body = {name:"duuuke"};
  }
  async register() {
    const ctx = this.ctx
    console.log(ctx.request.body,this.ctx.request.files);
    var re = await this.service.home.has(ctx.request.body);
    if(re[0]){
      ctx.body = {info:"邮箱已被注册",code:4001}
    }else{
      var re = await this.service.home.register(ctx.request.body,ctx.request.files);
      console.log(re,66);
      ctx.body = {info:"注册成功",code:2001}
    }
  }
  async form() {
    const ctx = this.ctx;
    console.log(ctx.request.body);
    console.log(ctx.request.files[0]);
    ctx.body = {name:"ddd"};
  }
  async file(){
    const ctx = this.ctx;
    console.log(ctx.request.files);
    ctx.body = ctx.request.files[0].filepath;
  }
  async verif() {
    const ctx = this.ctx
    console.log(ctx.request.query);
    let verif = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      background: '#cc9966'
    })
    this.ctx.session.verif = verif.text;
    ctx.body = verif.data;
  }
}

module.exports = HomeController;
