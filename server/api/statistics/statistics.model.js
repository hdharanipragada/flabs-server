'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StatisticsSchema = new Schema({
  SERIES1: [{
    date: Number,
    value: Number
  }],
  SERIES2: [{
    date: Number,
    value: Number
  }],
  SERIES3: [{
    date: Number,
    value: Number
  }],
  SERIES4: [{
    date: Number,
    value: Number
  }]
});

module.exports = mongoose.model('Statistics', StatisticsSchema);