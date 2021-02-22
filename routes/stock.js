const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Stock = mongoose.model('Stock', new mongoose.Schema({

    Description   : {
        type: String,
        required: true
      },

    QntyAvailable: {
    type: String,
    required: true
  }
}));