import { Request, Response } from "express";
import { VhorarioDocente } from "../entities/VhorarioDocente";
import {
 Ihoradocente
} from "../Interfaces/IVhorarioDocente";
import CountriesService from "../services/countries.services";

class CountriesController{

public async getHorarioDocente  (req: Request, res: Response) {
  try {
    const service = new CountriesService();
    const result=await service.getServiceVhorarioDocente()
    return res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};


}

export default CountriesController;