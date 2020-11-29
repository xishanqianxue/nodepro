const Service = require('egg').Service;
var fs=require("fs")
class HomeService extends Service {
    async isContainUserxhc(arg) {
       //换成账号accountnumber
        var sql = `select * from userinfo where accountnumber="${arg.accountnumber}"`//验证账号
    //便于检测执行语句以后的结果
        var re = await this.app.mysql.query(sql)
        console.log(sql)
        return re
    }
    async registerxhc(arg,arg2){
        let {ctx}=this
		if(ctx.request.files[0]){
            var oldpath=arg2[0].filepath     
            var newpath=__dirname+"/../public/img/xhc/"+arg2[0].filename
            fs.copyFileSync(oldpath,newpath)
            arg.img="http://192.168.2.219:7001/public/img/xhc/"+arg2[0].filename
        }
        else{
            arg.img="http://192.168.2.219:7001/public/img/xhc/用户.jpg"
        }
        var sql = `insert into userinfo (accountnumber,username,password,mailbox,tel,img)values("${arg.accountnumber}","${arg.username}","${arg.password}","${arg.mailbox}","${arg.tel}","${arg.img}")`
        // console.log(sql)
       var re = await this.app.mysql.query(sql)
       return re
    }
    async loginxhc(arg){

        var sql=`select * from userinfo where accountnumber="${arg.accountnumber}" and password="${arg.password}"`//验证密码
        var re=await this.app.mysql.query(sql)
        return re

    }
   
}
module.exports = HomeService;