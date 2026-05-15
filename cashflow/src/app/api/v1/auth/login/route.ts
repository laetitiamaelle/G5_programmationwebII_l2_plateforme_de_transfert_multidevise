import { jsonErr, jsonOk } from "@/server/http";
import { loginBody } from "@/server/validation";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonErr(400, "Corps JSON invalide");
  }
  const parsed = loginBody.safeParse(body);
  if (!parsed.success) {
    return jsonErr(400, parsed.error.flatten().formErrors.join(", "));
  }
  return jsonOk({
    token: "demo-session",
    user: { email: parsed.data.email, name: "Utilisateur démo" },
  });
}
