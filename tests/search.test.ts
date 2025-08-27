import { searchDuckDuckGo } from '../routes/search';
import type { DuckDuckGoSearchRequest, DuckDuckGoSearchResponse } from '../types/search.types';

describe('Search API Integration', () => {
  /** Test Properly Typed Search Results for Valid Query */
  it('should return properly typed search results', async () => {
    const params: DuckDuckGoSearchRequest = { q: 'cat' };
    const result = await searchDuckDuckGo(params);
    expect(typeof result.Abstract).toBe('string');
    expect(result.Heading.toLowerCase()).toContain('cat');
    expect(Array.isArray(result.RelatedTopics)).toBe(true);
    expect(typeof result.meta).toBe('object');
  });

  /** Test Handling of Invalid Query */
  it('should handle invalid search queries gracefully', async () => {
    await expect(searchDuckDuckGo({ q: '' })).rejects.toThrow("Query string 'q' is required.");
  });

  /** Test Response Structure Validation */
  it('should validate response structure matches defined types', async () => {
    const result = await searchDuckDuckGo({ q: 'pizza' });
    const check: DuckDuckGoSearchResponse = result;
    expect(check).toHaveProperty('Abstract');
    expect(check).toHaveProperty('RelatedTopics');
    expect(typeof check.Type).toBe('string');
  });

  /** Test Handling of Nonsense Query */
  it('should still return structured response for nonsense query', async () => {
    const result = await searchDuckDuckGo({ q: 'asdfghjkl!@#$%^&*()QWERTYUIOP' });
    expect(result).toHaveProperty('Abstract');
    expect(result).toHaveProperty('RelatedTopics');
    expect(Array.isArray(result.RelatedTopics)).toBe(true);
  });
});
