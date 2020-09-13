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

/**
 * <p>A <code>Story</code> is an individual tale (or short story).  It can
 * be standalone in a <code>Book</code>, or an individual component of a
 * <code>Book</code> that represents an anthology (or collection of part or
 * all of a <code>Series</code>).  Separately, a <code>Story</code> can be
 * part of a <code>Series</code>, using an <code>ordinal</code> field on the
 * many-to-many linkage via <code>SeriesStory</code>, to label the various
 * <code>Story</code> objects with where they exist in the overall tale told
 * by the series.</p>
 */
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