/**
 * ## DuckDuckGo Search API Types
 * Comprehensive types based on API exploration.
 * See: https://api.duckduckgo.com/?q=cat&format=json&no_html=1&skip_disambig=1
 */

/** Request params for DuckDuckGo search */
export interface DuckDuckGoSearchRequest {
  /** Search query (required) */
  q: string;
  /** Response forma */
  format?: 'json';
  /** Omit HTML in API response */
  no_html?: 1 | 0;
  /** Skip disambiguation */
  skip_disambig?: 1 | 0;
  /** Skip HTML redirects */
  no_redirect?: 1 | 0;
}

/** DuckDuckGo icon data */
export interface DuckDuckGoIcon {
  URL: string;
  Height: string;
  Width: string;
}

/** Related topic result */
export interface DuckDuckGoRelatedTopic {
  FirstURL: string;
  Icon: DuckDuckGoIcon;
  Result: string;
  Text: string;
}

/** Metadata block from DuckDuckGo API */
export interface DuckDuckGoMeta {
  attribution?: string | null;
  blockgroup?: string | null;
  created_date?: string | null;
  description?: string | null;
  designer?: string | null;
  dev_date?: string | null;
  dev_milestone?: string | null;
  developer?: Array<{ name: string; type: string; url: string }>;
  example_query?: string;
  id?: string;
  is_stackexchange?: boolean | null;
  js_callback_name?: string;
  live_date?: string | null;
  maintainer?: { github: string };
  name?: string;
  perl_module?: string;
  producer?: string | null;
  production_state?: string;
  repo?: string;
  signal_from?: string;
  src_domain?: string;
  src_id?: number;
  src_name?: string;
  src_options?: Record<string, unknown>;
  src_url?: string | null;
  status?: string;
  tab?: string;
  topic?: string[];
  unsafe?: number;
}

/** Full response type for DuckDuckGo search */
export interface DuckDuckGoSearchResponse {
  Abstract: string;
  AbstractSource: string;
  AbstractText: string;
  AbstractURL: string;
  Answer: string;
  AnswerType: string;
  Definition: string;
  DefinitionSource: string;
  DefinitionURL: string;
  Entity: string;
  Heading: string;
  Image: string;
  ImageHeight: number;
  ImageIsLogo: number;
  ImageWidth: number;
  Infobox: string | object;
  Redirect: string;
  RelatedTopics: DuckDuckGoRelatedTopic[];
  Results: unknown[];
  Type: string;
  meta: DuckDuckGoMeta;
}
