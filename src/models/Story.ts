// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "./AbstractModel";
import { Author } from "./Author";
import { Series } from "./Series";
import { SeriesStory } from "./SeriesStory";
import { StoryAuthor } from "./StoryAuthor";


// External Modules ----------------------------------------------------------

import { DataTypes } from "sequelize";
import { BelongsToMany, Column, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

@Table({
    modelName: "story",
    tableName: "stories",
    validate: { } // TODO - class level validations
})
export class Story extends AbstractModel<Story> {

    @BelongsToMany(() => Author, () => StoryAuthor)
    authors?: Author[];

    @Column({
        type: new DataTypes.STRING,
        validate: { } // TODO - field level validations
    })
    name!: string

    @Column({
        type: new DataTypes.STRING,
        validate: { } // TODO - field level validations
    })
    notes?: string

    @BelongsToMany(() => Series, () => SeriesStory)
    serieses?: Series[];

}