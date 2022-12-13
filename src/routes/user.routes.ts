import { Router } from "express";
import LoginController from "../controllers/login.controller";
import vasistenciacontroller from "../controllers/vasistencia.controller";
import vhorariocontroller from "../controllers/vhorariodocente.controller";
import vinasistenciacontroller from "../controllers/vinasistencia.controller copy";

const _HorarioController = new vhorariocontroller();
const _loginController  = new LoginController();
const _AsistenciaController = new vasistenciacontroller();
const _InasistenciaController = new vinasistenciacontroller();

const router = Router();

router.get("/vhorariodocente", _HorarioController.getHorarioDocente);
router.get("/vasistencia", _AsistenciaController.getAsistencia);
router.get("/vinasistencia", _InasistenciaController.getInasistencia);
router.post("/login", _loginController.loginUser);

export default router;
