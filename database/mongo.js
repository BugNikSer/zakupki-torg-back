const { MongoClient } = require('mongodb');

const mongoClient = new MongoClient('mongodb://localhost:27017');

const connectToCollection = (name) => {
    return mongoClient
        .connect()
        .then(() => {
            return mongoClient.db('ZakupkaTorg').collection(name);
        })
        .catch((e) => {
            throw e;
        });
};

const queryCollection = (name, filters) => {
    return connectToCollection(name)
        .then((collection) => {
            return collection
                .find(filters)
                .toArray()
                .then((data) => data)
                .catch((e) => {
                    throw e;
                });
        })
        .catch((e) => {
            throw e;
        });
};

const queryJoinCollection = (name, aggregation) => {
    return connectToCollection(name)
        .then((collection) => {
            return collection
                .aggregate(aggregation)
                .toArray()
                .then((data) => data)
                .catch((e) => {
                    throw e;
                });
        })
        .catch((e) => {
            throw e;
        });
};

const getCollection = (collection, filters = {}) => {
    return queryCollection(collection, filters)
        .then((data) => data)
        .catch((e) => {
            throw e;
        })
        .finally(() => mongoClient.close());
};

const joinCollection = (collection, filters = {}, join = {}) => {
    return queryJoinCollection(collection, filters, join)
        .then((data) => data)
        .catch((e) => {
            throw e;
        });
};

module.exports = { getCollection, joinCollection };
