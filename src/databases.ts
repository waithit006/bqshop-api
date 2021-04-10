import { createConnection, Connection } from 'typeorm'
import config from 'config'

export const connectionDB = createConnection({
    type: 'mysql',
    host: config.get("database.host") as string,
    port: config.get("database.port") as number,
    username: config.get("database.username") as string,
    password: config.get("database.password") as string,
    database: config.get("database.database") as string,
    synchronize: true,
    logging: false,
    entities: [
        "src/entity/**/*.ts"
    ],
})