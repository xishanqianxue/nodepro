const Service = require('egg').Service;
class TwoService extends Service {
  async search(arg) {
    const sql=`select * from books where goodsDesc like'%${arg.goodsName}%'`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  async onload(){
    const sql=`select * from books;`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  async duble(arg){
    const sql=`select * from books where goodsDesc like"%${arg.word1}%" and goodsDesc like"%${arg.word2}%";`
    const data = await this.app.mysql.query(sql);
    return data;
  }
}
module.exports = TwoService;