// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "./AbstractModel";
import { Author } from "./Author";
import { Series } from "./Series";

// External Modules ----------------------------------------------------------

import { DataTypes } from "sequelize";
import {Column, ForeignKey, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

@Table({
    modelName: "seriesauthor",
    tableName: "seriesauthors",
    validate: { } // TODO - class level validations
})
export class SeriesAuthor extends AbstractModel<SeriesAuthor> {

    @Column({
        type: new DataTypes.BIGINT
    })
    @ForeignKey(() => Author)
    authorId!: number;

    @Column({
        type: new DataTypes.BIGINT
    })
    @ForeignKey(() => Series)
    seriesId!: number;

}
