import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

export const initDb: producer = ({ store = update.db }) => {
  const adapter = new FileSync("db.json");
  const db = low(adapter);

  store.set(db);
};

// Initialize db connection
// Seed the db
