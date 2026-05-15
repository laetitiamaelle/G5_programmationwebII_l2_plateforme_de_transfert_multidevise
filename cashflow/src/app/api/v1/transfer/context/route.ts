import { jsonOk } from "@/server/http";
import { getTransferContext } from "@/server/queries";

export async function GET() {
  return jsonOk(getTransferContext());
}
