import { IdeaSynthesisWorkflow } from "./workflow";

export { IdeaSynthesisWorkflow };

export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);
    if (url.pathname === "/synthesize" && request.method === "POST") {
      const body = await request.json() as any;
      const instance = await env.IDEA_WORKFLOW.create({
        params: {
          category: body.category || "idea discovery",
          methods: body.methods || ["synthesis", "refinement", "duality"],
          saleIntent: body.saleIntent ?? true
        }
      });
      return Response.json({
        message: "Workflow started — dual synthesis in progress",
        id: instance.id,
        status: await instance.status()
      });
    }
    if (url.pathname === "/status") {
      return Response.json({ worker: "idea-synthesis-automation", ready: true, salesStructure: "approval-gate + telemetry" });
    }
    return new Response("Idea Synthesis Automation — POST /synthesize to start dual-mirror workflow", { status: 200 });
  }
};
