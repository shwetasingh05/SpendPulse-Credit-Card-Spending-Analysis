# 💳 SpendPulse — Credit Card Spending Analysis

### Customer Intelligence & Decision Support using Machine Learning

**SpendPulse** is a customer intelligence and decision-support project that analyzes credit card spending behavior to identify meaningful customer segments and translate those segments into actionable business strategies.

The project uses **unsupervised machine learning with K-Means clustering**, supported by feature transformation and **PCA**, to group **8,950 credit card customers** into three distinct behavioral segments.

> **The goal isn't just to find clusters — it's to understand what the clusters mean and what a business should do next.**

---

## 🚀 Live Project

🌐 **Live Dashboard:**
https://spending-cluster.streamlit.app/

💻 **GitHub Repository:**
https://github.com/shwetasingh05/SpendPulse-Credit-Card-Spending-Analysis

---

## 📌 Project Overview

Credit card companies have large amounts of customer transaction data, but raw transaction records do not directly explain **how customers behave** or **which customers represent the greatest growth opportunities**.

SpendPulse addresses this by transforming customer-level behavioral data into:

* Customer segments
* Behavioral personas
* Business insights
* Targeting strategies
* Campaign simulations
* ROI and break-even analysis

The project follows an end-to-end analytical workflow:

```text
Raw Customer Data
        ↓
Data Cleaning
        ↓
Feature Transformation
        ↓
Feature Scaling
        ↓
K-Means Clustering
        ↓
PCA Visualization
        ↓
Customer Segmentation
        ↓
Business Insights
        ↓
Campaign Strategy
        ↓
ROI Simulation
```

---

# 🎯 Key Findings

The analysis identified **three major customer behavior segments**:

| Customer Segment                 | Customers |    Share |
| -------------------------------- | --------: | -------: |
| 🟢 Active Transactors            |     1,275 |    14.2% |
| 🟠 Cash Advance Revolvers        |     1,561 |    17.4% |
| 🔵 Inactive / Low-Activity Users |     6,114 |    68.3% |
| **Total**                        | **8,950** | **100%** |

### 🔎 The biggest discovery

**68.3% of customers are classified as inactive or low-activity users.**

This changes the business question from:

> "How do we acquire more customers?"

to:

> **"How do we activate the customers we already have?"**

---

# 👥 Customer Segments

## 🟢 1. Active Transactors

**1,275 customers — 14.2%**

These customers actively use their credit cards, make purchases regularly, and demonstrate relatively consistent payment behavior.

### Characteristics

* High purchase activity
* Low dependence on cash advances
* Consistent spending behavior
* Regular credit-card usage

### Business Opportunity

**Retention & loyalty**

Potential strategies:

* Premium rewards
* Personalized offers
* Travel benefits
* Loyalty campaigns
* Relevant limit increases

---

## 🟠 2. Cash Advance Revolvers

**1,561 customers — 17.4%**

These customers show greater dependence on cash advances and tend to maintain higher balances.

### Characteristics

* Frequent cash withdrawals
* Higher balance ratios
* Greater cash-advance dependence
* Potentially higher repayment risk

### Business Opportunity

**Balance revenue vs. risk**

Potential strategies:

* Risk-aware offers
* Balance-management programs
* Personalized financial products
* Carefully targeted credit strategies

---

## 🔵 3. Inactive / Low-Activity Users

**6,114 customers — 68.3%**

This is the largest segment.

These customers have available credit but demonstrate relatively little card activity.

### Characteristics

* Low transaction volume
* Low spending activity
* Minimal balances
* Significant dormant credit availability

### Business Opportunity

**Customer reactivation**

Potential strategies:

* Re-engagement campaigns
* Personalized incentives
* Limited-time offers
* Category-specific rewards
* Usage-based campaigns

---

# 🧠 Machine Learning Approach

SpendPulse uses **unsupervised learning** because predefined customer labels were not available.

### K-Means Clustering

K-Means was used to group customers based on similarities in their behavioral characteristics.

The selected model uses:

```text
K = 3
```

resulting in three customer behavior clusters.

### Why K-Means?

K-Means was selected because the primary objective was to discover naturally occurring customer groups based on behavioral similarity rather than predict an existing target variable.

---

# 📊 Feature Engineering

The analytical pipeline includes:

### 1. Data Cleaning

Raw customer records are cleaned and standardized before modeling.

### 2. Feature Transformation

Skewed financial and transaction variables are transformed to reduce the influence of extreme values.

### 3. Scaling

Features are normalized so that variables with larger numerical ranges do not dominate the clustering algorithm.

### 4. K-Means

Customers are grouped according to behavioral similarity.

### 5. PCA

**Principal Component Analysis (PCA)** is used to reduce the dimensionality of the feature space and visualize customer clusters.

The project maps **17 attributes into a 2D PCA representation** for easier interpretation.

---

# 💰 ROI Simulator

One of the key features of SpendPulse is that it goes beyond descriptive analytics.

The project includes an interactive **ROI Simulator** that allows users to test whether a proposed customer activation campaign could actually make financial sense.

Users can modify:

* Target audience percentage
* Estimated conversion rate
* Incentive cost per customer
* Revenue per converted customer

The simulator calculates:

* Targeted customers
* Converted customers
* Campaign cost
* Gross revenue increase
* Net impact
* Estimated ROI
* Break-even conversion rate
* Required revenue per converted customer

### Example

The default scenario demonstrates that simply targeting a large inactive segment does **not automatically guarantee a profitable campaign**.

