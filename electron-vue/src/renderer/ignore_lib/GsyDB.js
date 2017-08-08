'use strict'

var sqlite3 = require('sqlite3').verbose()
// var sql = new sqlite3.Database('GSY.db');
var path = require('path').resolve(__dirname, 'GSY.db')
var sql = new sqlite3.Database(path, 'OPEN_READONLY')
var db = {
  getWorkList: function (cate, callback) {
    var stm = 'SELECT * from `works`'
    if (parseInt(cate) > 0) {
      stm += ' WHERE `category_id` = "' + cate + '"'
    }
    sql.all(stm, function (err, row) {
      callback(row)
    })
  },
  getHistoricalList: function (cate, callback) {
    var stm = 'SELECT `id`,`category_id`,`name`,`author`,`create_time` from `historicaldata`'
    if (parseInt(cate) > 0) {
      stm += ' WHERE `category_id` = "' + cate + '"'
    }
    sql.all(stm, function (err, row) {
      callback(row)
    })
  },
  getHistoricalDetail: function (id, callback) {
    sql.get('SELECT * from "historicaldata" WHERE "id" = "' + id + '"', function (err, row) {
      callback(row)
    })
  },
  getResearchList: function (cate, callback) {
    var stm = 'SELECT `id`,`category_id`,`name`,`author`,`create_time` from "researchartical"'
    if (parseInt(cate) > 0) {
      stm += ' WHERE `category_id` = "' + cate + '"'
    }
    sql.all(stm, function (err, row) {
      callback(row)
    })
  },
  getResearchDetail: function (id, callback) {
    sql.get('SELECT * from `researchartical` WHERE `id` = "' + id + '"', function (err, row) {
      callback(row)
    })
  },
  getWorkArtical: function (id, callback) {
    if (id) {
      sql.all('SELECT researchartical.id,researchartical.category_id,researchartical.name,researchartical.author,researchartical.create_time from `works_researchartical` LEFT OUTER JOIN `researchartical` ON works_researchartical.researchartical_id = researchartical.id WHERE `works_id` = "' + id + '"', function (err, row) {
        callback(row)
      })
    } else {
      callback(null)
    }
  },
  search: function (py, callback) {
    if (py) {
      var res = {}
      sql.all('SELECT * from `works` WHERE `py` LIKE "' + py + '"', function (err, row) {
        res.works = row
        sql.all('SELECT `id`,`category_id`,`name`,`author`,`create_time` from `researchartical` WHERE `py` LIKE "' + py + '"', function (err, row) {
          res.research = row
          sql.all('SELECT `id`,`category_id`,`name`,`author`,`create_time` from `historicaldata` WHERE `py` LIKE "' + py + '"', function (err, row) {
            res.history = row
            callback(res)
          })
        })
      })
    } else {
      callback(null)
    }
  }
}
module.exports = db
