import { MongoRepository } from "./mongo-repository";
import { UnknownNameRepository, UnknownName, RepositoryAccessOptions, UnknownNamesListParams } from "@entipic/domain";
import { MongoWhereParams } from "mongo-item";

export class MongoUnknownNameRepository extends MongoRepository<UnknownName>
    implements UnknownNameRepository {
        
    oldest(params: UnknownNamesListParams, options?: RepositoryAccessOptions<UnknownName>): Promise<UnknownName[]> {
        options = options || {};

        const where: MongoWhereParams = {};

        return this.model.find({
            where,
            limit: params.limit,
            sort: ['createdAt'],
        });
    }
}
