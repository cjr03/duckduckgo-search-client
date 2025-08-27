/** Utility function to retry fetch calls with a 5s timeout. */

export async function fetchWithRetry(url: string, options: RequestInit = {}, retries = 3, timeoutMs = 5000): Promise<Response> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeoutMs);

      const response = await fetch(url, { ...options, signal: controller.signal,});
      clearTimeout(id);

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response;
    } catch (err) {
      if (attempt === retries - 1) throw err;
    }
  }
  throw new Error('Failed to fetch after retries');
}
