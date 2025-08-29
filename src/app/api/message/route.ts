import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.POSTGRESQL_ADDON_HOST,
  database: process.env.POSTGRESQL_ADDON_DB,
  user: process.env.POSTGRESQL_ADDON_USER,
  password: process.env.POSTGRESQL_ADDON_PASSWORD,
  port: Number(process.env.POSTGRESQL_ADDON_PORT),
  ssl: { rejectUnauthorized: false },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    const result = await pool.query(
      'INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING id',
      [name, email, message]
    );
    return NextResponse.json({ success: true, id: result.rows[0].id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save message.' }, { status: 500 });
  }
}

// export async function GET(req: NextRequest) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const page = parseInt(searchParams.get('page') || '1', 10);
//     const limit = parseInt(searchParams.get('limit') || '10', 10);
//     const offset = (page - 1) * limit;

//     const result = await pool.query(
//       'SELECT id, name, email, message FROM messages ORDER BY id DESC LIMIT $1 OFFSET $2',
//       [limit, offset]
//     );
//     const countResult = await pool.query('SELECT COUNT(*) FROM messages');
//     const total = parseInt(countResult.rows[0].count, 10);

//     return NextResponse.json({
//       data: result.rows,
//       page,
//       limit,
//       total,
//       totalPages: Math.ceil(total / limit),
//     });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: 'Failed to fetch messages.' }, { status: 500 });
//   }
// }
