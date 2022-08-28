import "reflect-metadata";
import { DataSource } from "typeorm";
import {Contact} from "./entity/Contact";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgresql",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Contact],
    migrations: [],
    subscribers: []
})


