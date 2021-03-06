// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { Author } from "./Author";
import { AuthorSeries } from "./AuthorSeries";
import { Library } from "./Library";
import { SeriesStory } from "./SeriesStory";
import { Story } from "./Story";

// External Modules ----------------------------------------------------------

import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Table} from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * <p>A <code>Series</code> is a set of <code>Story</code> objects representing
 * stories out of the same fictional universe.  Such stories are ordered by an
 * <code>ordinal</code> field on the <code>SeriesStory</code> model that defines
 * the many-to-many relationship (although not common, an individual story might
 * be part of more than one series).</p>
 */
@Table({
    tableName: "series",
    validate: { } // TODO - class level validations
})
export class Series extends AbstractModel<Series> {

    @BelongsToMany(() => Author, () => AuthorSeries)
    authors?: Author[];

    @BelongsTo(() => Library)
    library?: Library;

    @Column({
        allowNull: false,
        field: "libraryid",
        type: new DataType.BIGINT,
        unique: "uniqueSeriesNameWithinLibrary"
    })
    @ForeignKey(() => Library)
    libraryId!: number;

    @Column({
        allowNull: false,
        type: new DataType.STRING,
        unique: "uniqueSeriesNameWithinLibrary"
    })
    name!: string;

    @Column({
        type: new DataType.STRING,
        validate: { } // TODO - field level validations
    })
    notes?: string;

    @BelongsToMany(() => Story, () => SeriesStory)
    stories?: Story[];

}
