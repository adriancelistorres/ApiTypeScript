import {DataSource} from "typeorm"
import { Usuario } from "../entities/Usuario"

import {VhorarioDocente} from "../entities/VhorarioDocente"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "feyalegria",
    // synchronize: true,
    logging: false,
    entities: [VhorarioDocente, Usuario],
    subscribers: [],
    migrations: [],
})

