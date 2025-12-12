/**
 * Type helper for MCP server instance
 *
 * Uses type assertions to avoid "Type instantiation is excessively deep" error
 * caused by complex Zod generics in the MCP SDK.
 * See: https://github.com/modelcontextprotocol/typescript-sdk/issues/494
 *
 * The SDK types for tool, resource, and prompt methods have deep recursive
 * generics that exceed TypeScript's instantiation depth limit.
 * This interface provides the same runtime behavior with simpler types.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type McpServerInstance = any;

// ============================================================================
// MCP Content Types - Eliminates repetitive 'as const' assertions
// ============================================================================

/** Text content block for MCP responses */
export type TextContent = {
  readonly type: 'text';
  readonly text: string;
};

/** Message roles for MCP prompts */
export type MessageRole = 'user' | 'assistant';

/** MCP prompt message structure */
export type McpMessage = {
  readonly role: MessageRole;
  readonly content: TextContent;
};

/** MCP tool result structure */
export interface ToolResult {
  content: TextContent[];
  isError?: boolean;
}

/** MCP prompt result structure - simplified for SDK compatibility */
export type PromptResult = {
  messages: Array<{
    role: 'user' | 'assistant';
    content: { type: 'text'; text: string };
  }>;
};

// ============================================================================
// Helper Functions - Type-safe factories for MCP structures
// ============================================================================

/** Create a text content block */
export function textContent(text: string): TextContent {
  return { type: 'text', text } as const;
}

/** Create a tool result with text content */
export function toolResult(text: string, isError?: boolean): ToolResult {
  const result: ToolResult = { content: [textContent(text)] };
  if (isError) result.isError = true;
  return result;
}

/** Create a user message for prompts */
export function userMessage(text: string): McpMessage {
  return { role: 'user', content: textContent(text) } as const;
}

/** Create an assistant message for prompts */
export function assistantMessage(text: string): McpMessage {
  return { role: 'assistant', content: textContent(text) } as const;
}

/** Create a prompt result with messages */
export function promptResult(messages: McpMessage[]): PromptResult {
  return { messages };
}
