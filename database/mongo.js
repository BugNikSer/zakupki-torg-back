const { MongoClient } = require('mongodb');

const mongoClient = new MongoClient('mongodb://localhost:27017');

const queryCollection = async (name, filters) => {
    await mongoClient.connect();
    const collection = mongoClient.db('ZakupkaTorg').collection(name);
    const data = await collection.find(filters).toArray();
    return data;
};

const getCollection = (collection, filters = {}) => {
    return queryCollection(collection, filters)
        .then((data) => data)
        .catch((e) => e)
        .finally(() => mongoClient.close());
};

module.exports = getCollection;
