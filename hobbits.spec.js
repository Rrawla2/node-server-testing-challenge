const db = require("./data/db-config.js")

const Hobbits = require("./hobbits-model.js")

beforeEach(async () => {
    await db("hobbits").truncate()
})

describe("hobbits model", () => {
    describe("insert()", () => {
        it("should insert the hobbit into the database", async () => {
            await Hobbits.insert({ name: "Pippin" })
            await Hobbits.insert({ name: "Frodo" })
        })

        const hobbits = await db("hobbits")

        expect(hobbits).toHaveLength(2)
    })
})