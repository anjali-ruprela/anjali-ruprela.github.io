export const profile = {
  name: "Anjali Ruprela",
  role: "Data Analyst",
  location: "Raipur, Chhattisgarh",
  email: "anjali.ruprela@gmail.com",
  linkedin: "https://www.linkedin.com/in/anjali-ruprela",
  github: "https://github.com/anjali-ruprela",
  calendly: "https://calendly.com/anjali-ruprela/intro-call",
  resume: "/Anjali-Ruprela-Resume.pdf",
  headline: "Turning Data Into Actionable Insights",
  subheadline:
    "Aspiring Data Analyst skilled in Python, SQL, Power BI, Statistics, and Machine Learning. Passionate about solving business problems through data-driven decision making.",
  about:
    "Aspiring Data Analyst with strong foundations in Data Analysis, Machine Learning, Statistics, SQL, Python, and Power BI. Passionate about extracting insights from complex datasets and creating impactful dashboards that support business decisions.",
};

export const heroRoles = [
  "Data Analyst",
  "Business Analyst",
  "Junior Data Scientist",
  "Dashboard Builder",
];

export const stats = [
  { label: "Years learning data", value: 2, suffix: "+" },
  { label: "Projects shipped", value: 4, suffix: "" },
  { label: "Certifications", value: 2, suffix: "" },
  { label: "Tools & libraries", value: 15, suffix: "+" },
];

