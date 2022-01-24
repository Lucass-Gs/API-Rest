import { Pool } from "pg";

const connectionString = 'postgres://xxxxxx:xxxxxxxxxxxxx@kesavan.db.elephantsql.com/durmqycs';

const db = new Pool({ connectionString });

export default db;
