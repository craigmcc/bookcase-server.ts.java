// Internal Modules ----------------------------------------------------------

// External Modules ----------------------------------------------------------

import {Column, CreatedAt, DataType, Model, Table, UpdatedAt}
    from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * <p>Define the fields that should be included in every Sequelize Model
 * implementation that subclasses this abstract base class.</p>
 */
@Table({
    timestamps: true,
    version: true
})
export abstract class AbstractModel<Model> extends Model {

    @Column({
        allowNull: false,
        primaryKey: true,
        type: new DataType.BIGINT
    })
    readonly id!: number;

    @Column({
        allowNull: false,
        type: new DataType.DATE
    })
    @CreatedAt
    readonly published!: Date;

    @Column({
        allowNull: false,
        type: new DataType.DATE
    })
    @UpdatedAt
    readonly updated!: Date;

}
