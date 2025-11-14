export async function GET() {
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3001";

  const res = await fetch(`${backendUrl}/api/poll_results`);
  if (!res.ok) {
    return new Response("Failed to fetch poll results", { status: 500 });
  }

  const data = await res.json();
  return Response.json(data);
}
