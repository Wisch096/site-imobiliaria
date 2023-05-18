const express = require('express');
const app = express();
const mysql2 = require("mysql2");
const cors = require("cors");

const db = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "imobiliaria",
    port: "3307"
})

db.getConnection((error, connection) => {
    if (error) {
      console.error('Erro ao obter conexão do pool: ' + error.stack);
      return;
    }
    console.log('Conexão estabelecida com o MySQL');
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { tipo } = req.body;
    const { endereco } = req.body;
    const { dados } = req.body;
    const { valor } = req.body;
    const { imagem } = req.body;

    let SQL = "INSERT INTO imovel (tipo, endereco, dados, valor, imagem) VALUES (?,?,?,?,?)";

    db.query(SQL, [tipo, endereco, dados, valor, imagem], (err, result) => {
        console.log(err)
    });
});

app.get("/getCards", (req, res) => {

    let SQL = "SELECT * FROM imovel";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});

app.listen(3002, () => {
    console.log("Rodando servidor!")
})
