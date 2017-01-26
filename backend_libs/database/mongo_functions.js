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
        },
        addNewUser({name, email}) {
             return mPool.collection("users").
                insertOne({
                    "name": name, 
                    "email": email
                }, function(err, newUser) {
                    return newUser;
                });
        }
    };
};