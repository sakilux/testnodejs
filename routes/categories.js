const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Categorie = mongoose.model('Categorie', new mongoose.Schema({

  name: {
    type: String,
    required: true
  }
  
}));