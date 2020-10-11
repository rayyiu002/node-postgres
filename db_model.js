const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '35.220.138.114',
  database: 'postgres',
  password: 'k73r87',
  port: 5432,
});

const getDetails = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT stock_price as 恆生指數,  future_current_price as 期貨現價 , stock_price_change as 現貨升跌,  total_delta as 未平倉合約總數升跌 , net_delta as 未平倉合約淨數升跌 ,  update_date as 日期 FROM public.future_info WHERE UPDATE_DATE LIKE \'%20:45%\' OR UPDATE_DATE LIKE \'%16:45%\' order by id desc  ', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

module.exports = {
  getDetails
}

