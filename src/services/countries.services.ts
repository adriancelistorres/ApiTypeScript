import { VhorarioDocente } from "../entities/VhorarioDocente";
import { Ihoradocente,  } from "../Interfaces/IVhorarioDocente";

class VhorarioDocenteService {
  constructor() {}
 
  public async getServiceVhorarioDocente() {
    let respuesta: Ihoradocente[] = [];
    const countries = await VhorarioDocente.find();
    countries.map((c) => {
      let obj: Ihoradocente = { idhorario: c.idhorario, nombcurso: c.nombcurso,nomaula:c.nomaula, hora_inicio:c.hora_inicio,hora_fin:c.hora_fin };
      respuesta.push(obj);
    });
    return respuesta;
  }

 
}

export default VhorarioDocenteService;
