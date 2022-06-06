const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;
const cors = require("cors");

const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient("mongodb://localhost:27017/");

let dbClient;

app.use(cors());

app.use(express.static(__dirname + "/public"));

mongoClient.connect(function (err, client) {
  if (err) return console.log(err);
  dbClient = client;
  app.locals.collection = client.db("ideasdb").collection("ideas");
  app.listen(3000, function () {
    console.log("Сервер ожидает подключения...");
  });
});

app.get("/api/myideas", function (req, res) {
  const collection = req.app.locals.collection;
  const query = req.query;
  console.log(query.isComplited);
  if (query.isComplited === "false") {
    collection.find({}).toArray(function (err, ideas) {
      if (err) return console.log(err);
      res.send(ideas.filter((e) => e.isComplited === false));
    });
  } else if (query.isComplited === "true") {
    collection.find({}).toArray(function (err, ideas) {
      if (err) return console.log(err);
      res.send(ideas.filter((e) => e.isComplited === true));
    });
  }
});

app.get("/api/myideas/achivments", function (req, res) {
  const collection = req.app.locals.collection;
  collection.find({}).toArray(function (err, ideas) {
    if (err) return console.log(err);

    let types = [];
    let result = {};
    ideas.filter((e) => e.isComplited === true).map((e) => types.push(e.type));
    [...new Set(types)].map((type) => {
      let ideaFilter = ideas.filter((elem) => elem.type === type);
      result[type] = ideaFilter.filter((e) => e.isComplited === true).length;
      console.log(ideaFilter);
    });

    res.send(result);
  });
});

app.get("/api/myideas/:key", function (req, res) {
  const key = req.params.key;
  const collection = req.app.locals.collection;
  collection.findOne({ key: key }, function (err, idea) {
    if (err) return console.log(err);

    console.log(idea);
    res.send(idea);
  });
});

app.post("/api/myideas", jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  const ideasKey = req.body.key;
  const ideasType = req.body.type;
  const ideasActivity = req.body.activity;
  const ideasIsComplited = req.body.isComplited;
  const idea = {
    type: ideasType,
    activity: ideasActivity,
    isComplited: false,
    key: ideasKey,
  };

  const collection = req.app.locals.collection;
  collection.insertOne(idea, function (err, result) {
    if (err) return console.log(err);
    res.send(idea);
  });
});

app.put("/api/myideas", jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  const ideasKey = req.body.key;
  const ideasType = req.body.type;
  const ideasActivity = req.body.activity;
  const ideasIsComplited = req.body.isComplited;
  const now = Date.now();
  const idea = {
    type: ideasType,
    activity: ideasActivity,
    isComplited: ideasIsComplited,
    key: ideasKey,
    date: now,
  };

  const collection = req.app.locals.collection;

  collection.updateOne(
    {
      key: idea.key,
    },
    {
      $set: {
        isComplited: idea.isComplited,
        date: idea.date,
      },
    },
    function (err, result) {
      if (err) return console.log(err);
      res.send(result);
    }
  );
});

app.delete("/api/myideas/:key", function (req, res) {
  console.log(req.params.key);
  const key = req.params.key;
  const collection = req.app.locals.collection;
  collection.findOneAndDelete({ key: key }, function (err, result) {
    if (err) return console.log(err);
    let idea = result.value;
    res.json(idea);
  });
});

// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});
