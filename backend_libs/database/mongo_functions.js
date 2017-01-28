const {ObjectID} = require("mongodb");
module.exports = (mPool) => {
    return {
        // get data for one user no need for batching with data loader
        getUserValues(user) {
            let mongoId = new ObjectID(user);
            return mPool
                .collection("users")
                .findOne({"_id": mongoId})
                .then((result) => result);
        },
        // get data for many friends (users) dataloader used!
        getUsersValues(ids) {
            return mPool.collection("users").
            find({"_id": {$in: ids}})
            .toArray()
            .then( (result) => result );
        },
        // mutation for adding new user.
        addNewUser({name, email, location}) {
             return mPool.collection("users").
                insertOne({
                    "name": name, 
                    "email": email,
                    "location": location
                }).then((result) => result.ops[0]);
        }
    };
};