This introduces an important principle:

> **A good customer segment is not necessarily a good business decision.**

The economics of the campaign must also work.

---

# 🖥️ Interactive Product Experience

SpendPulse includes a product-style web interface rather than presenting the analysis only as a notebook.

The landing page provides:

* Customer intelligence overview
* Segment breakdown
* Behavioral personas
* Decision framework
* Interactive segment predictor
* ROI simulator
* Technical methodology
* Link to the full Streamlit dashboard

The interactive workspace allows users to experiment with variables such as:

* Credit balance
* Cash advance amount
* Total purchases
* Credit limit

and observe the resulting customer segment and recommended strategy.

---

# 🛠️ Tech Stack

### Data & Machine Learning

* **Python**
* **Pandas**
* **NumPy**
* **Scikit-learn**
* **K-Means Clustering**
* **PCA**

### Application & Visualization

* **Streamlit**
* HTML
* CSS
* JavaScript

### Development

* Git
* GitHub

---

# 📂 Repository Structure

```text
SpendPulse-Credit-Card-Spending-Analysis/
│
├── index.html              # SpendPulse landing page
├── style.css               # Landing page styling
├── app.js                  # Interactive frontend functionality
│
├── logo.jpg                # Project branding
├── spendpulse-logo.jpg     # SpendPulse logo
├── spendpulse-logo.svg     # SVG logo
│
├── DECISIONS.md            # Project decisions and trade-offs
│
└── README.md               # Project documentation
```

---

# 🔬 Decision Framework

SpendPulse follows a simple analytical-to-business framework:

```text
01 — Segment
     ↓
Who behaves similarly?

02 — Understand
     ↓
What makes the group different?

03 — Target
     ↓
Who should receive an offer?

04 — Simulate
     ↓
Would the campaign actually pay off?
```

This ensures that machine learning outputs are connected to actual business decisions.

---

# 💡 Business Insights

### Insight 1 — Activation may be a bigger opportunity than acquisition

With **68.3% of analyzed customers classified as inactive or low-activity**, there is a substantial existing customer base that could potentially be targeted for reactivation.

### Insight 2 — Different customers require different strategies

A single campaign strategy is unlikely to work equally well for active users, cash-advance users, and inactive customers.

### Insight 3 — Revenue opportunity must be balanced with risk

Cash-advance-heavy customers can represent revenue opportunities while simultaneously requiring more careful risk management.

### Insight 4 — Segmentation is only the first step

A useful ML model should help answer:

> **"What should we do next?"**

rather than simply:

> "What clusters did the algorithm produce?"

### Insight 5 — Campaign economics matter

The ROI simulator demonstrates that a large target population does not automatically translate into a profitable campaign.

---

# ⚙️ Getting Started

## Clone the Repository

```bash
git clone https://github.com/shwetasingh05/SpendPulse-Credit-Card-Spending-Analysis.git
cd SpendPulse-Credit-Card-Spending-Analysis
```

## Run the Landing Page

Because the landing page is built using HTML, CSS, and JavaScript, it can be opened directly in a browser.

You can also use VS Code's **Live Server** extension for local development.

## Explore the ML Dashboard

The complete analytical experience is available through the deployed Streamlit application:

```text
https://spending-cluster.streamlit.app/
```

---

# 📈 Project Highlights

| Area                     | Implementation                 |
| ------------------------ | ------------------------------ |
| Customer Segmentation    | K-Means                        |
| Dimensionality Reduction | PCA                            |
| Data Processing          | Pandas / NumPy                 |
| Feature Scaling          | MinMax / transformation        |
| Visualization            | PCA & interactive dashboard    |
| Product Layer            | HTML / CSS / JavaScript        |
| ML Application           | Streamlit                      |
| Business Analysis        | Customer personas & strategies |
| Decision Support         | ROI Simulator                  |
| Deployment               | Streamlit                      |

---

# 🤝 Why This Project Matters

SpendPulse demonstrates an end-to-end approach to **Data Science + Product Thinking**.

Instead of stopping at:

```text
Dataset → Model → Accuracy
```

the project focuses on:

```text
Dataset
   ↓
Behavioral Analysis
   ↓
Customer Segmentation
   ↓
Business Interpretation
   ↓
Targeting Strategy
   ↓
ROI Simulation
   ↓
Decision Support
```

This makes the project relevant to roles involving:

* Data Science
* Data Analytics
* Business Analytics
* Product Analytics
* Product Management
* Customer Intelligence
* FinTech Analytics
* Machine Learning

---

# 🧾 Project Decisions

For the reasoning behind the ingestion strategy, engineering trade-offs, AI-assisted development, and validation process, see:

**[DECISIONS.md](DECISIONS.md)**

The project intentionally prioritized an end-to-end analytical and product experience over building a production-grade data infrastructure layer within the available development time.

---

# ⚠️ Disclaimer

This project is an analytical and educational demonstration based on the provided dataset.

The customer segments, strategies, conversion rates, revenue assumptions, and ROI calculations are analytical simulations and should not be interpreted as guaranteed financial outcomes or real-world customer behavior.

---

# 👩‍💻 Author

### Shweta Singh

B.Tech — Computer Science & Engineering
Data Science | Machine Learning | Data Analytics | Product Thinking

---

## ⭐ If you found this project interesting

Feel free to explore the repository, experiment with the dashboard, and use the project as a reference for customer segmentation and business-focused machine learning.

**SpendPulse — From customer behavior to business decisions.**
