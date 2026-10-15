# Idea Synthesis Automation

One repo for creative iteration automation.

Synthesize similar category methods/formulas/strategies into dual-mode (mirror) apps.

Uses Cloudflare Workers + Workflows for durable multi-step execution, retries, human-in-loop, and sales pipelines.

## Quick Start

```bash
npm create cloudflare@latest . -- --template "cloudflare/workflows-starter"
# or deploy the skeleton
npx wrangler deploy
```

## Structure

- `src/workflow.ts`: Durable idea synthesis workflow
- Dual-mode: Solan (creative hyphy) / Lumari (grounded refinement)
- Telemetry: Built-in Workflows observability

## Get a Sale

1. Free tier MVP (100k req/day)
2. Deploy dual app (e.g. idea synthesizer + mirror sales tracker)
3. Trigger invoice/email workflow on cart checkout (see examples)
4. Upgrade to $5/mo Paid for scale

Auto-deploys iterations via this repo.
