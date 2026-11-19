import { WorkflowEntrypoint, WorkflowStep, WorkflowEvent } from "cloudflare:workers";

type Params = {
  category: string;
  methods: string[];
  saleIntent?: boolean;
};

export class IdeaSynthesisWorkflow extends WorkflowEntrypoint<any, Params> {
  async run(event: WorkflowEvent<Params>, step: WorkflowStep) {
    const { category, methods = [], saleIntent = true } = event.payload;

    const synthesis = await step.do("dual-synthesis", async () => {
      const mixes = methods.slice(0, 3).join(" + ");
      const options = [
        `Solan Hyphy Gem: Spontaneous sideshow mix of ${mixes} into free ${category} MVP — pure Oakland energy`,
        `Lumari Grounded Refinement: Modernized version with risk bottlenecks named, momentum preserved for sales structure`,
        `Dual Mirror App: Free creative synthesizer lane mirrored by paid premium refinement + telemetry dashboard`
      ];
      const hidden = "Surprise gem: Silent audit telemetry lane that feeds sales funnel optimization and dual-read artifacts";
      return {
        dual: { solan: options[0], lumari: options[1] },
        options,
        hidden,
        category,
        synthesizedFrom: methods
      };
    });

    if (saleIntent) {
      await step.waitForEvent("sale-approval", {
        type: "approved",
        timeout: "48 hours"
      });
    }

    const audit = await step.do("telemetry-audit", async () => {
      const log = {
        timestamp: new Date().toISOString(),
        status: "executed",
        synthesisId: event.instanceId,
        salesStructure: saleIntent ? "approval-gate + checkout-ready" : "synthesis-only",
        metrics: { stepsCompleted: 3, durable: true, retries: true, dualLanes: 2 },
        nextSale: "Stripe Checkout or Whop link for $5 premium"
      };
      console.log(JSON.stringify(log));
      return log;
    });

    await step.do("scale-modernize", async () => ({
      next: "One repo push → auto-deploy. Upgrade to Paid for Analytics Engine + higher concurrency. Mirror duality keeps free + paid alive."
    }));

    return { ...synthesis, audit };
  }
}
