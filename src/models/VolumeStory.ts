// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { Story } from "./Story";
import { Volume } from "./Volume";

// External Modules ----------------------------------------------------------

import {Column, DataType, ForeignKey, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * A <code>VolumeStory</code> represents the many-to-many relationship between
 * an volume and a story.</p>
 *
 * <p>Why would this ever happen in real life?  Because you might purchase
 * a standalone volume, and also an anthology that includes the same story.</p>
 */
@Table({
    tableName: "volumestory",
    validate: { } // TODO - class level validations
})
export class VolumeStory extends AbstractModel<VolumeStory> {

    @Column({
        allowNull: false,
        field: "storyid",
        type: new DataType.BIGINT
    })
    @ForeignKey(() => Story)
    storyId!: number;

    @Column({
        allowNull: false,
        field: "volumeid",
        type: new DataType.BIGINT
    })
    @ForeignKey(() => Volume)
    volumeId!: number;

}
