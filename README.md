# Idea Synthesis Automation — Refined & Modernized Iteration

One repo for automation. Synthesizes similar category methods/formulas/strategies into dual-mirror apps (Solan creative spontaneous / Lumari grounded correction).

## Auto-Deploy
Push to this repo. Deploy with Wrangler or GitHub Action. Cloudflare Workers + Workflows for durable execution.

## How to Get a Sale (Solopreneur Steps)
1. Deploy free on Workers Free (100k req/day).
2. Hit /ui or POST /synthesize with category + methods → get 3 options + hidden dual idea.
3. Workflow waits on approval event (human yes) then logs telemetry.
4. Mirror: free synthesizer + paid $5 premium refinements via Stripe Checkout / Whop.
5. Structure executes with retries; upgrade Paid plan for scale/logs/Analytics Engine.

## Telemetry Audit Log
Every run logs JSON (view in dashboard Observability). Stats: steps, durable, dual lanes, sales ready.

## Duality Structure
- Solan: hyphy sideshow energy, free gems.
- Lumari: risk bottlenecks named, momentum kept, sales gate.
- Hidden: silent audit lane for funnel optimization.

Last refined: 2026-11-18


## Automatic deploy

Pushes to `main` deploy through GitHub Actions (`.github/workflows/deploy.yml`) using `cloudflare/wrangler-action`. The workflow needs two repository secrets: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. No secrets are stored in this repo.
