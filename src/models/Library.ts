// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { Author } from "./Author";
import { Series } from "./Series";
import { Volume } from "./Volume";

// External Modules ----------------------------------------------------------

import { Column, DataType, HasMany, Table } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * <p>A <code>Library</code> is a unique collection of <code>Author</code>,
 * <code>Series</code>, and <code>Volume</code> instances.  They support an
 * independent set of test data, as well as potential use of the application
 * by multiple users with access to only their own sets of information.</p>
 */
@Table({
    tableName: "library",
    validate: { } // TODO - class level validations
})
export class Library extends AbstractModel<Library> {

    @HasMany(() => Author)
    authors?: Author[];

    @Column({
        allowNull: false,
        field: "name",
        type: new DataType.STRING,
        unique: "uniqueLibraryName",
        validate: { } // TODO - field level validations
    })
    name!: string;

    @Column({
        type: new DataType.STRING,
        validate: { } // TODO - field level validations
    })
    notes?: string;

    @HasMany(() => Series)
    serieses?: Series[];

    @HasMany(() => Volume)
    volumes?: Volume[];

}

export class LibraryData {

    constructor(name: string, notes: string | null) {
        this.name = name;
        this.notes = notes;
    }

    name: string;
    notes: string | null;

}
