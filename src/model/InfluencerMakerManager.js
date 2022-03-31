import minimongo from "minimongo";

const IndexedDb = minimongo.IndexedDb;

function InfluencerMakerManager(_dbName = "InfluencerMakerDB") {
  const imm = {};

  const dbName = _dbName;

  /**
   * Query the database for ideas
   * @param  {Object} query   a mongo query
   * @param  {Object} options query options see minimongo
   */
  imm.getIdeas = (query = {}, options = {}) => {
    return new Promise((resolve, reject) => {
      // Create IndexedDb
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          // Add a collection to the database
          db.addCollection(
            "ideas",
            function () {
              db.ideas.find(query, options).fetch(resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };

  imm.createIdea = (idea) => {
    return new Promise((resolve, reject) => {
      // Create IndexedDb
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          // Add a collection to the database
          db.addCollection(
            "ideas",
            function () {
              db.ideas.upsert(idea, resolve, reject);
            },
            reject
          );
        },
        reject
      );
    });
  };

  imm.removeIdea = (idea) => {
    return new Promise((resolve, reject) => {
      // Create IndexedDb
      const db = new IndexedDb(
        { namespace: dbName },
        function () {
          // Add a collection to the database
          db.addCollection(
            "ideas",
            function () {
              db.ideas.remove(idea, resolve, reject);
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

export default InfluencerMakerManager;
