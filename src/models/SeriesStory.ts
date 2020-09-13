// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "./AbstractModel";
import { Series } from "./Series";
import { Story } from "./Story";

// External Modules ----------------------------------------------------------

import { DataTypes } from "sequelize";
import {Column, ForeignKey, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

@Table({
    modelName: "seriesstory",
    tableName: "seriesstories",
    validate: { } // TODO - class level validations
})
export class SeriesStory extends AbstractModel<SeriesStory> {

    @Column({
        type: new DataTypes.SMALLINT
    })
    ordinal!: number;

    @Column({
        type: new DataTypes.BIGINT
    })
    @ForeignKey(() => Series)
    seriesId!: number;

    @Column({
        type: new DataTypes.BIGINT
    })
    @ForeignKey(() => Story)
    storyId!: number;

}
