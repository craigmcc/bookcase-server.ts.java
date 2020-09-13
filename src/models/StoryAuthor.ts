// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "./AbstractModel";
import { Author } from "./Author";
import { Story } from "./Story";

// External Modules ----------------------------------------------------------

import { DataTypes } from "sequelize";
import {Column, ForeignKey, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * A <code>StoryAuthor</code> represents the many-to-many relationship between
 * an author and a story.</p>
 */
@Table({
    modelName: "storyauthor",
    tableName: "storyauthors",
    validate: { } // TODO - class level validations
})
export class StoryAuthor extends AbstractModel<StoryAuthor> {

    @Column({
        type: new DataTypes.BIGINT
    })
    @ForeignKey(() => Author)
    authorId!: number;

    @Column({
        type: new DataTypes.BIGINT
    })
    @ForeignKey(() => Story)
    storyId!: number;

}
