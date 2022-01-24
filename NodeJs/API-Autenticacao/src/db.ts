import { Pool } from "pg";

const connectionString = 'postgres://durmqycs:dj8PKFarAt3rGipAMqhFpvQDRabRreIO@kesavan.db.elephantsql.com/durmqycs';

const db = new Pool({ connectionString });

export default db;