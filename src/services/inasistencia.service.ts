import { AppDataSource } from "../databases/db";
import { Asistencia } from "../entities/Asistencia";

class InasistenciaService {
    constructor() {}
  
    public async inasistencia(iddocente: number, observacion: string) {
      console.log("LOGservice", iddocente, observacion);
      observacion="inasistencia"
      try {
        const data = await AppDataSource.createQueryBuilder()
          .select("inasis")
          .from(Asistencia, "inasis")
          .where("inasis.iddocente = :iddocente", { iddocente })
          .andWhere("inasis.observacion = :observacion", { observacion })
          .getMany();
        // console.log("LOG1", data);
        return data;
      } catch (error) {
        if (error instanceof Error) {
          return Promise.reject(" does not exist ");
        
      }
    }
    }
  }

  export default InasistenciaService