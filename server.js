const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:4321/"],

};

app.use(cors(corsOptions))

app.get("/api", (req, res) =>{
    res.json({message: "Prueba de que el backend funciona"}); 
});

app.listen(8080, () => {
    console.log("Server is started on port 8080");  
});