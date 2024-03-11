import { Console, error } from "console";


const pg = require("pg");
const { Pool } = require('pg');

class Banco{
    dbConfig = {
        user: 'seu_usuario',
        host: 'seu_host',
        database: 'seu_banco_de_dados',
        password: 'sua_senha',
        port: "seu_porta",
        ssl: {
          rejectUnauthorized: false, // Necessário para conexão com Aiven
        },
      };
    pool = new Pool(this.dbConfig)

    verTabelas() {
        try{
            const resultado = this.pool.query('SELECT * FROM tabela')
            console.log(resultado)
         
        }
        catch{
            console.error("Deu erro!")
        }
    }
}