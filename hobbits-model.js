const db = require("./data/db-config.js")

module.exports = {
    insert,
    remove
}

async function insert(hobbit) {
    const [id] = await db("hobbits").insert(hobbit, "id")

    return db("hobbits")
        .where({ id })
        .first()
}

function remove(id) {
    return db("hobbits")
        .where({ id })
        .first()
        .del()
}
