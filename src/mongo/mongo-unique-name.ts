
import { Db } from 'mongodb';
import { MongoItem } from 'mongo-item';
import { UniqueName } from '@entipic/domain';

export class MongoUniqueName extends MongoItem<UniqueName> {
    constructor(db: Db, tableSuffix: string) {
        super(db, `entipic_uniquenames_${tableSuffix}`);
    }
}
