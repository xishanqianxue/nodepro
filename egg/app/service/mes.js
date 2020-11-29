const Service = require('egg').Service;
class MesService extends Service {
  async login(arg) {
    const sql=`select * from messager where username="${arg.username}" and pwd="${arg.pwd}"`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  async search(arg) {
  const sql=`select * from books where goodsID="${arg.goodsID}"`
  const data = await this.app.mysql.query(sql);
  return data;
}
    async add(arg) {
    const sql=`insert into books(goodsName,goodsKind,goodsPrice,goodsID,goodsDesc) values("${arg.goodsName}","${arg.goodsKind}","${arg.goodsPrice}","${arg.goodsID}","[${arg.goodsKind}]${arg.goodsDesc}")`
    await this.app.mysql.query(sql);
    }
    async del(arg) {
    const sql=`delete from books where goodsID="${arg.goodsID}"`
    await this.app.mysql.query(sql);
    return {info: arg.del}
    }
    async change(arg) {
        const sql = `update books set goodsKind="${arg.goodsKind}",goodsPrice="${arg.goodsPrice}",goodsDesc="${arg.goodsDesc}" where goodsID="${arg.goodsID}"`
        await this.app.mysql.query(sql);
    }
}
module.exports = MesService;