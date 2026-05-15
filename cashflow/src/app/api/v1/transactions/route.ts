import { jsonErr, jsonOk } from "@/server/http";
import { listTransactions } from "@/server/queries";
import { transactionsQuery } from "@/server/validation";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const parsed = transactionsQuery.safeParse(Object.fromEntries(url.searchParams));
  if (!parsed.success) {
    return jsonErr(400, parsed.error.flatten().formErrors.join(", "));
  }
  const data = listTransactions(parsed.data);
  return jsonOk(data);
}
