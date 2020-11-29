'use strict';
const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');
class Controllerxhc extends Controller {
  async registerxhc(){
    const { ctx } = this;
	console.log(ctx.request.body,ctx.request.files)
//验证账号是否存在
	var re=await ctx.service.homexhc.isContainUserxhc(ctx.request.body)
	// 数据库查询语句返回结果，做判断，如果有数据则为账号已经存在，没有反之
	console.log(re,"这一步是为了账号是否存在")
	// 存不存在都需要给前段发一些数据，便于业务逻辑
	if(re[0]){
		ctx.body = {code:4001,info:"账号已经存在"};
	}else{
		// 如果账号不存在的话就往数据库里面插入数据注册用户，然后给前段返回数据用于处理业务逻辑
		await ctx.service.homexhc.registerxhc(ctx.request.body,ctx.request.files)
		ctx.body={code:2001,info:"注册成功"}
	}
  }
//   验证码
async getVerifxhc(){

    let verif=svgCaptcha.create({
		size: 4,
		fontSize: 50,
		width: 100,
		height: 40,
		background: '#cc9966'
	})
	console.log(verif.data,1111)
	this.ctx.session.verif=verif.text
	this.ctx.body=verif.data
  }
  async loginxhc(){
	console.log(this.ctx.request.body)
//如果发过来的验证码和一开始的网络请求的验证码相同则去数据库里面查询账号密码是否存在
	if(this.ctx.request.body.verif==this.ctx.session.verif){
	   var re=await this.ctx.service.homexhc.loginxhc(this.ctx.request.body)
	  //  console.log(re,666666)
	//有没有给数据反应
	  if(!re[0]){this.ctx.body={info:"账号或者密码错误",code:4003}}//
	//  有账号
	  else{
		  this.ctx.session.accountnumber=this.ctx.request.body.accountnumber
		  this.ctx.session.password=this.ctx.request.body.password
		  //3.4发送登录成功的标识
		  this.ctx.body={info:"登录成功",code:2002}
	  }
	}else{
		//4.返回验证码错误的信息
		this.ctx.body={info:"验证码错误",code:4002}

	}
   
}

}
module.exports = Controllerxhc;