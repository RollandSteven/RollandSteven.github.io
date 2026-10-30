// To add a project: append one object below. The list page and detail page are generated automatically.
export type Project = {
  slug: string; title: string; status: "Planned" | "In progress" | "Shipped"; featured: boolean;
  summary: string; problem: string; approach: string; stack: string[]; repo?: string; demo?: string;
};
export const projects: Project[] = [
  { slug: "payment-ledger-api", title: "Payment ledger API", status: "Planned", featured: true,
    summary: "Double-entry ledger and payment API built for correctness under retries and failures.",
    problem: "Payment systems must never lose, duplicate or misstate money, even when clients retry and services fail.",
    approach: "Double-entry postings, idempotency keys on every write, webhook delivery with retries, and a reconciliation job that flags mismatches. Load tests will back the claims.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"] },
  { slug: "treasury-position-system", title: "Treasury position system", status: "Planned", featured: true,
    summary: "Simulated FX and money-market position, mark-to-market and limit monitoring.",
    problem: "Dealers need current positions, P&L and limit usage across trades.",
    approach: "Built on synthetic data only. Trade capture, position aggregation, MTM from a simulated price feed, and limit alerts with an audit trail.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "React"] },
  { slug: "api-reliability-lab", title: "API reliability lab", status: "Planned", featured: false,
    summary: "Small experiments on rate limiting, caching and retries, each with measured results.",
    problem: "Many APIs look fine until traffic or failures arrive.",
    approach: "One short experiment at a time, with a benchmark before and after and an honest write-up.",
    stack: ["Java", "k6", "Docker"] },
];
