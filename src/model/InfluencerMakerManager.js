import minimongo from "minimongo";

export default function InfluencerMakerManager(dbName = "IMMDB") {
  const IndexedDb = minimongo.IndexedDb;

  // The public instance that we will return
  const imm = {};

  imm.getIdeas = function (query = {}) {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          db.addCollection(
            "ideas",
            function () {
              db.ideas.find(query).fetch(resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };

  imm.createIdea = function (newIdea) {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          db.addCollection(
            "ideas",
            function () {
              db.ideas.upsert(newIdea,  resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };

  imm.removeIdea = function (oldIdea) {
    return new Promise((resolve, reject) => {
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          db.addCollection(
            "ideas",
            function () {
              db.ideas.remove(oldIdea, resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };


  return imm;
}

