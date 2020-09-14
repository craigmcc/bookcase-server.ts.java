// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { Author } from "./Author";
import { AuthorStory } from "./AuthorStory";
import { Series } from "./Series";
import { SeriesStory } from "./SeriesStory";


// External Modules ----------------------------------------------------------

import { BelongsToMany, Column, DataType, Table } from "sequelize-typescript";

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
    tableName: "story",
    validate: { } // TODO - class level validations
})
export class Story extends AbstractModel<Story> {

    @BelongsToMany(() => Author, () => AuthorStory)
    authors?: Author[];

    @Column({
        allowNull: false,
        type: new DataType.STRING,
        validate: { } // TODO - field level validations
    })
    name!: string

    @Column({
        type: new DataType.STRING,
        validate: { } // TODO - field level validations
    })
    notes?: string

    @BelongsToMany(() => Series, () => SeriesStory)
    serieses?: Series[];

}