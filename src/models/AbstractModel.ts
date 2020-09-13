// Internal Modules ----------------------------------------------------------

// External Modules ----------------------------------------------------------

import { DataTypes } from "sequelize";
import {Column, CreatedAt, Model, Table, UpdatedAt}
    from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

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
