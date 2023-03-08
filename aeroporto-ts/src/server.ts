import express from "express";
import AppDataSource from "./config/Database";
import { AeroportoController } from "./controller/aeroporto-controller";
import { EmpresaAereaController } from "./controller/empresaAerea-controller";

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado com sucesso ao banco");
    const app = express();
    app.use(express.json());

    app.post("/aeroporto", new AeroportoController().create);
    app.get("/aeroporto/:codigo", new AeroportoController().get);
    app.put("/aeroporto/:codigo", new AeroportoController().update);
    app.delete("/aeroporto/:codigo", new AeroportoController().delete);

    app.post("/empresa", new EmpresaAereaController().create);
    app.get("/empresa/:codigo", new EmpresaAereaController().get);
    app.put("/empresa/:codigo", new EmpresaAereaController().update);
    app.delete("/empresa/:codigo", new EmpresaAereaController().delete);

    app.listen(8007);
  })
  .catch((e) => console.log("Erro ao conectar ao banco: ", e));
