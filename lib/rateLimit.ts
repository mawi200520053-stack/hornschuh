const requests = new Map<string, { count: number; reset: number }>();

const WINDOW_MS = 60_000; // 1 Minute
const MAX_REQUESTS = 5;

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = requests.get(ip);

  if (!entry || now > entry.reset) {
    requests.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) return false;

  entry.count++;
  return true;
}
