import type { DuckDuckGoSearchRequest,DuckDuckGoSearchResponse } from '../types/search.types';
import { fetchWithRetry } from '../utils/fetchWithRetry';

/**
 * Search DuckDuckGo via public HTTP API.
 * Uses fetch (GET).
 * input: params - Search parameters (query, etc.)
 * output: returns DuckDuckGoSearchResponse
 * throws: On fetch/network errors or invalid response.
 */

export async function searchDuckDuckGo(params: DuckDuckGoSearchRequest): Promise<DuckDuckGoSearchResponse> {
  /** Validate Input Shape */
  const { q, format = 'json', no_html = 1, skip_disambig = 1, no_redirect = 1 } = params;
  if (!q || q.trim() === '') {
    throw new Error("Query string 'q' is required.");
  }
  const url = new URL('https://api.duckduckgo.com/');
  url.searchParams.set('q', q);
  url.searchParams.set('format', format);
  url.searchParams.set('no_html', String(no_html));
  url.searchParams.set('skip_disambig', String(skip_disambig));
  url.searchParams.set('no_redirect', String(no_redirect));

  /** Make the GET request to DuckDuckGo API */
  let res: Response;
  try {
    res = await fetchWithRetry(url.toString());
  } catch (err) {
    throw new Error(`Network error calling DuckDuckGo API: ${(err as Error).message}`);
  }
  if (!res.ok) {
    throw new Error(`DuckDuckGo API error: HTTP ${res.status}`);
  }

  /** Get the JSON response */
  let data: unknown;
  try {
    data = await res.json();
  } catch (err) {
    throw new Error(`DuckDuckGo API returned invalid JSON. Error: ${(err as Error).message}`);
  }

  /** Structural check */
  if ( typeof data !== 'object' || !data || !('Abstract' in data) || !('RelatedTopics' in data)) {
    throw new Error('Unexpected DuckDuckGo API response structure.');
  }
  return data as DuckDuckGoSearchResponse;
}
