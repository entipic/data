import { MongoRepository } from "./mongo-repository";
import { Picture, PictureRepository } from "@entipic/domain";

export class MongoPictureRepository extends MongoRepository<Picture>
    implements PictureRepository {
}
