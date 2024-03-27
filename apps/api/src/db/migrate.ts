import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from ".";

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "./.drizzle",
    });
    console.log("Migration complete");
  } catch (error) {
    console.log("🚀 ~ main ~ error:", error);
    process.exit(1);
  }
};

main();
