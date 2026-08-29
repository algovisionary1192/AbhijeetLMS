import { Course, Certification, UserObjective, CaseStudy } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'llm-orchestration',
    title: 'LLM Orchestration for Enterprise',
    category: 'AI OPS',
    level: 'Advanced',
    levelBars: 3,
    duration: '8 Weeks',
    description: 'Design and deploy autonomous agents to handle complex operational workflows.',
    fullOverview:
      'Master the engineering and operational architecture required to run multi-agent LLM systems reliably at enterprise scale. Covers agentic topologies, determinism control, low-latency streaming evaluation, rate-limiting queues, memory persistence, and automated self-healing execution loops.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2kpyCDevyEp4XFrJqJqBk5DNMb3oXGiCuAj98i6UygtSc78N3UCaq7tWxQkvvunVugZ_gJjFHACzCOvppkM-MXIdTbAmV2U6_boT9gTSi4ft1WvM8Bi4UEjqOEKYjmTFH24C6YejvjAg2de9kI3yN_U-HFTFUhCPmMc0UPt2s7orScegANuVVWdza4m6UcKR09w8wdoMUqNWY7crm7xPNiEIDhCVdbQfB0WNTLFVjQr01OF57WKMv',
    imageAlt:
      'A highly structured digital abstract representation of artificial intelligence neural networks, featuring precise geometric lines in deep charcoal, slate gray, and glowing tertiary indigo.',
    prerequisites: ['Python / TypeScript fundamentals', 'Basic understanding of LLM prompt design', 'REST API and async execution patterns'],
    cohortDates: ['October 15, 2026', 'November 12, 2026', 'January 08, 2027'],
    modulesCount: 8,
    featured: true,
    capstoneTitle: 'Autonomous Multi-Agent Incident Response Orchestrator',
    capstoneDescription:
      'Build and benchmark a production-grade multi-agent fleet that ingests real-time telemetry alerts, isolates root causes, synthesizes remediations, and validates fixes in a sandboxed CI/CD pipeline.',
    syllabus: [
      {
        id: 'mod-1',
        title: 'Module 1: Agentic Topologies & State Machines',
        duration: 'Week 1-2',
        description: 'Explore directed acyclic graphs, human-in-the-loop validation checkpoints, and persistent memory engines.',
        topics: ['ReAct, Plan-and-Solve & Supervisor patterns', 'Distributed state preservation across step boundaries', 'Fault-tolerant fallback orchestration']
      },
      {
        id: 'mod-2',
        title: 'Module 2: Latency, Caching & Token Economics',
        duration: 'Week 3-4',
        description: 'High-throughput cost optimization techniques with semantic vector caching and speculative decoding routing.',
        topics: ['Semantic tier caching with Redis & Qdrant', 'Dynamic model routing (Flash vs Pro tier)', 'Token budget enforcement algorithms']
      },
      {
        id: 'mod-3',
        title: 'Module 3: Automation Frameworks & Sandboxed Tool Execution',
        duration: 'Week 5-6',
        description: 'Hardened sandboxes for Python code interpretation, SQL generation guardrails, and API connector security.',
        topics: ['E2B & Firecracker container sandboxes', 'AST-level security validation of generated code', 'Idempotency and rollback triggers']
      },
      {
        id: 'mod-4',
        title: 'Module 4: Enterprise Observability & Evaluation Loops',
        duration: 'Week 7-8',
        description: 'Automated CI/CD evaluation suites, LLM-as-a-judge telemetry, and synthetic adversary stress-testing.',
        topics: ['Continuous drift detection & regression testing', 'OpenTelemetry semantic spans for agent loops', 'Production deployment & zero-downtime cutover']
      }
    ]
  },
  {
    id: 'data-pipeline-architecture',
    title: 'Data Pipeline Architecture',
    category: 'AUTOMATION',
    level: 'Intermediate',
    levelBars: 2,
    duration: '4 Weeks',
    description: 'Construct resilient, scalable data ingestion systems using modern stack tools.',
    fullOverview:
      'Learn how to architect and maintain deterministic, high-volume ETL/ELT pipelines for unstructured and semi-structured enterprise data. Gain hands-on mastery over event-driven streaming, schema evolution, chunking strategies for vector indexing, and pipeline reliability metrics.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgtZWk2xDq30sZQkm2PMgx0yRIj9DYrBd2OBAdAT0Gonw1_OIQU-X8qmeyLxkWfMnQ5dOxe6jHjD1rp_vLewoXs1ETF1ddPav0SUyt8BTl7nPbUc52s62WBczZQW3nAZInH8TCNqHPN7XRp0kQSvLPTZ5gQsPR-vvfWGNY2NVkFaeb0ZW5FUknJe04Y8_I3vD_vmpBZsuGdwulJbdGUBrpLVbLMfwd9HMovLGjYt7LoGA82obVrEAS',
    imageAlt:
      'A clean, minimalist visualization of data pipelines flowing into a central structured database. The image relies on deep blacks and slate grays, punctuated by crisp, white data nodes and a subtle indigo glow.',
    prerequisites: ['Basic SQL querying', 'Data modeling fundamentals', 'Familiarity with cloud storage buckets'],
    cohortDates: ['October 01, 2026', 'November 05, 2026', 'December 03, 2026'],
    modulesCount: 4,
    featured: true,
    capstoneTitle: 'Zero-Loss Streaming Ingestion & Real-Time Vector Sync',
    capstoneDescription:
      'Construct an end-to-end automated pipeline connecting enterprise ERP logs to high-dimensional embedding stores with real-time anomaly detection.',
    syllabus: [
      {
        id: 'dp-1',
        title: 'Module 1: Ingestion Topologies & Stream-Batch Hybrids',
        duration: 'Week 1',
        description: 'Decoupling ingestion producers from analytical consumers using Kafka, Cloud Pub/Sub, and event triggers.',
        topics: ['Backpressure handling and queue buffering', 'Dead-letter queues and automated retry policies', 'Idempotent ingestion handlers']
      },
      {
        id: 'dp-2',
        title: 'Module 2: Unstructured Data Parsing & Context Slicing',
        duration: 'Week 2',
        description: 'Advanced document extraction strategies for PDF reports, OCR scans, and tabular databases.',
        topics: ['Semantic layout-aware document chunking', 'Metadata enrichment & relational cross-referencing', 'Lossless token preservation']
      },
      {
        id: 'dp-3',
        title: 'Module 3: Automated Quality Audits & Anomaly Alerts',
        duration: 'Week 3',
        description: 'Statistical validation rules, schema drift prevention, and automated alerting channels.',
        topics: ['Great Expectations & dbt test automation', 'Null-rate anomalies and schema contract validation', 'Real-time incident webhook routing']
      },
      {
        id: 'dp-4',
        title: 'Module 4: Vector Store Synchronization & Index Maintenance',
        duration: 'Week 4',
        description: 'High-speed embedding generation, batch upserts, and stale-vector pruning pipelines.',
        topics: ['Hybrid keyword + dense vector indexing', 'Quantization (HNSW vs IVFFlat) performance trade-offs', 'Continuous index pruning workflows']
      }
    ]
  },
  {
    id: 'ai-adoption-frameworks',
    title: 'AI Adoption Frameworks',
    category: 'STRATEGY',
    level: 'Foundation',
    levelBars: 1,
    duration: '2 Weeks',
    description: 'Executive guide to assessing, planning, and implementing AI initiatives securely.',
    fullOverview:
      'A practical framework for CTOs, VPs, and technical product leaders. Learn to quantify AI ROI, navigate data privacy and enterprise compliance, prioritize high-leverage business use cases, and transition proof-of-concepts into resilient production operations.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBTP2iPcetMaCneZYMDa4IFvDXWcOJDxbNEhtCNpJU2t2rUc-JdhyCozr0Ys4TQTj4_uupLwFtSUZ2HdW6ZInoih93Ia1n7wNpxZd46tAP0vjdMSp-nL9FTs6ed1v2eJqmcTgG-R24ZxTYc8CE0ouxGYqBnfgAEO1kgP-UY6tRyiqGUv2UTbdO-_4_JgO9u9sKWhyvbeP2tZCjdm4CmIlJE5cG30H3CoaWSs3sQyrZUmeVC8V0fSLYi',
    imageAlt:
      'Abstract representation of strategic business planning merging with algorithmic logic. Minimalist composition featuring sharp geometric grids in a dark charcoal environment.',
    prerequisites: ['Leadership or technical product experience', 'Strategic roadmap planning experience'],
    cohortDates: ['September 25, 2026', 'October 22, 2026', 'November 19, 2026'],
    modulesCount: 2,
    featured: true,
    capstoneTitle: 'Enterprise AI Transformation Blueprint & Risk Matrix',
    capstoneDescription:
      'Draft an executive-ready 18-month AI adoption roadmap with resource allocations, security boundaries, and projected cost savings.',
    syllabus: [
      {
        id: 'strat-1',
        title: 'Module 1: Opportunity Sizing & High-Leverage Use-Case Mapping',
        duration: 'Week 1',
        description: 'Evaluating internal operational bottlenecks against algorithmic maturity and engineering lift.',
        topics: ['Value vs Complexity Quadrant mapping', 'Buy vs Build vs Fine-Tune decision matrices', 'Total Cost of Ownership (TCO) modeling']
      },
      {
        id: 'strat-2',
        title: 'Module 2: Governance, Security Guardrails & Change Management',
        duration: 'Week 2',
        description: 'Establishing SOC-2 compliant AI policies, prompt injection defenses, and cross-functional team enablement.',
        topics: ['Data boundary isolation & PII masking', 'Red-teaming protocols & model bias guardrails', 'Upskilling technical teams for AI collaboration']
      }
    ]
  },
  {
    id: 'agentic-ai-infrastructure',
    title: 'Agentic AI Infrastructure & Tooling',
    category: 'AGENTIC AI',
    level: 'Advanced',
    levelBars: 3,
    duration: '6 Weeks',
    description: 'Scale multi-agent systems with deterministic execution, long-term memory, and self-correcting graphs.',
    fullOverview:
      'Dive deep into cutting-edge architectures for multi-agent collaboration. Master LangGraph topologies, state machine serialization, hierarchical team coordination, and autonomous tool calling.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2kpyCDevyEp4XFrJqJqBk5DNMb3oXGiCuAj98i6UygtSc78N3UCaq7tWxQkvvunVugZ_gJjFHACzCOvppkM-MXIdTbAmV2U6_boT9gTSi4ft1WvM8Bi4UEjqOEKYjmTFH24C6YejvjAg2de9kI3yN_U-HFTFUhCPmMc0UPt2s7orScegANuVVWdza4m6UcKR09w8wdoMUqNWY7crm7xPNiEIDhCVdbQfB0WNTLFVjQr01OF57WKMv',
    imageAlt: 'Agentic AI Infrastructure network visualization',
    prerequisites: ['Python / Async paradigms', 'Basic graph theory or workflow engine exposure'],
    cohortDates: ['November 01, 2026', 'December 15, 2026'],
    modulesCount: 6,
    featured: false,
    capstoneTitle: 'Multi-Agent Code Refactoring & Security Patching Engine',
    capstoneDescription:
      'An autonomous network of specialized agents that scans pull requests, detects vulnerabilities, generates patches, and passes tests.',
    syllabus: [
      {
        id: 'ag-1',
        title: 'Module 1: Cyclic Graph Architectures & State Channels',
        duration: 'Week 1-2',
        description: 'Designing state schemas, checkpoint persistence, and dynamic branch routing.',
        topics: ['State channels and message passing', 'Branching execution and conditional transitions', 'Infinite loop breakers and step budgets']
      },
      {
        id: 'ag-2',
        title: 'Module 2: Hierarchical Team Delegation',
        duration: 'Week 3-4',
        description: 'Constructing manager-worker agent hierarchies with structured handoffs.',
        topics: ['Supervisor routing protocols', 'Sub-agent task decomposition', 'Consensus voting mechanisms']
      },
      {
        id: 'ag-3',
        title: 'Module 3: Production Deployment & Observability',
        duration: 'Week 5-6',
        description: 'Telemetry traces, cost containment, and human intervention gateways.',
        topics: ['Live step-by-step tracing', 'Emergency pause buttons & human review gates', 'Benchmarking execution reliability']
      }
    ]
  }
];

