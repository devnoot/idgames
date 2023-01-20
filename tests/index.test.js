const { IdGamesArchiveAPI } = require("../dist/index");

const {
  about,
  dbPing,
  get,
  getContents,
  getDirs,
  getFiles,
  getParentDir,
  latestFiles,
  latestVotes,
  ping,
  search,
} = IdGamesArchiveAPI;

(async () => {
  const tests = {
    ping: false,
    dbPing: false,
    about: false,
    get: false,
    getParentDir: false,
    getDirs: false,
    getFiles: false,
    getContents: false,
    latestVotes: false,
    latestFiles: false,
    search: false,
  };

  // Test ping
  try {
    await ping();
    tests.ping = true;
  } catch (error) {
    console.error(error);
  }

  // Test dbping
  try {
    await dbPing();
    tests.dbPing = true;
  } catch (error) {
    console.error(error);
  }

  // Test about
  try {
    await about();
    tests.about = true;
  } catch (error) {
    console.error(error);
  }

  // Test get
  try {
    await get({ id: "15156" });
    tests.get = true;
  } catch (error) {
    console.error(error);
  }

  // Test get
  try {
    await getParentDir({ name: "levels/doom/a-c/" });
    tests.getParentDir = true;
  } catch (error) {
    console.error(error);
  }

  // Test getDirs
  try {
    await getDirs({ name: "levels/doom2/" });
    tests.getDirs = true;
  } catch (error) {
    console.error(error);
  }

  // Test getFiles
  try {
    await getFiles({ name: "levels/doom/megawads/" });
    tests.getFiles = true;
  } catch (error) {
    console.error(error);
  }

  // Test getContents
  try {
    await getContents({ name: "levels/doom/" });
    tests.getContents = true;
  } catch (error) {
    console.error(error);
  }

  // Test latestVotes
  try {
    await latestVotes({ limit: 100 });
    tests.latestVotes = true;
  } catch (error) {
    console.error(error);
  }

  // Test latestFiles
  try {
    await latestFiles({ limit: 10 });
    tests.latestFiles = true;
  } catch (error) {
    console.error(error);
  }

  // Test latestFiles
  try {
    await search({
      query: "chest",
      type: "filename",
      sort: "date",
    });
    tests.search = true;
  } catch (error) {
    console.error(error);
  }

  // Print out tests
  Object.keys(tests).forEach((test) => {
    console.log(`${test}: ${tests[test] ? "✅" : "❌"}`);
  });
})();
