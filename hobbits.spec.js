const db = require("./data/db-config.js")

const Hobbits = require("./hobbits-model.js")

describe("hobbits model", () => {
    describe("insert()", () => {
        beforeEach(async () => {
            await db("hobbits").truncate()
        })

        it("should insert the hobbit into the database", async () => {
            await Hobbits.insert({ name: "Merry" })
            await Hobbits.insert({ name: "Bilbo" })

            const hobbits = await db("hobbits")

            expect(hobbits).toHaveLength(2)
        })

        it("should insert the hobbit into the database", async () => {
            await Hobbits.insert({ name: "Pippin" })
            await Hobbits.insert({ name: "Frodo" })

            const hobbits = await db("hobbits")

            expect(hobbits).toHaveLength(5)
        })
    })
    describe("remove()", () => {
        it("should remove the hobbit from the database", async () => {
            await Hobbits.remove({ id: 1 })

            const hobbits = await db("hobbits")
            expect(hobbits).toHaveLength(2)
        })

        it("should remove the hobbit from the database", async () => {
            await Hobbits.remove({ id: 2 })

            const hobbits = await db("hobbits")
            expect(hobbits).toHaveLength(5)
        })
    })
})

