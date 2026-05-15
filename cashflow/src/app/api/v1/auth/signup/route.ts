import { jsonErr, jsonOk } from "@/server/http";
import { signupBody } from "@/server/validation";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonErr(400, "Corps JSON invalide");
  }
  const parsed = signupBody.safeParse(body);
  if (!parsed.success) {
    return jsonErr(400, parsed.error.flatten().formErrors.join(", "));
  }
  if (parsed.data.password !== parsed.data.confirm) {
    return jsonErr(400, "Les mots de passe ne correspondent pas");
  }
  return jsonOk({
    token: "demo-session",
    user: { email: parsed.data.email, name: parsed.data.fullName },
  });
}