export type SkillGroup = {
  category: string;
  accent: "brand" | "teal" | "gold";
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    accent: "brand",
    skills: [
      { name: "Python", level: 88 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    category: "Data Analysis",
    accent: "teal",
    skills: [
      { name: "Pandas", level: 86 },
      { name: "NumPy", level: 82 },
      { name: "Excel", level: 90 },
    ],
  },
  {
    category: "Visualization",
    accent: "brand",
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 80 },
    ],
  },
  {
    category: "Statistics",
    accent: "gold",
    skills: [
      { name: "Regression", level: 82 },
      { name: "Clustering", level: 80 },
      { name: "Hypothesis Testing", level: 84 },
      { name: "A/B Testing", level: 81 },
      { name: "ANOVA", level: 78 },
    ],
  },
  {
    category: "Tools",
    accent: "teal",
    skills: [
      { name: "Git", level: 80 },
      { name: "TPOT", level: 72 },
      { name: "H2O.ai", level: 70 },
      { name: "AutoSklearn", level: 70 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tag: "Dashboard" | "SQL" | "Machine Learning" | "Statistics";
  blurb: string;
  problem: string;
  dataset: string;
  approach: string[];
  tools: string[];
  results: { label: string; value: string }[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Sales Analysis & Dashboard",
    tag: "Dashboard",
    blurb:
      "Interactive Power BI dashboard tracking revenue, profit, and customer behavior across an online retail catalog.",
    problem:
      "Leadership lacked a single view of sales performance, making it hard to spot declining categories and high-value customers in time to act.",
    dataset:
      "Online Retail transactions — ~540K rows of orders, products, quantities, and customer geographies.",
    approach: [
      "Cleaned and de-duplicated raw transactions in Python and SQL",
      "Engineered revenue, profit, and basket-size metrics",
      "Built sales-trend, category, and cohort views in Power BI",
      "Added slicers for region, time, and customer segment",
    ],
    tools: ["Power BI", "Python", "Pandas", "SQL"],
    results: [
      { label: "Revenue visibility", value: "Daily" },
      { label: "Top-category lift surfaced", value: "+18%" },
      { label: "Reporting time saved", value: "-70%" },
    ],
    github: "https://github.com/anjali-ruprela/ecommerce-sales-dashboard",
    demo: "https://app.powerbi.com/view?demo=ecommerce",
  },
  {
    id: "sql-performance",
    title: "SQL Business Performance Analysis",
    tag: "SQL",
    blurb:
      "Advanced SQL analysis of revenue trends and customer retention using window functions and CTEs.",
    problem:
      "The business needed retention and revenue-trend metrics directly from the database without exporting to spreadsheets.",
    dataset:
      "Relational sales schema — orders, customers, and payments across 24 months.",
    approach: [
      "Wrote layered CTEs to model monthly revenue",
      "Used window functions for running totals and rank",
      "Built cohort retention with self-joins",
      "Validated results against finance reports",
    ],
    tools: ["PostgreSQL", "SQL Window Functions", "CTEs"],
    results: [
      { label: "Retention cohorts modeled", value: "24 mo" },
      { label: "Query suite", value: "20+" },
      { label: "Manual exports removed", value: "100%" },
    ],
    github: "https://github.com/anjali-ruprela/sql-business-performance",
    demo: "https://github.com/anjali-ruprela/sql-business-performance#queries",
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation",
    tag: "Machine Learning",
    blurb:
      "K-Means clustering on purchasing behavior to drive targeted marketing recommendations.",
    problem:
      "Marketing was treating all customers the same, wasting spend on low-intent segments.",
    dataset:
      "Mall customer dataset — demographics, annual income, and spending score.",
    approach: [
      "Standardized features and chose k via the elbow method",
      "Trained K-Means and profiled each cluster",
      "Visualized segments with Matplotlib and Seaborn",
      "Mapped clusters to marketing actions",
    ],
    tools: ["Python", "scikit-learn", "Seaborn", "Matplotlib"],
    results: [
      { label: "Segments identified", value: "5" },
      { label: "High-value cluster", value: "Found" },
      { label: "Targeting clarity", value: "High" },
    ],
    github: "https://github.com/anjali-ruprela/customer-segmentation",
    demo: "https://github.com/anjali-ruprela/customer-segmentation#results",
  },
  {
    id: "ab-testing",
    title: "A/B Testing Analysis",
    tag: "Statistics",
    blurb:
      "Experiment design and statistical testing to measure conversion-rate impact of a landing-page change.",
    problem:
      "The team wanted to know whether a new landing page genuinely lifted conversions or if the change was noise.",
    dataset:
      "A/B experiment log — control vs. treatment sessions with conversion flags.",
    approach: [
      "Defined hypotheses and minimum detectable effect",
      "Checked sample-ratio mismatch and power",
      "Ran a two-proportion z-test for significance",
      "Reported lift with confidence intervals",
    ],
    tools: ["Python", "SciPy", "Statsmodels", "Pandas"],
    results: [
      { label: "Significance", value: "p < 0.05" },
      { label: "Conversion lift", value: "+12%" },
      { label: "Decision", value: "Ship" },
    ],
    github: "https://github.com/anjali-ruprela/ab-testing-analysis",
    demo: "https://github.com/anjali-ruprela/ab-testing-analysis#findings",
  },
];

export const certifications = [
  {
    title: "IBM Data Analyst Professional Certificate",
    issuer: "IBM · Coursera",
    blurb:
      "Hands-on track across Excel, SQL, Python, and data visualization with a capstone dashboard.",
    verify: "https://www.coursera.org/account/accomplishments/professional-cert",
  },
  {
    title: "Decodr Machine Learning Certificate",
    issuer: "Decodr Technologies",
    blurb:
      "Applied machine learning covering supervised models, clustering, and model evaluation.",
    verify: "https://decodr.in/verify",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Pt. Ravishankar Shukla University",
    place: "Raipur, Chhattisgarh",
    period: "2021 — 2024",
    detail:
      "Foundations in programming, databases, and statistics — the launchpad for an analytics career.",
  },
];

export const journey = [
  {
    phase: "01",
    title: "SQL Learning",
    desc: "Joins, aggregations, window functions, and CTEs — querying real schemas with confidence.",
    skills: ["SQL", "PostgreSQL", "Window Functions"],
  },
  {
    phase: "02",
    title: "Python Projects",
    desc: "Cleaning, wrangling, and exploring datasets with Pandas and NumPy end to end.",
    skills: ["Python", "Pandas", "NumPy"],
  },
  {
    phase: "03",
    title: "Dashboard Development",
    desc: "Designing decision-ready Power BI dashboards with KPIs, slicers, and clean visual hierarchy.",
    skills: ["Power BI", "DAX", "Storytelling"],
  },
  {
    phase: "04",
    title: "Machine Learning Path",
    desc: "Regression, clustering, and A/B testing — moving from description to prediction.",
    skills: ["scikit-learn", "Statistics", "AutoML"],
  },
];
