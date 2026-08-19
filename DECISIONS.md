# DECISIONS

## 1. Why this ingestion strategy over the obvious alternative I rejected

For this assignment, I used a **file-based, reproducible ingestion path** for the provided credit-card dataset: load the source data into a pandas preprocessing pipeline, clean/standardize the behavioral features, and then feed the processed data into the K-Means/PCA analysis.

I chose this over requiring a live database/API ingestion layer because the assignment is about proving the **product, analysis, and decision-making experience**, not building production data infrastructure. A file-based pipeline is faster to ship, easier to reproduce locally and in deployment, and keeps the analytical results tied directly to the supplied dataset. In a real production system, I would move the same validation and transformation logic behind a versioned ingestion service connected to a governed data source.

## 2. One trade-off I made under the time limit, and what I’d do with a real week

The biggest trade-off was **depth of engineering vs. polish and end-to-end delivery**. I prioritized getting the full journey working — customer segmentation, business insights, ROI simulation, responsive homepage, and deployment — instead of spending the remaining time building a more sophisticated data pipeline, extensive automated tests, and production-grade observability.

With a real week, I would add automated data/schema validation, stronger unit and integration tests, clearer model-evaluation reporting (including why the chosen K is appropriate), improved error handling, and a cleaner separation between the data, model, and UI layers. I would also run a more systematic mobile/accessibility/performance review before release.

## 3. Where I used AI tools, and what I personally verified or changed afterward

I used AI tools mainly as **accelerators, not as the source of truth**. I used ChatGPT for product positioning, UX copy, information architecture, implementation prompts, and review of the homepage against the assignment requirements; I also used image-generation assistance for the SpendPulse logo/branding direction and coding assistance to iterate on the frontend.

Afterward, I personally verified the important parts: the dataset size and cluster percentages, the wording of business claims, the ROI numbers, the navigation and dashboard links, the overall user flow, and the visual consistency between the homepage and the analytical app. I also removed or changed AI-suggested copy whenever it felt exaggerated or unsupported — especially claims that could imply real customers, guaranteed revenue, or proven business outcomes. The final decisions were based on the actual project behavior, dataset, and assignment constraints.
