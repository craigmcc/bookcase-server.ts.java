// Internal Modules ----------------------------------------------------------

import { AbstractServices } from "../abstracts/AbstractServices";
import { Author } from "../models/Author";
import { sequelize } from "../util/Database";
import { BadRequest, NotFound } from "../util/HttpErrors";

let fields: string[] = [
    "name",
    "notes",
];
let fieldsWithId: string[] = [
    ...fields,
    "id"
];

// External Modules ----------------------------------------------------------

import {FindOptions, ValidationError} from "sequelize";

// Public Classes ------------------------------------------------------------

/**
 * <p>Service methods for Author model objects.</p>
 */
class AuthorServices extends AbstractServices<Author> {

    // Standard CRUD Methods -------------------------------------------------

    public async all(): Promise<Author[]> {
//        console.info("AuthorServices.all() BEGIN");
        let options: FindOptions = {
            order: [ [ "lastName", "ASC" ], [ "firstName", "ASC" ] ]
        }
        return Author.findAll(options);
    }

    public async find(authorId: number): Promise<Author> {
        console.info(`AuthorServices.find(${authorId}) BEGIN`);
        let result: Author | null = await Author.findByPk(authorId);
        if (!result) {
            throw new NotFound(`id: Missing Author ${authorId}`);
        }
        return result;
    }

    public async insert(model: Author): Promise<Author> {
        let transaction;
        try {
            transaction = await sequelize.transaction();
            let result = await Author.create(model, {
                fields: fields,
                transaction: transaction
            });
            await transaction.commit();
            return result;
        } catch (err) {
            if (transaction) {
                await transaction.rollback();
            }
            throw err;
        }
    }

    public async remove(id: number): Promise<Author> {
        let result = await Author.findByPk(id);
        if (!result) {
            throw new NotFound(`id: Missing Author ${id}`);
        }
        let num = await Author.destroy({
            where: { id: id }
        });
        if (num !== 1) {
            throw new NotFound(`id: Cannot remove Author ${id}`);
        }
        return result;
    }

    public async update(id: number, model: Author): Promise<Author> {
        let transaction;
        try {
            transaction = await sequelize.transaction();
            model.id = id;
            let update = await Author.update(model, {
                fields: fieldsWithId,
                transaction: transaction,
                where: { id: id }
            })
            if (update[0] === 0) {
                throw new Error(`id: Missing Author ${id}`);
            }
            await transaction.commit();
            transaction = null;
            let result: Author | null = await Author.findByPk(id);
            if (result) {
                return result;
            } else {
                throw new NotFound(`id: Missing Author ${id} after update`);
            }
        } catch (err) {
            if (transaction) {
                await transaction.rollback();
            }
            if (err instanceof ValidationError) {
                throw new BadRequest(err.message);
            } else {
                throw err;
            }
        }
    }

    // Model Specific Methods ------------------------------------------------

}

export default new AuthorServices();
