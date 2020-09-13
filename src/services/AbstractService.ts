// Internal Modules ----------------------------------------------------------

// External Modules ----------------------------------------------------------

import { Model } from "sequelize-typescript";

// Public Classes ------------------------------------------------------------

/**
 * <p>Define the standard CRUD operations that every service implementation
 * should support.</p>
 */
// TODO - declare error responses?
export abstract class AbstractService<M extends Model> {

    /**
     * <p>Return all models of the specified type.</p>
     */
    public abstract all(): M[];

    /**
     * <p>Return the model with the specified id.</p>
     *
     * @param id ID of the model to find
     */
    public abstract find(id:number): M;

    /**
     * <p>Insert a new model instance, and return it with populated
     * standard values.</p>
     *
     * @param model Model to be inserted
     */
    public abstract insert(model:M): M;

    /**
     * <p>Remove the model with the specified id, and return the
     * model that was removed.</p>
     *
     * @param id ID of the model to remove
     */
    public abstract remove(id:number): M;

    /**
     * <p>Update the model with the specified id and new data,
     * and return it with populated standard values.</p>
     *
     * @param id ID of the model to update
     * @param model Model containing updated values
     */
    public abstract update(id:number, model:M): M

}
