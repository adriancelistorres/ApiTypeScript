import { AppDataSource } from "../databases/db";
import { Asistencia } from "../entities/Asistencia";
import { IAsistencia } from "../Interfaces/IAsistencia";

class AsistenciaService {
    constructor() {}
  
    public async asistencia(iddocente: number, observacion: string) {
      console.log("LOGservice", iddocente, observacion);
      observacion="asistencia"
      try {
        const data = await AppDataSource.createQueryBuilder()
          .select("asis")
          .from(Asistencia, "asis")
          .where("asis.iddocente = :iddocente", { iddocente })
          .andWhere("asis.observacion = :observacion", { observacion })
          .getMany();
        // console.log("LOG1", data);
        
        return data;
        
      } catch (error) {
        if (error instanceof Error) {
          return Promise.reject(" does not exist ");
        
      }
    }
    }

    public async createAsistencia(reqBody: IAsistencia) {
        const asisten = new Asistencia();
        asisten.idasistencia= reqBody.idasistencia;
        asisten.iddocente = reqBody.iddocente;
        asisten.observacion = reqBody.observacion;
        asisten.fh_asistencia = reqBody.fh_asistencia;
        asisten.estado = reqBody.estado;
        asisten.qr = reqBody.qr;
        asisten.porcod = reqBody.porcod;

        return await asisten.save();
      }
    
  }

  export default AsistenciaService