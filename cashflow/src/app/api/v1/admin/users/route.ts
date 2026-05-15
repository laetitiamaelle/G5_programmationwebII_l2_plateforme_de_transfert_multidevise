import { jsonOk } from "@/server/http";
import { listAdminUsers } from "@/server/queries";

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams.get("q") ?? undefined;
  return jsonOk(listAdminUsers(q));
}
