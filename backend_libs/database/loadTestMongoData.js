// @flow
const {MongoClient} = require("mongodb");
const assert = require("assert");
const {nodeEnv} = require("../config/util");
const mongoConfig = require("../config/main_config")[nodeEnv];

// mock mongodb insertion for sample data
MongoClient.connect(mongoConfig.mongoURL, (err, db) => {
    assert.equal(null, err);
    db
        .collection("users")
        .insertMany([
             {
                name: "pouya",
                email: "ampbj@yahoo.com",
                location: "Brisbane AU",
                imageUrl: "",
                howFar: 20,
                games: [
                    "#pingpong", "#football"
                ],
                currentGame: "#pingpong",
                when: 10.5
            }, {
                name: "homa",
                email: "ampbj@yahoo.com",
                location: "Brisbane AU",
                imageUrl: "",
                howFar: 20,
                games: [
                    "#pingpong", "#football"
                ],
                currentGame: "#pingpong",
                when: 10.5
            }
        ])
        .then((response) => {
            db.collection("users").insert({
                name: "ryan",
                email: "ampbj@yahoo.com",
                location: "Brisbane AU",
                imageUrl: "",
                howFar: 20,
                games: [
                    "#pingpong", "#football"
                ],
                currentGame: "#pingpong",
                when: 10.5,
                friends: [
                    {
                        id: response.ops[0]._id
                    }, {
                        id: response.ops[1]._id
                    }
                ]
            }).then((response) =>{
                db.close();
            });
        });
});