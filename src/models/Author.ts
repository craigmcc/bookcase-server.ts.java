// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { AuthorSeries } from "./AuthorSeries";
import { AuthorStory } from "./AuthorStory";
import { Series } from "./Series";
import { Story } from "./Story";

// External Modules ----------------------------------------------------------

import { DataTypes } from "sequelize";
import { BelongsToMany, Column, Index, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * <p>An <code>Author</code> is the person that wrote all, or part, of a
 * <code>Series</code> or <code>Story</code>.  It is linked in many-to-many
 * relationships by @ManyToMany relationships.</p>
 */
@Table({
//    modelName: "author",
    tableName: "author",
    validate: { } // TODO - class level validations
})
export class Author extends AbstractModel<Author> {

    @Column({
        allowNull: false,
        type: new DataTypes.STRING,
        unique: true
    })
    @Index({ name: "ix_author_name"})
    name!: string;

    @Column({
        type: new DataTypes.STRING,
        validate: { } // TODO - field level validations
    })
    notes?: string;

    @BelongsToMany(() => Series, () => AuthorSeries)
    serieses?: Series[];

    @BelongsToMany(() => Story, () => AuthorStory)
    stories?: Story[];

}
