import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!, { ssl: "require" });

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}

export async function GET() {
  return Response.json(await listInvoices());
}
