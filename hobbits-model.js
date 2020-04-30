module.exports = {
    insert
}

function insert(hobbit) {
    const [id] = await db("hobbits").insert(hobbit, "id")

    return db("hobbits")
        .where({ id })
        .first()
}