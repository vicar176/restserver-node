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
    urlDB = process.env.MONGO_URL;
}

// MongoAtlas credentials
// user: admin
// password: yesebb12Ir1cdcK0

process.env.URLDB = urlDB;