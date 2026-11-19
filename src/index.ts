import { IdeaSynthesisWorkflow } from "./workflow";

export { IdeaSynthesisWorkflow };

export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "/ui") {
      return new Response(getDualUI(), { headers: { "Content-Type": "text/html" } });
    }
    if (url.pathname === "/synthesize" && request.method === "POST") {
      const body = await request.json() as any;
      const instance = await env.IDEA_WORKFLOW.create({
        params: {
          category: body.category || "idea discovery methods",
          methods: body.methods || ["synthesis", "refinement", "duality", "telemetry"],
          saleIntent: body.saleIntent ?? true
        }
      });
      return Response.json({
        message: "Dual synthesis Workflow started — Solan gem + Lumari structure",
        id: instance.id,
        status: await instance.status()
      });
    }
    if (url.pathname === "/sale" && request.method === "POST") {
      const body = await request.json() as any;
      return Response.json({
        saleStructure: "approval-gate → Stripe Checkout or Whop link",
        next: "Approve Workflow event then hit Stripe for $5 premium refinement",
        amount: body.amount || 500,
        note: "Set STRIPE_SECRET env for live execution"
      });
    }
    if (url.pathname === "/status") {
      return Response.json({
        worker: "idea-synthesis-automation",
        ready: true,
        salesStructure: "durable approval-gate + telemetry audit + dual mirror",
        telemetry: { logsEnabled: true, observability: true }
      });
    }
    return new Response("Idea Synthesis Automation refined. /ui for dual mirror, POST /synthesize", { status: 200 });
  }
};

function getDualUI() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Dual Synthesis Mirror — Solan / Lumari</title>
<style>
body { font-family: system-ui, sans-serif; background: #0a0a0a; color: #eee; margin: 0; padding: 20px; }
.card { background: #1a1a1a; border-radius: 12px; padding: 20px; margin: 10px 0; max-width: 800px; }
.solan { border-left: 4px solid #ff6b00; }
.lumari { border-left: 4px solid #00aaff; }
button { background: #ff6b00; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; }
pre { background: #111; padding: 10px; overflow: auto; }
</style>
</head>
<body>
<h1>Hyphy Dual Synthesis Engine</h1>
<div class="card solan"><h2>Solan Lane (Creative Sideshow)</h2><p>Spontaneous mix of similar methods into gems. Hyphy energy, free MVP.</p></div>
<div class="card lumari"><h2>Lumari Lane (Grounded Correction)</h2><p>Risk notes, bottlenecks, refined structure for sales execution. Keeps momentum alive.</p></div>
<button onclick="startSynth()">Start Synthesis Workflow</button>
<pre id="out">Ready. Hit button or POST /synthesize</pre>
<script>
async function startSynth() {
  const res = await fetch('/synthesize', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({category:'idea methods', methods:['synthesis','refinement','duality']})});
  document.getElementById('out').textContent = JSON.stringify(await res.json(), null, 2);
}
</script>
</body>
</html>`;
}
