import path from "node:path";
import { DatabaseSync } from "node:sqlite";

function resolveDatabasePath(): string {
  const databaseUrl = process.env.DATABASE_URL ?? "file:./data/app.db";
  const rawPath = databaseUrl.startsWith("file:") ? databaseUrl.slice("file:".length) : databaseUrl;
  const normalized = rawPath.trim();

  return path.isAbsolute(normalized) ? normalized : path.resolve(process.cwd(), normalized);
}

const dbPath = resolveDatabasePath();
const dbDirectory = path.dirname(dbPath);

if (!dbDirectory) {
  throw new Error("Database directory could not be resolved.");
}

const fs = await import("node:fs");
fs.mkdirSync(dbDirectory, { recursive: true });

export const db = new DatabaseSync(dbPath);

export function initializeDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS site_settings (
      key TEXT PRIMARY KEY,
      value TEXT,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

initializeDatabase();

export default db;