export const INITIAL_OBJECTIVES: UserObjective[] = [
  {
    id: 'obj-1',
    title: 'Module 3: Automation Frameworks',
    courseTitle: 'LLM Orchestration for Enterprise',
    progress: 75,
    status: 'In Progress',
    dueDate: 'In 3 days'
  },
  {
    id: 'obj-2',
    title: 'Capstone Project: Data Pipeline',
    courseTitle: 'Data Pipeline Architecture',
    progress: 25,
    status: 'In Progress',
    dueDate: 'In 10 days'
  },
  {
    id: 'obj-3',
    title: 'Module 1: Opportunity Sizing & High-Leverage Use-Cases',
    courseTitle: 'AI Adoption Frameworks',
    progress: 100,
    status: 'Completed',
    dueDate: 'Completed'
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-8891',
    title: 'AI Adoption & Operational Strategy',
    recipientName: 'Abhijeet Kumar',
    issueDate: 'August 14, 2026',
    credentialId: 'AK-CERT-2026-9042',
    verificationHash: '0x8f2d9c1e7a4b63f05928d3e4c198b7e21a0f9834',
    courseId: 'ai-adoption-frameworks',
    skills: ['TCO Analysis', 'Executive AI Roadmap', 'Security Guardrails', 'Risk Assessment'],
    status: 'Verified'
  },
  {
    id: 'cert-8892',
    title: 'Enterprise LLM Architecture & Orchestration',
    recipientName: 'Abhijeet Kumar',
    issueDate: 'In Progress (Module 3/4)',
    credentialId: 'AK-CERT-PENDING-2026',
    verificationHash: '0x4c2b9a7f8e1d350912e76f4a8b9c201e54a37bd8',
    courseId: 'llm-orchestration',
    skills: ['Autonomous Agents', 'Vector Ingestion', 'Evaluation Loops', 'Latency Tuning'],
    status: 'Pending Audit'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'fintech-agent-fleet',
    clientCategory: 'Global Fintech & Wealth Management',
    title: 'Autonomous Compliance & Portfolio Rebalancing Fleet',
    summary:
      'Engineered a deterministic multi-agent pipeline replacing 140 hours/week of manual trade reconciliation with 99.98% accuracy and real-time audit logs.',
    metrics: [
      { label: 'Latency Reduction', value: '-84%' },
      { label: 'Weekly Hours Saved', value: '140 hrs' },
      { label: 'Audit Verification Rate', value: '100%' },
      { label: 'Annual OpEx Saved', value: '$1.4M' }
    ],
    architectureSummary:
      'Built around a state-machine supervisor coordinating 6 specialized verification agents. Incorporates dual-tier semantic vector caching, cryptographic execution logs, and automated rollback checkpoints.',
    techStack: ['TypeScript', 'Gemini Pro / Flash Models', 'Qdrant Vector DB', 'PostgreSQL', 'Docker / Firecracker'],
    outcomes: [
      'Zero trade reconciliation violations recorded across 6 continuous months in production.',
      'Reduced median client inquiry response time from 4.2 hours to 9 seconds.',
      'Full compliance with SEC & FINRA algorithmic audit standards.'
    ]
  },
  {
    id: 'ecommerce-data-pipeline',
    clientCategory: 'Tier-1 E-Commerce Marketplace ($8B GMV)',
    title: 'Real-Time Catalog Ingestion & Semantic Vector Synchronization',
    summary:
      'Modernized an outdated overnight batch ETL with an event-driven streaming pipeline processing 18,000 SKU updates per minute with sub-second vector indexing.',
    metrics: [
      { label: 'Indexing Throughput', value: '18k/min' },
      { label: 'Search Zero-Hits Drop', value: '-62%' },
      { label: 'End-to-End Latency', value: '420ms' },
      { label: 'Conversion Lift', value: '+14.6%' }
    ],
    architectureSummary:
      'Hybrid stream-batch architecture utilizing Google Cloud Pub/Sub, Rust ingestion workers, and asynchronous batched vector embeddings with quantization.',
    techStack: ['Google Cloud Pub/Sub', 'Rust Worker Nodes', 'Pinecone / HNSW', 'dbt', 'OpenTelemetry'],
    outcomes: [
      'Eliminated 100% of out-of-stock search anomalies through live catalog state reflection.',
      'Saved $280,000 annually in vector database compute costs via dynamic embedding caching.',
      'Enabled multilingual visual + semantic product search across 12 countries.'
    ]
  },
  {
    id: 'healthtech-rag-governance',
    clientCategory: 'Clinical Healthtech Provider',
    title: 'HIPAA-Compliant Diagnostic Knowledge Synthesizer',
    summary:
      'Deployed an offline-capable, air-gapped retrieval system for 4,000+ physicians, providing instant access to 250,000 peer-reviewed clinical guidelines.',
    metrics: [
      { label: 'Physician Time Saved', value: '38 min/day' },
      { label: 'Hallucination Rate', value: '< 0.05%' },
      { label: 'Grounding Citation Rate', value: '100%' },
      { label: 'Uptime SLA', value: '99.99%' }
    ],
    architectureSummary:
      'Strict deterministic RAG architecture with AST-level chunk verification, automated citation linkage, and zero external network leakage.',
    techStack: ['Private Cloud Enclave', 'LangGraph', 'Milvus', 'FastAPI', 'Cryptographic Audit Trail'],
    outcomes: [
      'Achieved 100% verified citation compliance in blind physician validation panels.',
      'Shortened diagnostic literature verification cycles from 22 minutes to 15 seconds.',
      'Accredited by hospital ethics and clinical quality governance committees.'
    ]
  }
];

export const PORTFOLIO_HIGHLIGHTS = [
  {
    role: 'Principal AI Architect & Advisor',
    organization: 'Enterprise Strategic Advisory',
    period: '2021 — Present',
    description:
      'Advising Fortune 500 leadership and high-growth technology ventures on autonomous agent deployment, data infrastructure, and AI engineering operations.'
  },
  {
    role: 'Head of Engineering & Systems',
    organization: 'High-Throughput Automation Labs',
    period: '2018 — 2021',
    description:
      'Led 45+ distributed engineers building resilient event-driven systems processing over $3B in annual transaction volume.'
  },
  {
    role: 'Lead Data Architect',
    organization: 'Cloud Analytics Infrastructure',
    period: '2015 — 2018',
    description:
      'Designed real-time streaming architectures, distributed vector indices, and scalable warehouse pipelines for enterprise clients.'
  }
];
