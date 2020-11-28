const Service = require('egg').Service;
class TwoService extends Service {
  async search(arg) {
    const sql=`select * from books where goodsDesc like'%${arg.goodsName}%'`
    const data = await this.app.mysql.query(sql);
    console.log(data,111);
    return data;
  }
}
module.exports = TwoService;