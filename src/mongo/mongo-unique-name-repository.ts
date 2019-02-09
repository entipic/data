import { MongoRepository } from "./mongo-repository";
import { UniqueName, UniqueNameRepository } from "@entipic/domain";

export class MongoUniqueNameRepository extends MongoRepository<UniqueName>
    implements UniqueNameRepository {
}
