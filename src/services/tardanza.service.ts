import { AppDataSource } from "../databases/db";
import { Asistencia } from "../entities/Asistencia";

class TardanzaService {
    constructor() {}
  
    public async tardanza(iddocente: number, observacion: string) {
      console.log("LOGservice", iddocente, observacion);
      observacion="tardanza"
      try {
        const data = await AppDataSource.createQueryBuilder()
          .select("asis")
          .from(Asistencia, "asis")
          .where("asis.iddocente = :iddocente", { iddocente })
          .andWhere("asis.observacion = :observacion", { observacion })
          .getOne();
        // console.log("LOG1", data);
        return data;
      } catch (error) {
        if (error instanceof Error) {
          return Promise.reject(" does not exist ");
        
      }
    }
    }
  }

export default TardanzaService
  