import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL);

export async function fetchUser() {
    try {
        const data = await sql`SELECT * FROM Users`;
        console.log('penis', data);
        return data;
    } catch (error) {
        console.error('Database error:', error);
        throw new Error('Failed to fetch user data.');
    }
}