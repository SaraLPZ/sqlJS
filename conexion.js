let mysql = require("mysql"); //Libreria mysql

//Conexion a la base de datos
let conection = mysql.createConnection({
  host: "localhost",
  database: "biblioteca",
  user: "root",
  password: "",
});

//Conectar con base de datos con connect
conection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Conexion exitosa");
  }
});

//Consulta para que me muestre todos los usuarios
const usuarios = "SELECT * FROM usuarios";

//Ejecutar la consulta y que me lo imprima en la consola
conection.query(usuarios, function (error, lista) {
  if (error) {
    throw error;
  } else {
    console.log(lista);
  }
});
