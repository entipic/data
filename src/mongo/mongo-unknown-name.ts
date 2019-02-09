
import { Db } from 'mongodb';
import { MongoItem } from 'mongo-item';
import { UnknownName } from '@entipic/domain';

export class MongoUnknownName extends MongoItem<UnknownName> {
    constructor(db: Db, tableSuffix: string) {
        super(db, `entipic_unknownnames_${tableSuffix}`);
    }
}
