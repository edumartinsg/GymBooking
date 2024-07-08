import { GymsRepository } from "./../../repositories/gyms-repository"
import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository"
import { GetUserMetricsUseCase } from "../get-user-metrics"
import { PrismaGymsRepository } from "../../repositories/prisma/prisma-gyms-repository"
import { FetchNearbyGymsUseCase } from "../fetch-nearby-gyms"

export function makeFetchNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new FetchNearbyGymsUseCase(gymsRepository)

  return useCase
}
