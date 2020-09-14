// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { Author } from "./Author";
import { Volume } from "./Volume";

// External Modules ----------------------------------------------------------

import {Column, DataType, ForeignKey, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * <p>A <code>AuthorVolume</code> represents the many-to-many relationship
 * between an <code>Author</code> and a <code>Volume</code> that is
 * written, or co-written, by that author.</p>
 */
@Table({
    tableName: "authorvolume",
    validate: { } // TODO - class level validations
})
export class AuthorVolume extends AbstractModel<AuthorVolume> {

    @Column({
        allowNull: false,
        field: "authorid",
        type: new DataType.BIGINT
    })
    @ForeignKey(() => Author)
    authorId!: number;

    @Column({
        allowNull: false,
        field: "volumeid",
        type: new DataType.BIGINT
    })
    @ForeignKey(() => Volume)
    volumeId!: number;

}
