const {ObjectID} = require("mongodb");
module.exports = (mPool) => {
    return {
        getUserValues(user) {
            let mongoId = new ObjectID(user);
            return mPool
                .collection("users")
                .findOne({"_id": mongoId})
                .then((result) => result);
        },
        getUsersValues(ids) {
            return mPool.collection("users").
            find({"_id": {$in: ids}})
            .toArray()
            .then( (result) => result );
        }
    };
};