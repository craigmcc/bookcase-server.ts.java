// Internal Modules ----------------------------------------------------------

import { Author, AuthorData } from "../../src/models/Author";
import { Library, LibraryData } from "../../src/models/Library";
import AuthorServices from "../../src/services/AuthorServices";
require("../../src/util/Database");

// const AuthorServices = require("../../src/services/AuthorServices");

// External Modules ----------------------------------------------------------

const chai = require("chai");
const expect = chai.expect;

// Test Data -----------------------------------------------------------------

const authorDataset: AuthorData[] = [
    new AuthorData("Barney", "Rubble", 0, null),
    new AuthorData("Wilma", "Rubble", 0, null),
    new AuthorData("Bam Bam", "Rubble", 0, null)
];

const libraryDataset: LibraryData[] = [
    new LibraryData("Test", null)
];

// Seeding Functions ---------------------------------------------------------

let createAuthor = async (library: Library, authorData: AuthorData) => {
    console.log("createAuthor.library is ", library);
//    let clone:AuthorData = Object.assign({}, authorData);
//    clone.libraryId = library.id;
    return Author.create(authorData);
}

let createLibrary = async (libraryData: LibraryData) => {
    return Library.create(libraryData);
}

// AuthorServices Tests ------------------------------------------------------

describe("AuthorServices Tests", () => {

    // Testing Hooks ---------------------------------------------------------

    before("#init", async () => {
        console.log("Environment is " + process.env.NODE_ENV);
        await Library.sync({
            force: true
        });
        await Author.sync({
            force: true
        })
    })

    beforeEach("#erase", async () => {
        await Author.destroy({
            cascade: true,
            truncate: true
        });
        await Library.destroy({
            cascade: true,
            truncate: true
        })
    })

    // Test Methods ----------------------------------------------------------

    describe("#all()", () => {

        context("all objects", () => {

            it("should find all objects", async () => {

                console.log("#all create library0 BEGIN");
                let library0  = await createLibrary(libraryDataset[0]);
                console.log("#all library0 is ", library0);
/*
                await createAuthor(library0, authorDataset[0]);
                await createAuthor(library0, authorDataset[1]);
                await createAuthor(library0, authorDataset[2]);
*/

                let results: Author[] = await AuthorServices.all();
                expect(results.length).to.equal(3);

            })
        });

        context("no objects", () => {

            it("should find no objects", async () => {

                let results: Author[] = await AuthorServices.all();
                expect(results.length).to.equal(0);

            })

        });

    });

});

