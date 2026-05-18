/**
 * @amlplugins/vercel-ai-anthropic
 *
 * Thin namespaced re-export of the native @ai-sdk/anthropic SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Vercel AI SDK Anthropic provider — Claude models with tool use, prompt caching, vision, computer use.
 */

import * as _sdk from "@ai-sdk/anthropic";
export * from "@ai-sdk/anthropic";
export { _sdk as sdk };
export default _sdk;

import * as _secondary from "ai";
export * as secondary from "ai";
export { _secondary };
