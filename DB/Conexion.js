const admin=require("firebase-admin");
const keys=require("../keys.json");
admin.initializeApp({
    credential:admin.credential.cert(keys)
});
const db=admin.firestore();
const usuariosDB=db.collection("tablaBD");
const productoDB=db.collection("producto");

module.exports = {
    usuariosDB,
    productoDB
}

//console.log(usuariosDB);