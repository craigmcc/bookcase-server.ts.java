// Internal Modules ----------------------------------------------------------

import { Author } from "../models/Author";
import AuthorServices from "../services/AuthorServices";
import { BadRequest, NotFound, NotUnique } from "../util/HttpErrors";

// External Modules ----------------------------------------------------------

import { Request, Response, Router } from "express";

// Public Objects ------------------------------------------------------------

export const AuthorRouters = () => Router()

    // Standard CRUD Endpoints -----------------------------------------------

    // GET / - Find all Authors
    .get("/", async (req: Request, res: Response) => {
        console.info("AuthorRouters.all() BEGIN");
        try {
            res.send(await AuthorServices.all());
        } catch (err) {
            console.error("AuthorRouters.all() error: ", err);
            res.status(500).send(err.message);
        }
    })

    // GET /:authorId - Find Author by ID
    .get("/:authorId", async (req: Request, res: Response) => {
        console.info(`AuthorRouters.find(${req.params.authorId}) BEGIN`);
        try {
            res.send(await AuthorServices.find
                (parseInt(req.params.authorId, 10)));
        } catch (err) {
            if (err instanceof NotFound) {
                res.status(404).send(err.message);
            } else {
                console.error("AuthorRouters.find(authorId) error: ", err);
                res.status(500).send(err.message);
            }
        }
    })

;
