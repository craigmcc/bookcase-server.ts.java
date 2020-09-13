// Internal Modules ----------------------------------------------------------

// const db = requrie("./src/models/index")

// External Modules ----------------------------------------------------------

const bodyParser = require("body-parser")
const cors = require("cors")
import express from "express";

// Configuration Parameters --------------------------------------------------

let corsOptions = {
    origin: "*"
}
let PORT = process.env.PORT || 8084;

// Configure Application -----------------------------------------------------

const app = express();
// app.set("json spaces", 2) // For pretty-printed JSON responses
app.use(bodyParser.json());
app.use(bodyParser.text({
    limit: "2mb",
    type: "text/csv"
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.send("Hello from Bookcase Server!")
})

// TODO - require("./src/endpoints/FooEndpoints")(app);

// Start Server --------------------------------------------------------------

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
