const {ObjectID} = require("mongodb");
module.exports = (mPool) => {
    return {
        getUserValues(user) {
            let mongoId = new ObjectID(user);
            return mPool
                .collection("users")
                .find({"_id": {$in: [mongoId]}})
                .toArray()
                .then((result) => {
                    return result;
                });
        }
    };
};