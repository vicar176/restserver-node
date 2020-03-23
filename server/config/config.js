//===========================
//          PUERTO
//============================
process.env.PORT = process.env.PORT || 3000;
//===========================
//          ENTORNO
//============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//===========================
//    Vencimiento del Token
//============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
//===========================
//          Semilla
//============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
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


//===========================
//     GOOGLE CLIENT ID
//============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '286841422562-8m91c7r4h4c7kjmob2v9gqi963nas2h4.apps.googleusercontent.com'