// Internal Modules ----------------------------------------------------------

import { AbstractModel } from "../abstracts/AbstractModel";
import { AuthorSeries } from "./AuthorSeries";
import { AuthorStory } from "./AuthorStory";
import { Library } from "./Library";
import { Series } from "./Series";
import { Story } from "./Story";

// External Modules ----------------------------------------------------------

import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Table} from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * <p>An <code>Author</code> is the person that wrote all, or part, of a
 * <code>Series</code> or <code>Story</code>.  It is linked in many-to-many
 * relationships by @ManyToMany relationships.</p>
 */
@Table({
    tableName: "author",
    validate: { } // TODO - class level validations
})
export class Author extends AbstractModel<Author> {

    @Column({
        allowNull: false,
        field: "firstname",
        type: new DataType.STRING,
        unique: "uniqueAuthorNameWithinLibrary"
    })
    firstName!: string;

    @Column({
        allowNull: false,
        field: "lastname",
        type: new DataType.STRING,
        unique: "uniqueAuthorNameWithinLibrary"
    })
    lastName!: string;

    @BelongsTo(() => Library)
    library?: Library;

    @Column({
        allowNull: false,
        field: "libraryid",
        type: new DataType.BIGINT,
        unique: "uniqueAuthorNameWithinLibrary"
    })
    @ForeignKey(() => Library)
    libraryId!: number;

    @Column({
        type: new DataType.STRING,
        validate: { } // TODO - field level validations
    })
    notes?: string;

    @BelongsToMany(() => Series, () => AuthorSeries)
    serieses?: Series[];

    @BelongsToMany(() => Story, () => AuthorStory)
    stories?: Story[];

}

export class AuthorData {

    constructor(firstName: string, lastName: string, libraryId: number,
                notes: string | null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.libraryId = libraryId;
        this.notes = notes;
    }

    firstName: string;
    lastName: string;
    libraryId: number;
    notes: string | null;

}
