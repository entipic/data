import { Db } from "mongodb";
import { MongoItem } from "mongo-item";
import { Picture } from "@entipic/domain";

export class MongoPicture extends MongoItem<Picture> {
  constructor(db: Db, tableSuffix: string) {
    super(db, `entipic_pictures_${tableSuffix}`);
  }
}
