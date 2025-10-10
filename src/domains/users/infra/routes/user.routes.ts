import type { FastifyInstance } from "fastify"

import { createUser } from "../controllers/user.controller"

export async function usersRoutes(app: FastifyInstance) {
  app.post("/users", async (req, res) => {
    return res.send("Criação de usuario")
  })
  app.post("/", createUser)
}
