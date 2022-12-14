import { Request, Response } from "express";
import InasistenciaService from "../services/inasistencia.service";

class InasistenciaController {
    constructor() {}
  
    public async InasistenciaDocente(req: Request, res: Response) {
      try {
        const inasis = req.body;
        const service = new InasistenciaService();
        const result = await service.inasistencia(inasis.iddocente, inasis.observacion);
        // console.log("LOG RESULT", result);
        return res.json(result);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message });
        }
      }
    }
  }

  export default InasistenciaController;
