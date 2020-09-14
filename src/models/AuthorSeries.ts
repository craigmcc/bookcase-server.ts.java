// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { Author } from "./Author";
import { Series } from "./Series";

// External Modules ----------------------------------------------------------

import {Column, DataType, ForeignKey, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * <p>A <code>AuthorSeries</code> represents the many-to-many relationship
 * between a series and author(s) of that series.</p>
 */
@Table({
    tableName: "authorseries",
    validate: { } // TODO - class level validations
})
export class AuthorSeries extends AbstractModel<AuthorSeries> {

    @Column({
        allowNull: false,
        field: "authorid",
        type: new DataType.BIGINT
    })
    @ForeignKey(() => Author)
    authorId!: number;

    @Column({
        allowNull: false,
        field: "seriesid",
        type: new DataType.BIGINT
    })
    @ForeignKey(() => Series)
    seriesId!: number;

}
