// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { Author } from "./Author";
import { AuthorSeries } from "./AuthorSeries";
import { SeriesStory } from "./SeriesStory";
import { Story } from "./Story";

// External Modules ----------------------------------------------------------

import { BelongsToMany, Column, DataType, Index, Table} from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * <p>A <code>Series</code> is a set of <code>Story</code> objects representing
 * stories out of the same fictional universe.  Such stories are ordered by an
 * <code>ordinal</code> field on the <code>SeriesStory</code> model that defines
 * the many-to-many relationship (although not common, an individual story might
 * be part of more than one series).</p>
 */
@Table({
//    modelName: "series",
    tableName: "series",
    validate: { } // TODO - class level validations
})
export class Series extends AbstractModel<Series> {

    @BelongsToMany(() => Author, () => AuthorSeries)
    authors?: Author[];

    @Column({
        allowNull: false,
        type: new DataType.STRING,
        unique: true
    })
    @Index({ name: "ix_serieses_name"})
    name!: string;

    @Column({
        type: new DataType.STRING,
        validate: { } // TODO - field level validations
    })
    notes?: string;

    @BelongsToMany(() => Story, () => SeriesStory)
    stories?: Story[];

}
