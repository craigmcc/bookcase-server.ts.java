// Internal Modules ----------------------------------------------------------

// External Modules ----------------------------------------------------------

import { DataTypes } from "sequelize";
import {Column, CreatedAt, Model, Table, UpdatedAt}
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
        primaryKey: true,
        type: new DataTypes.BIGINT,
    })
    readonly id!: number;

//    @Column
    @CreatedAt
    readonly published!: DataTypes.DateDataType;

//    @Column
    @UpdatedAt
    readonly  updated!: DataTypes.DateDataType;

}
