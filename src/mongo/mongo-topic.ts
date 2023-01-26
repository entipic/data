import { Db } from "mongodb";
import { MongoItem } from "mongo-item";
import { RepositoryUpdateData, Topic } from "@entipic/domain";

export class MongoTopic extends MongoItem<Topic> {
  constructor(db: Db, tableSuffix: string) {
    super(db, `entipic_topics_${tableSuffix}`);
  }

  override async createStorage() {
    await super.createStorage();

    await this.collection.createIndex({ createdAt: 1 });
    await this.collection.createIndex({ slug: 1 }, { unique: true });
  }

  protected override beforeCreate(data: Topic) {
    return super.beforeCreate(data);
  }

  protected override beforeUpdate(data: RepositoryUpdateData<Topic>) {
    // data.set = data.set || {};
    // data.set.updatedAt = data.set.updatedAt || unixTime();

    return super.beforeUpdate(data);
  }

  protected override convertFromMongoDoc(doc: any) {
    const item = super.convertFromMongoDoc(doc);

    return item;
  }
}
