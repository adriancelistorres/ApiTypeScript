import { Router } from "express";
import vhorariocontroller from "../controllers/vhorariodocente.controller";



const controller = new vhorariocontroller();

const router = Router();


router.get("/vhorariodocente", controller.getHorarioDocente);
// router.get('/country/:id',countriescontroller.getOneCountry)
// router.post("/countries", countriescontroller.createCountries);
// router.put('/countries/:id',updateCountries)
// router.delete('/countries/:id',deleteCountries)



export default router;
