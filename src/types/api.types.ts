/**
 * API Types
 * Shared types for API routes and responses
 */

import { z } from 'zod';

// ============================================================================
// Agent Download API
// ============================================================================

/** Schema for agent download parameters */
export const AgentDownloadParamsSchema = z.object({
  category: z.string().regex(/^[a-z0-9-]+$/, 'Invalid category format'),
  agent: z.string().regex(/^[a-z0-9-]+$/, 'Invalid agent format'),
});

export type AgentDownloadParams = z.infer<typeof AgentDownloadParamsSchema>;

/** API error response structure */
export interface ApiErrorResponse {
  error: string;
  details?: unknown;
}

/** API success response for JSON endpoints */
export interface ApiSuccessResponse<T = unknown> {
  data: T;
}

// ============================================================================
// Common API Types
// ============================================================================

/** Paginated response wrapper */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

/** Standard API response union */
export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
