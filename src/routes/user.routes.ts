import { Router } from "express";
import LoginController from "../controllers/login.controller";
import vhorariocontroller from "../controllers/vhorariodocente.controller";

const controller = new vhorariocontroller();
const _loginController  = new LoginController();

const router = Router();

router.get("/vhorariodocente", controller.getHorarioDocente);
// router.get('/country/:id',countriescontroller.getOneCountry)
// router.put('/countries/:id',updateCountries)
// router.delete('/countries/:id',deleteCountries)

router.post("/login", _loginController.loginUser);

export default router;
