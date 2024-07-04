import { authenticate } from "@/http/controllers/authenticate"
import { register } from "./controllers/register"
import { profile } from "@/http/controllers/profile"
import { verifyJwt } from "@/http/middlewares/verify-jwt"
import { FastifyInstance } from "fastify"

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", register)
  app.post("/sessions", authenticate)

  /** Authenticated */
  app.get("/me", profile)
  app.get("/me", { onRequest: [verifyJwt] }, profile)
}
