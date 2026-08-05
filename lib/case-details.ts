export type Block = {
  lead: string;
  body: string;
};

export type CaseSection = {
  intro: string;
  blocks: Block[];
};

// One outcome line, split so the standout phrase can be set in italic
// (Section 2: Outcome list, "select phrases in italic for emphasis").
export type OutcomeLine = {
  pre: string;
  highlight: string;
  post: string;
};

export type CaseDetail = {
  situation: string[];
  complication: CaseSection;
  action: CaseSection;
  outcome: OutcomeLine[];
};

export const caseDetails: Record<string, CaseDetail> = {
  "auto-shopping": {
    situation: [
      "A large regional insurer had built decades of success on an agent-led model: customers called an agent, the agent built a relationship, and that's how policies got written and serviced.",
      "Consumer behavior had changed. Customers were researching and comparing options online before ever contacting an agent, and the existing experience wasn't built for that moment.",
    ],
    complication: {
      intro: "No shared definition of a good lead existed across the enterprise, and that gap was already costing them.",
      blocks: [
        {
          lead: "The evidence.",
          body: "Research with agents confirmed the leads reaching them were inconsistent. A meaningful share of shoppers weren't right for the insurer at all and ended up with less stringent, lower-cost carriers like Progressive.",
        },
        {
          lead: "The root cause.",
          body: "Without a shared definition of a good lead, nobody could align on what the experience needed to do differently. The shopping journey kept sending the wrong customers through to agents, and no one could say why.",
        },
      ],
    },
    action: {
      intro: "I built the enterprise's first shared, evidence-based definition of a good lead, and used it to align both the experience and the organization around it.",
      blocks: [
        {
          lead: "From data to definition.",
          body: "Reframed existing data into mindset-based segments for customers and agents and took initiatives that had been circulating without traction and shaped them into testable concepts. Together, it gave the enterprise a common language for who they were designing for and a validated end-to-end experience.",
        },
        {
          lead: "From definition to design.",
          body: "Introduced self-service features giving customers a soft quote range, direct handoff to a local agent or the contact center, or the option to request a callback. Critically, the features captured richer customer information, closing the gap between initial quotes and what underwriters would actually insure.",
        },
        {
          lead: "From design to governance.",
          body: "The definition and the design of the experience became the point of alignment across sales, product, service, technology, data, enterprise architecture, and innovation. An Agent Experience Committee with influence across six business units carried that alignment through delivery.",
        },
      ],
    },
    outcome: [
      { pre: "Received ", highlight: "unanimous", post: " board approval, the only time in over 30 years" },
      { pre: "Improved agent lead quality by a ", highlight: "third", post: "" },
      { pre: "Aligned ", highlight: "six business units", post: " behind a single experience definition, a first for the enterprise" },
      { pre: "Established an Agent Experience Committee to ", highlight: "sustain alignment", post: " and delivery" },
      { pre: "Secured investment for ", highlight: "integrated", post: " delivery" },
    ],
  },

  "enterprise-presence": {
    situation: [
      "A large regional insurer had attempted to build an internal innovation capability multiple times. When Harmonic was brought in they were on their third or fourth effort — with real executive ambition but limited organizational infrastructure to support it.",
      "Two goals: help the enterprise grow non-core revenue through new service development, and build a durable culture of innovation that could outlast any single initiative or team.",
    ],
    complication: {
      intro: "Three compounding forces stood in the way of success: the team makeup, its authority, and the operating environment.",
      blocks: [
        {
          lead: "Team constraint.",
          body: "The insurer built the innovation team largely from long-tenured internal employees. That brought institutional knowledge and relationships — and deeply ingrained command-and-control habits and risk aversion that made working in ambiguity genuinely difficult for many practitioners.",
        },
        {
          lead: "Authority constraint.",
          body: "Innovation was an enterprise objective at the C-suite level but the team held no formal power. Influence was the only lever, and it had to be rebuilt with every new stakeholder and every new initiative.",
        },
        {
          lead: "Environmental constraint.",
          body: "The same risk-averse policies that define a regulated insurer hindered or outright forbade the lean, move-fast mentality that most innovation methods assume. Standard approaches had to be reinvented to work within real institutional constraints.",
        },
      ],
    },
    action: {
      intro: "I led the highest-profile engagements while maintaining continuity and building trust across five years, addressing each constraint head-on.",
      blocks: [
        {
          lead: "Building practitioners.",
          body: "Created the capacity to work in ambiguity and connect design to business outcomes. Trained emerging leaders across the enterprise and coached innovation practitioners and leaders on design methods, engaging across functions, and defining business models from experience to capability.",
        },
        {
          lead: "Building influence.",
          body: "Defined an innovation-as-a-service positioning with a spectrum of modes, from doing the work for a business unit to hands-off coaching, and engaged claims and product organizations that had never worked with design before.",
        },
        {
          lead: "Building practice.",
          body: "Reinvented innovation practices and lean methods to work within the regulated and risk-averse culture. Established canonical frameworks that standardized how design leads and project owners operated, from experience architecture through research to in-market testing and measurement.",
        },
      ],
    },
    outcome: [
      { pre: "Scaled an innovation portfolio worth ", highlight: "$250M", post: " in value across new revenue, startup ventures, and capability development" },
      { pre: "Built a team of practitioners and leaders capable of holding ambiguity and ", highlight: "driving business value", post: " with service design" },
      { pre: "Shifted innovation from earning its way in to being ", highlight: "sought out,", post: " completing 50+ projects in 5 years" },
      { pre: "Established a durable innovation practice ", highlight: "adapted", post: " to operate within the regulated environment" },
    ],
  },

  evolve: {
    situation: [
      "Evolve Vacation Rental had built its business helping hosts market and maximize their properties. Growth now depended on hosts delivering experiences that lived up to the quality of their listings.",
      "Evolve wanted to improve the guest experience by raising the level of hospitality hosts delivered, not through contractual obligation or tighter standards, but by improving how hosts were educated, communicated with, and coordinated.",
    ],
    complication: {
      intro: "Evolve had surface-level marketing personas but no real understanding of who their hosts were or why they rented their properties.",
      blocks: [
        {
          lead: "The service gap.",
          body: "Every host got the same experience regardless of whether they were a hands-on local owner or a remote investor managing dozens of properties.",
        },
      ],
    },
    action: {
      intro: "I delivered an experience strategy that gave Evolve a new way to see their hosts and a clear model for how to transform each of them into hospitality providers.",
      blocks: [
        {
          lead: "Host segmentation.",
          body: "Synthesized ideas and in-flight product features into a prototype experience for evaluative research. The research surfaced four distinct host segments: what motivated them, what they were capable of, and what they needed from Evolve to succeed.",
        },
        {
          lead: "Service design.",
          body: "Designed a multi-actor service architecture across seven actors, anchored by a new Hospitality Coach role with supporting tools, value exchanges, and performance metrics to help hosts grow into the role their guests desired.",
        },
        {
          lead: "Execution package.",
          body: "Delivered strategic experience pillars, an experience evolution roadmap, moment briefs, and product requirement documents written for product teams to build against, not just draw inspiration from.",
        },
      ],
    },
    outcome: [
      { pre: "Redefined how Evolve understood its hosts, replacing marketing personas with four ", highlight: "research-backed", post: " segments" },
      { pre: "Designed a ", highlight: "multi-actor", post: " service architecture and a new Hospitality Coach role to support each host segment's hospitality needs" },
      { pre: "Delivered an ", highlight: "end-to-end", post: " experience strategy and execution-ready product roadmap" },
    ],
  },

  "practice-build": {
    situation: [
      "Signal Theory was losing ground: large agency networks blending marketing with upstream management consulting from above, nimbler competitors winning on relevance from below. The digital world and fractured media landscape had changed what clients needed, and the existing model wasn't keeping up.",
      "The agency's first response was to spin up a separate design consultancy, free from client conflicts and positioned to chase new business.",
    ],
    complication: {
      intro: "It never found its footing outside, and it wasn't being welcomed back inside with open arms.",
      blocks: [
        {
          lead: "Practice.",
          body: "Design was seen as a creative function, focused on conceiving and laying out advertisements, packaging, and the occasional website. There was no shared vocabulary aside from aesthetic benefits, let alone a way to meet human needs and solve business problems.",
        },
        {
          lead: "Structure.",
          body: "The agency was a matrixed org with a strong bias toward its traditional marketing-oriented departments. Teams outside the core trio of account, strategy, and creative operated as internal service providers, often bolted on after approaches were already developed.",
        },
        {
          lead: "Traction.",
          body: "What reputation the prior attempt had internally ranged from skeptical to dismissive, and externally it had none at all. There wasn't an existing client or body of work to point to, and teams had little to no exposure to the approach or its potential value.",
        },
      ],
    },
    action: {
      intro: "I rebuilt the practice from the ground up: redefining design, integrating it operationally, and proving its value with clients. Then I turned it on the agency itself.",
      blocks: [
        {
          lead: "Redefining.",
          body: "Immersed everyone in the agency in design workshops, building a shared, human-centered vocabulary and a network of champions throughout the org. That focus on design, human behavior, and human needs became the centerpiece of the agency's reimagined offerings.",
        },
        {
          lead: "Embedding.",
          body: "Built a small, multidisciplinary experience design team, then activated it alongside a broader champions network to find inroads into live projects. When the rebrand gave design a mandate, co-created new operations and team workflows for the full breadth of the agency's capabilities to match client needs and market demands.",
        },
        {
          lead: "Proving.",
          body: "Built momentum by informing strategy and framing problems to sharpen existing solutions, then helping accounts expand what they could offer clients. Eventually, the practice became the throughline in the agency's approach and its key differentiator in securing new business.",
        },
      ],
    },
    outcome: [
      { pre: "Built a practice and a network of ", highlight: "champions", post: " that changed how the agency understood and delivered design" },
      { pre: "Co-created ", highlight: "8 new service offerings", post: " and the workflows to deliver each, spanning a range of outcomes and outputs" },
      { pre: "Won a $2M John Deere engagement on the ", highlight: "strength", post: " of the practice as the agency's key differentiator" },
    ],
  },

  roofing: {
    situation: [
      "A large regional insurer had a compelling idea for a subscription-based residential roofing service: homeowners subscribe to a fully functional, resilient roof and the service maintains, cares for, and replaces it over the life of the agreement.",
      "Storm chasers: predatory roofers who descend after severe weather, do substandard work, and disappear. Disrupting them by building a trusted relationship with homeowners before the storm had substantial revenue potential and would benefit the core insurance business directly.",
    ],
    complication: {
      intro: "The idea existed. The definition didn't, and there wasn't a unified team to build one.",
      blocks: [
        {
          lead: "No cohesion.",
          body: "The team was fractured. Two team members had already been moved off the project. There was no shared sense of team, no clarity on roles or responsibilities, and no agreement on who set the agenda or the standard for craft and strategy.",
        },
        {
          lead: "No vision.",
          body: "The work had been optimized for speed over durability, creating real design debt. What existed of a north star was too vague to act on, leaving no basis for deciding what to build, what to test, or what success looked like.",
        },
        {
          lead: "No precedent.",
          body: "Nothing like this had been built inside the organization before. The lift to minimum viable meant establishing new contractor relationships, financing options for homeowners, and a way to distribute and sell the service in the first place.",
        },
      ],
    },
    action: {
      intro: "I unified the team, defined the north star vision, then cut it into something testable in a real market.",
      blocks: [
        {
          lead: "Teaming.",
          body: "Created the space for people to reconnect and rebuild trust, then gave the team clear roles, responsibilities, and standards for craft and quality. Refreshed the team's rituals and cadence to give it a shared rhythm for collaboration.",
        },
        {
          lead: "Clarifying.",
          body: "Clarified the north star vision spanning value proposition, customer experience, and operations, then built a capability map and viability analysis to prove out the business model. The team finally had something concrete to build, test, and measure against.",
        },
        {
          lead: "Launching.",
          body: "Stood up a functioning business with a five-person team: signed contractors, integrated financing partners, onboarded sales teams, and approved homeowner contracts. Instituted a measurement framework to drive key decisions and optimize the test throughout.",
        },
      ],
    },
    outcome: [
      { pre: "Defined a north star vision with a projected ten-year revenue potential of ", highlight: "$100M", post: "" },
      { pre: "Rebuilt a fractured team capable of ", highlight: "recognizing ambiguity", post: " and working through it together under pressure" },
      { pre: "Established new capabilities and ", highlight: "stood up", post: " a functioning service business from scratch" },
      { pre: "Secured executive alignment and ", highlight: "continued investment", post: " behind a staged test plan (Phase 2 underway)" },
    ],
  },

  "small-biz-exit": {
    situation: [
      "A large regional insurer launched its second innovation effort, and first in a transformational new market: designing a service for small business owners navigating the exit or transition of their business.",
      "Decades of insuring small business owners had convinced the insurer it understood them well enough to design for this moment, reinforced by watching its own independent agent base, small business owners themselves, age toward their own exits.",
    ],
    complication: {
      intro: "The agent relationship gave the insurer commercial proximity, not experiential knowledge.",
      blocks: [
        {
          lead: "The gap.",
          body: "Small business owners at the exit moment were being served by an entirely different ecosystem: lawyers, accountants, fractional executives, and specialized advisors. The insurer had no visibility into it.",
        },
        {
          lead: "The competitive opening.",
          body: "Business brokers were the incumbent solution, but they came in late and captured a disproportionate share of exit proceeds, the opportunity the insurer was positioned to take.",
        },
      ],
    },
    action: {
      intro: "I led the team through the research beat that resolved the central uncertainty and pointed the service model toward advisors rather than owners.",
      blocks: [
        {
          lead: "Kept it on track.",
          body: "Spun up the advisor research beat and refactored the delivery plan around it, absorbing the detour without adding meaningful time or cost. Framed its value to executive sponsors along the way to hold their confidence and keep investment intact.",
        },
        {
          lead: "Redirected the model.",
          body: "Integrated the service into the existing advisor ecosystem, anchoring on the business's value over time rather than the moment of exit. That let owners work toward what actually mattered to them, long before any decision to sell, crystallized into a north star vision for the service.",
        },
        {
          lead: "Proved it in market.",
          body: "Co-created a minimum viable service with exit advisors and tested it with their small business owner clients. The valuation-led approach built trust early, oriented owners toward the value they wanted before selling, and blocked out brokers before they ever entered the picture.",
        },
      ],
    },
    outcome: [
      { pre: "Secured a ", highlight: "six-figure", post: " multi-year investment secured behind a fully validated service concept in a new market" },
      { pre: "Defined a north star vision with projected ten-year revenue potential approaching ", highlight: "$150M", post: "" },
      { pre: "Compressed time-to-alignment ", highlight: "from months to weeks", post: " across five business units" },
    ],
  },

  "tide-service-vision": {
    situation: [
      "Tide Cleaners had grown to three distinct formats through acquisition: freestanding suburban locations with drive-thrus, university wash-and-fold operations, and urban delivery and locker drop services.",
      "Leadership wanted a more coherent identity across the three, driven by the operational challenge of managing multiple brand identities under one roof. Each format had its own visual language, its own systems, and its own way of representing Tide.",
    ],
    complication: {
      intro: "An identity solution would have produced visual coherence without strategic foundation. But the deeper challenge was a collision of worldviews.",
      blocks: [
        {
          lead: "Two owners.",
          body: "The core P&G org funded the work, but the Tide Cleaners services group was the one who would have to live with it and actually use it day to day. The stakeholders with budget power were removed from the stakes.",
        },
        {
          lead: "Two frames.",
          body: "The core org saw brand through a CPG lens: a product, a package, and orange bottles on a shelf. The services group brought a lean startup and experience-oriented perspective, seeing brand as something people interact with over time.",
        },
        {
          lead: "Too internal.",
          body: "Both owners argued from inside the organization, one from operations, one from experience design, but neither started from how customers actually moved through their relationship with Tide.",
        },
      ],
    },
    action: {
      intro: "I reoriented the problem around something both owners actually shared: the customer.",
      blocks: [
        {
          lead: "One goal.",
          body: "Reframed the ask, elevating it from visual identity to brand architecture, to give both owners a shared strategic objective. Three formats needed common ground to work from, not just visual alignment.",
        },
        {
          lead: "One system.",
          body: "Grounded stakeholders' individual perspectives by giving both owners' points of reference a place in the same frame. Looked at the opportunity holistically, as a single system spanning both packaged goods and service experience.",
        },
        {
          lead: "One customer.",
          body: "Reoriented the system from the outside in, starting with the customer's perspective instead of the organization's. Mapped the formats against human life stages, revealing a connective thread: campus laundry for students, urban lockers for young professionals, suburban dry cleaning for families, with Tide detergent surfacing throughout.",
        },
      ],
    },
    outcome: [
      { pre: "Unified packaged goods and service experience into ", highlight: "a single system,", post: " giving both owners a shared foundation to build from" },
      { pre: "Threaded a ", highlight: "coherent narrative", post: " across life stages, extending the Tide brand relationship to span a lifetime" },
      { pre: "Delivered a ", highlight: "strategic direction", post: " the brand adopted (eventually), even as full alignment between the two owners took longer to settle." },
    ],
  },

  "tide-store": {
    situation: [
      "Tide Cleaners had found a scalable growth model in asset-light formats: locker installations in dense urban residential and corporate environments centralized cleaning operations and dramatically reduced cost. The grocery store format was the next step, offering broader reach, higher foot traffic, and lower overhead than freestanding locations.",
      "Every grocery partner offered a different physical footprint. Square footage, sightlines, and store traffic patterns all varied, and there was no standard space to design against.",
    ],
    complication: {
      intro: "The grocery store format stripped away the safety nets the existing service relied on.",
      blocks: [
        {
          lead: "First impressions.",
          body: "Grocery locations reached customers who had never encountered Tide Cleaners before. The service had to introduce itself and deliver simultaneously, fitting into a shopping trip rather than interrupting it: navigating with a cart, managing bags, staying oriented in someone else's store.",
        },
        {
          lead: "No staff, no backup.",
          body: "Freestanding locations ran lean but still had people who could assist. Grocery locations had none, and grocery staff were neither trained nor expected to fill that gap. Every breakdown in the experience was a dead end.",
        },
        {
          lead: "Strategic gaps.",
          body: "The brand had no formal service experience principles: no guidance for how the experience should look, feel, or flow across physical space and digital touchpoints. Staff had masked that gap. The unstaffed format made it unavoidable.",
        },
      ],
    },
    action: {
      intro: "I designed a flexible, fully self-sufficient service experience from strategic foundation to tactical execution.",
      blocks: [
        {
          lead: "Experience principles.",
          body: "Conducted field research and cross-functional workshops to surface insights and define experience principles. Established the foundational guidelines for how the service should look, feel, and flow, giving the brand the design foundation it had never formally articulated.",
        },
        {
          lead: "Closed gaps.",
          body: "Mapped current and future experiences to identify where multi-channel journeys broke down without staff support, including signup and onboarding, which needed to be completely rethought. Framed each as an opportunity to generate concepts that were accessible, self-explanatory, brand-forward, and self-serviced.",
        },
        {
          lead: "Built the format.",
          body: "Selected two layout patterns flexible enough to cover a wide range of retail footprints, balancing design breadth against available resources. Developed those patterns into high-fidelity, execution-ready solutions built to hold up across the end-to-end store experience, regardless of a given location's constraints.",
        },
      ],
    },
    outcome: [
      { pre: "Unified every urban Tide Cleaners format, including locker installations, under the brand's ", highlight: "first", post: " shared experience strategy" },
      { pre: "Redesigned the signup and onboarding flow to support ", highlight: "multi-channel", post: " in-store registration" },
      { pre: "Created a ", highlight: "full system", post: " of touchpoints across two flexible layout patterns" },
      { pre: "Delivered an execution-ready package built to guide ", highlight: "immediate rollout", post: " at scale, not just serve as inspiration" },
    ],
  },
};
