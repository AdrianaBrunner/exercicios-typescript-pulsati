import express from "express";
import AppDataSource from "./config/database";
import { AutoresController } from "./controller/autores-controller";
import { EditorasController } from "./controller/editoras-controller";

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado com sucesso ao banco");
    const app = express();
    app.use(express.json());

    app.post("/autores", new AutoresController().create);
    app.get("/autores", new AutoresController().get);
    app.put("/autores/:codigo", new AutoresController().update);
    app.delete("/autores/:codigo", new AutoresController().delete);

    app.post("/editoras", new EditorasController().create);
    app.get("/editoras", new EditorasController().get);
    app.put("/editoras/:codigo", new EditorasController().update);
    app.delete("/editoras/:codigo", new EditorasController().delete);

    app.listen(8007);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));
