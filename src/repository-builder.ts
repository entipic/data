import { IEntityValidator, PictureRepository, Picture, Topic, TopicRepository, UniqueName, UniqueNameRepository, UnknownName, UnknownNameRepository } from "@entipic/domain";
import { MongoPictureRepository } from "./mongo/mongo-picture-repository";
import { MongoPicture } from "./mongo/mongo-picture";
import { MongoTopicRepository } from "./mongo/mongo-topic-repository";
import { MongoTopic } from "./mongo/mongo-topic";
import { MongoUniqueNameRepository } from "./mongo/mongo-unique-name-repository";
import { MongoUniqueName } from "./mongo/mongo-unique-name";
import { MongoUnknownNameRepository } from "./mongo/mongo-unknown-name-repository";
import { MongoUnknownName } from "./mongo/mongo-unknown-name";


export class PictureRepositoryBuilder {
    static build(db: any, validator: IEntityValidator<Picture>, tableSuffix: string = 'v0'): PictureRepository {
        return new MongoPictureRepository(new MongoPicture(db, tableSuffix), validator);
    }
}

export class TopicRepositoryBuilder {
    static build(db: any, validator: IEntityValidator<Topic>, tableSuffix: string = 'v0'): TopicRepository {
        return new MongoTopicRepository(new MongoTopic(db, tableSuffix), validator);
    }
}

export class UniqueNameRepositoryBuilder {
    static build(db: any, validator: IEntityValidator<UniqueName>, tableSuffix: string = 'v0'): UniqueNameRepository {
        return new MongoUniqueNameRepository(new MongoUniqueName(db, tableSuffix), validator);
    }
}

export class UnknownNameRepositoryBuilder {
    static build(db: any, validator: IEntityValidator<UnknownName>, tableSuffix: string = 'v0'): UnknownNameRepository {
        return new MongoUnknownNameRepository(new MongoUnknownName(db, tableSuffix), validator);
    }
}
