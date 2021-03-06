// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { Author } from "./Author";
import { Story } from "./Story";

// External Modules ----------------------------------------------------------

import {Column, DataType, ForeignKey, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * A <code>AuthorStory</code> represents the many-to-many relationship between
 * an author and a story.</p>
 */
@Table({
    tableName: "authorstory",
    validate: { } // TODO - class level validations
})
export class AuthorStory extends AbstractModel<AuthorStory> {

    @Column({
        allowNull: false,
        field: "authorid",
        type: new DataType.BIGINT
    })
    @ForeignKey(() => Author)
    authorId!: number;

    @Column({
        allowNull: false,
        field: "storyid",
        type: new DataType.BIGINT
    })
    @ForeignKey(() => Story)
    storyId!: number;

}
