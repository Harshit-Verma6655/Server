const express=require('express');
const newsRoute=require('./routes/newsRoute');
const cors=require('cors');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api',newsRoute);

module.exports=app;
