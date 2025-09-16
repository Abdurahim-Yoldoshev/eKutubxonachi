const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
require('./bot/bot');
app.use(express.json());

async function dev() {
    try {
        await mongoose.connect(process.env.MoNGO_URL)
        .then(()=>{console.log("MongoDB: Ishlashga tayyor...")})
        .catch((error) => {console.log("Xatolik"+error)})
        app.listen(process.env.PORT,() =>{console.log(process.env.PORT + " raqamli Port ishlamoqda...")})
    } catch (error) {
        console.log("Tizimda xato:" + error);
    }
}

dev();