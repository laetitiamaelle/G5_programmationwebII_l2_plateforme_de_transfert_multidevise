import { jsonOk } from "@/server/http";
import { CONTACTS } from "@/server/seed";

export async function GET() {
  return jsonOk(CONTACTS);
}
