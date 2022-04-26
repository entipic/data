import {
  PictureRepository,
  TopicRepository,
  UniqueNameRepository,
  UnknownNameRepository,
  PictureValidator,
  TopicValidator,
  UniqueNameValidator,
  UnknownNameValidator
} from "@entipic/domain";
import { MongoPictureRepository } from "./mongo/mongo-picture-repository";
import { MongoPicture } from "./mongo/mongo-picture";
import { MongoTopicRepository } from "./mongo/mongo-topic-repository";
import { MongoTopic } from "./mongo/mongo-topic";
import { MongoUniqueNameRepository } from "./mongo/mongo-unique-name-repository";
import { MongoUniqueName } from "./mongo/mongo-unique-name";
import { MongoUnknownNameRepository } from "./mongo/mongo-unknown-name-repository";
import { MongoUnknownName } from "./mongo/mongo-unknown-name";

export class PictureRepositoryBuilder {
  static build(db: any, tableSuffix: string = "v1"): PictureRepository {
    return new MongoPictureRepository(
      new MongoPicture(db, tableSuffix),
      new PictureValidator()
    );
  }
}

export class TopicRepositoryBuilder {
  static build(db: any, tableSuffix: string = "v1"): TopicRepository {
    return new MongoTopicRepository(
      new MongoTopic(db, tableSuffix),
      new TopicValidator()
    );
  }
}

export class UniqueNameRepositoryBuilder {
  static build(db: any, tableSuffix: string = "v1"): UniqueNameRepository {
    return new MongoUniqueNameRepository(
      new MongoUniqueName(db, tableSuffix),
      new UniqueNameValidator()
    );
  }
}

export class UnknownNameRepositoryBuilder {
  static build(db: any, tableSuffix: string = "v1"): UnknownNameRepository {
    return new MongoUnknownNameRepository(
      new MongoUnknownName(db, tableSuffix),
      new UnknownNameValidator()
    );
  }
}
