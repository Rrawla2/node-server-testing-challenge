const request = require("supertest")

const server = require("./server.js")

describe("server.js", () => {
    it("should set up the testing", () => {
        expect(process.env.DB_ENV).toBe("testing")
    })

    describe("GET /", () => {
        it("should return status 200: success", async () => {
            const res = await request(server).get("/")
            expect(res.status).toBe(200)
        })

        it("should return JSON type", async () => {
            const res = await request(server).get("/")
            expect(res.type).toBe("application/json")
        })

        it("should return a JSON object {api: 'running'}", async () => {
            const res = await request(server).get("/")
            expect(res.body).toEqual({ api: "running" })
        })
    })
})
