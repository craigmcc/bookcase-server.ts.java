// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "./AbstractModel";
import { Author } from "./Author";
import { SeriesAuthor } from "./SeriesAuthor";
import { SeriesStory } from "./SeriesStory";
import { Story } from "./Story";

// External Modules ----------------------------------------------------------

import { DataTypes } from "sequelize";
import { BelongsToMany, Column, Index, Table} from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

@Table({
    modelName: "series",
    tableName: "serieses",
    validate: { } // TODO - class level validations
})
export class Series extends AbstractModel<Series> {

    @BelongsToMany(() => Author, () => SeriesAuthor)
    authors?: Author[];

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

    @BelongsToMany(() => Story, () => SeriesStory)
    stories?: Story[];

}
