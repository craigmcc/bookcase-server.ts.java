// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { Series } from "./Series";
import { Story } from "./Story";

// External Modules ----------------------------------------------------------

import { Column, DataType, ForeignKey, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * <p>A <code>SeriesStory</code> represents the many-to-many relationship
 * between a series and the stories that make it up.  It also includes an
 * <code>ordinal</code> field that defines where this particular story falls
 * in the particular series.</p>
 */
@Table({
//    modelName: "seriesstory",
    tableName: "seriesstory",
    validate: { } // TODO - class level validations
})
export class SeriesStory extends AbstractModel<SeriesStory> {

    @Column({
        allowNull: false,
        type: new DataType.SMALLINT
    })
    ordinal!: number;

    @Column({
        allowNull: false,
        type: new DataType.BIGINT
    })
    @ForeignKey(() => Series)
    seriesId!: number;

    @Column({
        allowNull: false,
        type: new DataType.BIGINT
    })
    @ForeignKey(() => Story)
    storyId!: number;

}
