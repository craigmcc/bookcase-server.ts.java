// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "./AbstractModel";
import { Series } from "./Series";
import { SeriesAuthor } from "./SeriesAuthor";
import { Story } from "./Story";
import { StoryAuthor } from "./StoryAuthor";

// External Modules ----------------------------------------------------------

import { DataTypes } from "sequelize";
import { BelongsToMany, Column, Index, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

@Table({
    modelName: "author",
    tableName: "authors",
    validate: { } // TODO - class level validations
})
export class Author extends AbstractModel<Author> {

    @Column({
        type: new DataTypes.STRING,
        unique: true
    })
    @Index({ name: "ix_authors_name"})
    name!: string;

    @Column({
        type: new DataTypes.STRING,
        validate: { } // TODO - field level validations
    })
    notes?: string;

    @BelongsToMany(() => Series, () => SeriesAuthor)
    serieses?: Series[];

    @BelongsToMany(() => Story, () => StoryAuthor)
    stories?: Story[];

}
