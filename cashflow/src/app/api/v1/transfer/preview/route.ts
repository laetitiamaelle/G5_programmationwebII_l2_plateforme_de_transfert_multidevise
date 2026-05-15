import { jsonErr, jsonOk } from "@/server/http";
import { previewTransfer } from "@/server/queries";
import { transferPreviewBody } from "@/server/validation";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonErr(400, "Corps JSON invalide");
  }
  const parsed = transferPreviewBody.safeParse(body);
  if (!parsed.success) {
    return jsonErr(400, parsed.error.flatten().formErrors.join(", "));
  }
  try {
    const data = previewTransfer(parsed.data.amountEur, parsed.data.contactId);
    return jsonOk(data);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Erreur";
    return jsonErr(400, msg);
  }
}
