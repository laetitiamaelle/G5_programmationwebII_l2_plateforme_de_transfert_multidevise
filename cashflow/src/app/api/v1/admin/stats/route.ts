import { jsonOk } from "@/server/http";
import { ADMIN_STATS } from "@/server/seed";

export async function GET() {
  return jsonOk(ADMIN_STATS);
}
