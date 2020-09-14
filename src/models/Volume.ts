// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { Author } from "./Author";
import { AuthorVolume } from "./AuthorVolume";
import { Library } from "./Library";
import { Story } from "./Story";
import { VolumeStory } from "./VolumeStory";

// External Modules ----------------------------------------------------------

import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Table} from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * <p>A <code>Volume</code> is a physical or electronic manifestation of a
 * book, which might be written by one or more authors, and contain one or
 * more stories (possibly part of a series by the same authors, or else
 * a compilation into an anthology).</p>
 *
 * <p>In the real world, a volume might have a globally unique ISBN number
 * that can be used to cross reference this volume in other resources, such
 * as Google Books or Amazon's shopping system.</p>
 */
@Table({
    tableName: "volume",
    validate: { } // TODO - class level validations
})
export class Volume extends AbstractModel<Volume> {

    @BelongsToMany(() => Author, () => AuthorVolume)
    authors?: Author[];

    @Column({
        type: new DataType.STRING,
        validate: { } // TODO - field level validations
    })
    isbn?: string;

    @BelongsTo(() => Library)
    library?: Library;

    @Column({
        allowNull: false,
        field: "libraryid",
        type: new DataType.BIGINT,
        unique: "uniqueVolumeNameWithinLibrary",
        validate: { } // TODO - field level validations
    })
    @ForeignKey(() => Library)
    libraryId!: number;

    @Column({
        allowNull: false,
        type: new DataType.STRING,
        unique: "uniqueVolumeNameWithinLibrary"
    })
    name!: string;

    @Column({
        type: new DataType.STRING,
        validate: { } // TODO - field level validations
    })
    notes?: string;

    @BelongsToMany(() => Story, () => VolumeStory)
    stories?: Story[];

}
