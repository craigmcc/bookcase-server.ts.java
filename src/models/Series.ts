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

/**
 * <p>A <code>Series</code> is a set of <code>Story</code> objects representing
 * stories out of the same fictional universe.  Such stories are ordered by an
 * <code>ordinal</code> field on the <code>SeriesStory</code> model that defines
 * the many-to-many relationship (although not common, an individual story might
 * be part of more than one series).</p>
 */
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
