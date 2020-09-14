// WARNING!!! Trying with sequelize 6.3.5 causes an error during startup:
//   sequelize-typescript TypeError: Cannot read property 'get QueryInterface' of undefined
// Temporarily downgraded to 5.22.3 as per advice on Stack Overflow, but yuck.

// Internal Modules ----------------------------------------------------------

import { Author } from "../models/Author";
import { AuthorSeries } from "../models/AuthorSeries";
import { AuthorStory } from "../models/AuthorStory";
import { Series } from "../models/Series";
import { SeriesStory } from "../models/SeriesStory";
import { Story } from "../models/Story";

// External Modules ----------------------------------------------------------

import { Sequelize } from "sequelize-typescript";

// Configure Database Interface ----------------------------------------------

const dbConfig = {
    HOST: "localhost",
    USER: "bookcase",
    PASSWORD: "bookcase",
    DB: "bookcase",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

/*
const models: string[] = [
    "../models/Author.ts",
    "../models/AuthorSeries.ts",
    "../models/AuthorStory.ts",
    "../models/Series.ts",
    "../models/SeriesStory.ts",
    "../models/Story.ts"
];
*/

const nodeEnv = process.env.NODE_ENV || "production";

export const sequelize =
    ((nodeEnv === "development") || (nodeEnv === "production"))
    ? new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: "postgres",
//        logging: console.log,
        logging: false,
//        models: models,
        pool: {
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
            max: dbConfig.pool.max,
            min: dbConfig.pool.min
        }
    })
    : new Sequelize('database', 'username', 'password', {
        dialect: 'sqlite',
//    logging: console.log,
        logging: false,
//        models: models,
        storage: './test/database.sqlite'
    })
;

sequelize.addModels([
    Author,
    AuthorSeries,
    AuthorStory,
    Series,
    SeriesStory,
    Story
]);

// console.log("BEFORE: ", sequelize);

//sequelize.sync();
sequelize.sync({
    force: true
});

// console.log("AFTER:  ", sequelize);
