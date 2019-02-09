import { MongoRepository } from "./mongo-repository";
import { MongoWhereParams } from "mongo-item";
import { Topic, TopicRepository, RepositoryAccessOptions, TopicsListParams } from "@entipic/domain";

export class MongoTopicRepository extends MongoRepository<Topic>
    implements TopicRepository {

    topicBySlug(slug: string, _options?: RepositoryAccessOptions<Topic>): Promise<Topic> {
        return this.model.findOne({
            where: { slug },
        });
    }

    popularTopics(params: TopicsListParams, options?: RepositoryAccessOptions<Topic>): Promise<Topic[]> {
        options = options || {};

        const where: MongoWhereParams = {};

        return this.model.find({
            where,
            limit: params.limit,
            sort: ['-popularity'],
        });
    }

    latestTopics(params: TopicsListParams, options?: RepositoryAccessOptions<Topic>): Promise<Topic[]> {
        options = options || {};

        const where: MongoWhereParams = {};

        return this.model.find({
            where,
            limit: params.limit,
            sort: ['-createdAt'],
        });
    }
}
