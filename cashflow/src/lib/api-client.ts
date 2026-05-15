export type ApiOk<T> = { ok: true; data: T };
export type ApiErr = { ok: false; error: string };

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(path);
  const json = (await res.json()) as ApiOk<T> | ApiErr;
  if (!json.ok) throw new Error(json.error);
  return json.data;
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = (await res.json()) as ApiOk<T> | ApiErr;
  if (!json.ok) throw new Error(json.error);
  return json.data;
}
