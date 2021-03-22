import * as dotenv from "dotenv";

const envFound = dotenv.config();

if (!envFound) {
    throw new Error("Cannot find a .env file!");
}

export default {
    mysql: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
    },
    app: {
        port: parseInt(process.env.PORT, 10)
    }
}
