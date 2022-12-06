import {DataSource} from "typeorm"

import {VhorarioDocente} from "../entities/VhorarioDocente"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "feyalegria",
    // synchronize: true,
    logging: true,
    entities: [VhorarioDocente],
    subscribers: [],
    migrations: [],
})

