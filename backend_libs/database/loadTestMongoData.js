const {MongoClient} = require("mongodb");
const assert = require("assert");
const {nodeEnv} = require("../lib/util");
const mongoConfig = require("../config/mongo")[nodeEnv];

MongoClient.connect(mongoConfig.url, (err, db) => {
    assert.equal(null, err);
    db
        .collection("users")
        .insert({
            name: "ryan",
            location: "Brisbane AU",
            imageUrl: "",
            howFar: 20,
            Games: [
                "#pingpong", "#football"
            ],
            currentGame: "#pingpong",
            when: 10.5,
            friends: [],
        })
        .then((response) => {
            db.close();
        });
});