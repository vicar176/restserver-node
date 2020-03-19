//===========================
//          PUERTO
//============================
process.env.PORT = process.env.PORT || 3000;
//===========================
//          ENTORNO
//============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//===========================
//          BASE DATOS
//============================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://admin:yesebb12Ir1cdcK0@cluster0-s8g4a.mongodb.net/cafe';
}

// MongoAtlas credentials
// user: admin
// password: yesebb12Ir1cdcK0

process.env.URLDB = urlDB;