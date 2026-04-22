import { envs } from "src/config/envs";
import { DataSource, DataSourceOptions } from "typeorm";
import { Incident } from "../entities/incident.entity";

export const dataSourceOptions : DataSourceOptions = {
    host: envs.DB_HOST,
          database: envs.DB_NAME,
          username: envs.DB_USER,
          password: envs.DB_PASSWORD,
          port: envs.DB_PORT,
          type: "postgres",
          entities: [Incident],
          synchronize: false,
          migrations:["dist/core/db/migrations/*"] // El lugar donde se encuentras mis migraciones PEEEERO en java script
};

export const dataSource = new DataSource(dataSourceOptions);