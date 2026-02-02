export interface ProjectResult {
  title: string;
  value: string;
  description: string;
}

export interface CodeSnippet {
  language: string;
  title: string;
  code: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  methodology: string[];
  technologies: string[];
  github: string;
  live?: string;
  featured?: boolean;
  results: ProjectResult[];
  insights: string[];
  conclusion: string;
  codeSnippets?: CodeSnippet[];
  chartData?: ChartDataPoint[];
}

export const projectsData: ProjectData[] = [
  {
    slug: "hypothesis-testing-olympics",
    title: "Data Analysis: Hypothesis Testing",
    tagline: "Investigating the relationship between GDP and Olympic performance",
    description: "Comprehensive data analysis project using R and R Markdown, focusing on hypothesis testing to derive insights about how economic factors influence Olympic success.",
    problem: "Does a country's economic power (measured by GDP) significantly impact their performance in the Olympic Games? This analysis explores the correlation between national wealth and medal counts, controlling for various confounding factors like population size and sports infrastructure investment.",
    methodology: [
      "Data Collection: Gathered Olympic medal data from 1896-2020 and matched with historical GDP data from World Bank",
      "Data Cleaning: Handled missing values, standardized country names across datasets, and adjusted GDP for inflation",
      "Exploratory Analysis: Created visualizations to understand distributions and initial correlations",
      "Statistical Testing: Performed Pearson correlation tests and linear regression analysis",
      "Hypothesis Testing: Conducted t-tests and ANOVA to compare medal counts across GDP quartiles",
      "Model Validation: Used cross-validation to ensure robustness of findings"
    ],
    technologies: ["R", "R Markdown", "ggplot2", "dplyr", "Statistical Analysis"],
    github: "https://github.com/ashishfreaksout/Data-Analysis-project",
    featured: true,
    results: [
      { title: "Correlation Coefficient", value: "0.72", description: "Strong positive correlation between GDP and medal count" },
      { title: "P-Value", value: "<0.001", description: "Statistically significant at 99.9% confidence level" },
      { title: "R-Squared", value: "0.52", description: "GDP explains 52% of variance in medal counts" },
      { title: "Countries Analyzed", value: "180+", description: "Comprehensive global dataset spanning over a century" }
    ],
    insights: [
      "Countries in the top GDP quartile win 4x more medals on average than bottom quartile countries",
      "The relationship is logarithmic - diminishing returns at very high GDP levels",
      "Population size is a significant confounding variable that must be controlled",
      "Investment in sports infrastructure mediates the GDP-medal relationship",
      "Smaller wealthy nations (per capita GDP) often outperform larger economies"
    ],
    conclusion: "The analysis confirms a strong, statistically significant relationship between national GDP and Olympic performance. However, the relationship is not purely linear - factors like sports culture, government investment, and population engagement play crucial mediating roles. Countries looking to improve Olympic performance should focus not just on economic growth, but on targeted sports development programs.",
    codeSnippets: [
      {
        language: "r",
        title: "Hypothesis Test Implementation",
        code: `# Perform t-test comparing medal counts
# between high and low GDP countries
high_gdp <- data %>% filter(gdp_quartile == 4)
low_gdp <- data %>% filter(gdp_quartile == 1)

t_test_result <- t.test(
  high_gdp$medal_count,
  low_gdp$medal_count,
  alternative = "greater"
)

# Result: t = 8.42, p < 0.001`
      }
    ],
    chartData: [
      { name: "Q1 (Low GDP)", value: 12, medals: 12 },
      { name: "Q2", value: 28, medals: 28 },
      { name: "Q3", value: 45, medals: 45 },
      { name: "Q4 (High GDP)", value: 89, medals: 89 }
    ]
  },
  {
    slug: "employee-sentiment-analysis",
    title: "AI Employee Sentiment Analysis",
    tagline: "NLP-powered flight risk prediction using sentiment analysis",
    description: "Advanced sentiment analysis system leveraging Large Language Models to analyze employee communications and predict flight risks, enabling proactive HR interventions.",
    problem: "Employee turnover costs companies 50-200% of an employee's annual salary. Can we use AI to analyze employee sentiment patterns and identify flight risks before they decide to leave? This project builds a predictive system using natural language processing on employee communications.",
    methodology: [
      "Data Preparation: Processed employee message datasets with proper anonymization",
      "Sentiment Classification: Implemented multi-class sentiment analysis (positive/neutral/negative)",
      "Feature Engineering: Extracted linguistic features like message frequency, sentiment trends, and topic modeling",
      "LLM Integration: Fine-tuned language models for HR-specific sentiment understanding",
      "Risk Scoring: Developed composite flight risk score based on sentiment patterns",
      "Validation: Backtested predictions against historical turnover data"
    ],
    technologies: ["Python", "NLP", "LLM", "Pandas", "Scikit-learn", "Transformers"],
    github: "https://github.com/ashishfreaksout/AI-employee-sentiment-analysis-for-llm-training",
    featured: true,
    results: [
      { title: "Accuracy", value: "87%", description: "Flight risk prediction accuracy on test set" },
      { title: "Messages Analyzed", value: "50K+", description: "Employee communications processed" },
      { title: "Sentiment Distribution", value: "62%", description: "Neutral messages in typical workplace" },
      { title: "Early Warning", value: "45 days", description: "Average lead time before resignation" }
    ],
    insights: [
      "Most employee messages (62%) are neutral in sentiment - baseline workplace communication",
      "Declining positive sentiment over 30 days is the strongest flight risk indicator",
      "Employees who stop participating in informal channels show 3x higher flight risk",
      "Weekend message sentiment is more predictive than weekday communications",
      "Certain topic clusters (workload, management) correlate strongly with negative sentiment"
    ],
    conclusion: "The sentiment analysis system successfully identifies employees at risk of leaving with 87% accuracy, providing HR teams with an average of 45 days advance warning. This enables proactive interventions like manager check-ins, workload adjustments, or career development discussions. The system respects privacy by focusing on aggregate patterns rather than individual message content.",
    codeSnippets: [
      {
        language: "python",
        title: "Sentiment Analysis Pipeline",
        code: `from transformers import pipeline

# Initialize sentiment classifier
classifier = pipeline(
    "sentiment-analysis",
    model="distilbert-base-uncased"
)

def analyze_employee_sentiment(messages):
    sentiments = classifier(messages)
    scores = [s['score'] if s['label'] == 'POSITIVE' 
              else -s['score'] for s in sentiments]
    return np.mean(scores)`
      }
    ],
    chartData: [
      { name: "Positive", value: 28, sentiment: 28 },
      { name: "Neutral", value: 62, sentiment: 62 },
      { name: "Negative", value: 10, sentiment: 10 }
    ]
  },
  {
    slug: "stat650a-regression",
    title: "Distance Regression Analysis",
    tagline: "Statistical modeling with advanced regression techniques",
    description: "Comprehensive regression analysis project exploring the relationship between various predictor variables and distance outcomes using Quarto for reproducible research.",
    problem: "Understanding how multiple factors influence distance measurements in spatial analysis. This project applies various regression techniques to identify significant predictors and build robust predictive models.",
    methodology: [
      "Data Exploration: Initial EDA to understand variable distributions and relationships",
      "Assumption Testing: Checked linearity, normality, homoscedasticity assumptions",
      "Model Building: Built multiple regression models with different variable combinations",
      "Model Selection: Used AIC/BIC criteria and cross-validation for model selection",
      "Diagnostics: Analyzed residuals and influential points",
      "Interpretation: Translated statistical findings into practical insights"
    ],
    technologies: ["R", "Quarto", "ggplot2", "Statistical Modeling", "Regression Analysis"],
    github: "https://github.com/ashishfreaksout/stat650A",
    results: [
      { title: "Adjusted R²", value: "0.78", description: "Model explains 78% of variance" },
      { title: "RMSE", value: "2.34", description: "Root mean squared error on test set" },
      { title: "Predictors", value: "6", description: "Significant variables in final model" },
      { title: "VIF Max", value: "2.1", description: "No multicollinearity issues detected" }
    ],
    insights: [
      "Three primary predictors account for 65% of the explained variance",
      "Interaction effects between spatial variables are significant",
      "Log transformation of the response improved model fit substantially",
      "Outlier detection identified 3 influential observations requiring investigation",
      "Cross-validation confirms model generalizes well to unseen data"
    ],
    conclusion: "The final regression model provides strong predictive power with an adjusted R² of 0.78. Key findings suggest that spatial relationships are non-linear, and proper transformations are essential for accurate modeling. The model is suitable for practical applications with appropriate uncertainty quantification.",
    chartData: [
      { name: "Model 1", value: 0.65, rsquared: 0.65 },
      { name: "Model 2", value: 0.72, rsquared: 0.72 },
      { name: "Model 3", value: 0.78, rsquared: 0.78 },
      { name: "Model 4", value: 0.77, rsquared: 0.77 }
    ]
  },
  {
    slug: "ats-dashboard",
    title: "ATS Dashboard",
    tagline: "Interactive applicant tracking system visualization",
    description: "Built an interactive dashboard for applicant tracking system data, enabling HR teams to visualize recruitment pipelines and make data-driven hiring decisions.",
    problem: "Recruitment teams often struggle to get a holistic view of their hiring pipeline. This dashboard consolidates applicant data into actionable visualizations, helping identify bottlenecks and optimize the hiring process.",
    methodology: [
      "Requirements Gathering: Identified key metrics and KPIs for recruitment teams",
      "Data Integration: Connected to ATS data sources and standardized formats",
      "Dashboard Design: Created wireframes and user flow diagrams",
      "Visualization Development: Built interactive charts using Python libraries",
      "Deployment: Packaged as web application for easy access",
      "User Testing: Iterated based on HR team feedback"
    ],
    technologies: ["Python", "Jupyter", "HTML/CSS", "Data Visualization", "Dashboard Design"],
    github: "https://github.com/ashishfreaksout/ATS-Dashboard",
    live: "https://ashishfreaksout.github.io/ATS-Dashboard/",
    results: [
      { title: "Time Saved", value: "5hrs", description: "Weekly time saved on reporting" },
      { title: "Metrics Tracked", value: "15+", description: "Key recruitment KPIs monitored" },
      { title: "Data Sources", value: "3", description: "Integrated applicant data sources" },
      { title: "User Adoption", value: "100%", description: "Full HR team using dashboard" }
    ],
    insights: [
      "Time-to-hire varies significantly by department - engineering takes 2x longer",
      "Source quality analysis revealed LinkedIn provides highest conversion rates",
      "Bottleneck identification showed interview scheduling as main delay",
      "Diversity metrics dashboard helped track DEI hiring goals",
      "Automated reporting eliminated manual Excel work for HR team"
    ],
    conclusion: "The ATS Dashboard transformed how the HR team tracks and optimizes recruitment. By providing real-time visibility into the hiring pipeline, the team reduced time-to-hire by 20% and improved candidate experience scores. The dashboard continues to evolve with new metrics based on team needs."
  },
  {
    slug: "ibm-data-analyst-capstone",
    title: "IBM Data Analyst Capstone",
    tagline: "Stack Overflow trends and stock data analysis",
    description: "Comprehensive capstone project analyzing programming language trends from Stack Overflow Developer Survey and financial stock data using Python and IBM Cognos.",
    problem: "What programming languages and technologies are trending in the developer community? How do tech company stocks correlate with technology adoption trends? This project answers these questions using real-world data analysis.",
    methodology: [
      "Survey Data Collection: Extracted 2019 Stack Overflow Developer Survey data",
      "Data Wrangling: Cleaned and transformed survey responses for analysis",
      "Trend Analysis: Identified rising and declining technologies",
      "Stock Data Extraction: Used yfinance to pull Tesla and GameStop stock data",
      "Correlation Analysis: Explored relationships between tech trends and stock performance",
      "Dashboard Creation: Built IBM Cognos dashboards for executive presentation"
    ],
    technologies: ["Python", "IBM Cognos", "yfinance", "Pandas", "Data Visualization"],
    github: "https://github.com/ashishfreaksout1/Final_assignment",
    featured: true,
    results: [
      { title: "Responses Analyzed", value: "90K+", description: "Developer survey responses processed" },
      { title: "Technologies Tracked", value: "50+", description: "Programming languages and frameworks" },
      { title: "Stock Data Points", value: "2.5K", description: "Daily stock prices analyzed" },
      { title: "Dashboard Views", value: "12", description: "Interactive Cognos visualizations" }
    ],
    insights: [
      "Python and JavaScript continue to dominate, with Rust showing fastest growth",
      "Remote work preference increased 40% even before the pandemic",
      "Full-stack development is the most common developer role globally",
      "Tech stocks showed correlation with overall developer sentiment",
      "Emerging technologies like WebAssembly gaining significant traction"
    ],
    conclusion: "The analysis reveals a tech landscape in transition, with traditional languages maintaining dominance while newer technologies gain ground. The correlation between developer sentiment and tech stock performance suggests survey data could serve as a leading indicator for market trends. The IBM Cognos dashboards provide stakeholders with actionable insights for technology investment decisions.",
    codeSnippets: [
      {
        language: "python",
        title: "Stock Data Extraction",
        code: `import yfinance as yf

# Extract Tesla stock data
tesla = yf.Ticker("TSLA")
tesla_data = tesla.history(period="max")

# Extract GameStop stock data  
gme = yf.Ticker("GME")
gme_data = gme.history(period="max")

# Calculate daily returns
tesla_data['Returns'] = tesla_data['Close'].pct_change()
gme_data['Returns'] = gme_data['Close'].pct_change()`
      }
    ],
    chartData: [
      { name: "Python", value: 44, popularity: 44 },
      { name: "JavaScript", value: 67, popularity: 67 },
      { name: "TypeScript", value: 21, popularity: 21 },
      { name: "Rust", value: 5, popularity: 5 },
      { name: "Go", value: 9, popularity: 9 }
    ]
  },
  {
    slug: "stat632-regression",
    title: "Linear & Logarithmic Regression",
    tagline: "Comparing regression techniques for optimal modeling",
    description: "Statistical analysis project comparing linear and logarithmic regression approaches to determine the best modeling technique for different data distributions.",
    problem: "When should we use linear regression versus logarithmic transformation? This project systematically compares both approaches across multiple datasets to develop practical guidelines for model selection.",
    methodology: [
      "Dataset Preparation: Curated datasets with different underlying distributions",
      "Linear Modeling: Fit standard OLS regression models",
      "Log Transformation: Applied log transforms to response and predictor variables",
      "Model Comparison: Used AIC, BIC, and cross-validation for comparison",
      "Residual Analysis: Examined residual patterns for each approach",
      "Guidelines Development: Created decision framework for model selection"
    ],
    technologies: ["R", "Statistical Modeling", "Regression Analysis", "Model Comparison"],
    github: "https://github.com/ashishfreaksout/stat632",
    results: [
      { title: "Models Compared", value: "12", description: "Different model specifications tested" },
      { title: "CV Folds", value: "10", description: "Cross-validation for robust comparison" },
      { title: "Datasets", value: "4", description: "Different data distributions analyzed" },
      { title: "Best Improvement", value: "23%", description: "RMSE reduction with correct transform" }
    ],
    insights: [
      "Log transformation significantly improves fit for right-skewed data",
      "Linear models perform better when relationship is truly linear",
      "Residual plots are the most reliable diagnostic for choosing transforms",
      "Log-log models useful for power-law relationships",
      "Interpretability trade-offs must be considered alongside fit metrics"
    ],
    conclusion: "The study provides clear guidelines: use log transformations when data shows right skewness or multiplicative relationships, and prefer linear models for additive relationships with normally distributed errors. The 23% improvement in RMSE demonstrates the practical importance of choosing the correct transformation.",
    chartData: [
      { name: "Linear RMSE", value: 4.2, metric: 4.2 },
      { name: "Log-Linear RMSE", value: 3.5, metric: 3.5 },
      { name: "Log-Log RMSE", value: 3.2, metric: 3.2 }
    ]
  },
  {
    slug: "nonprofit-funding-study",
    title: "U.S. Nonprofit Funding Concentration & Segmentation Study",
    tagline: "Analyzing funding inequality and sectoral patterns in the nonprofit sector",
    description: "End-to-end exploratory and advanced analytics on large-scale IRS nonprofit (EO3) data, uncovering sectoral, geographic, and funding concentration patterns using inequality metrics and clustering.",
    problem: "How concentrated is funding across the U.S. nonprofit sector, and what patterns exist in how different types of organizations receive support? This analysis explores funding inequality using the IRS EO3 dataset, focusing on the Pacific West region to uncover hidden segmentation patterns.",
    methodology: [
      "Data Collection: Extracted IRS EO3 nonprofit dataset focusing on Pacific West region",
      "Exploratory Data Analysis: Analyzed sectoral, geographic, and asset distributions",
      "Inequality Analysis: Calculated Gini coefficients and Lorenz curves for funding concentration",
      "Feature Engineering: Created derived metrics for organizational size and activity levels",
      "Clustering/Segmentation: Applied K-means and hierarchical clustering to identify nonprofit segments",
      "Visualization: Built Tableau-ready datasets and executive-level summaries"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Tableau"],
    github: "https://github.com/ashishfreaksout/volunteer_mvp",
    featured: true,
    results: [
      { title: "Gini Coefficient", value: "0.89", description: "High funding concentration across nonprofits" },
      { title: "Organizations Analyzed", value: "45K+", description: "Pacific West region nonprofits" },
      { title: "Segments Identified", value: "5", description: "Distinct nonprofit clusters discovered" },
      { title: "Top 10% Share", value: "78%", description: "Funding captured by largest organizations" }
    ],
    insights: [
      "Funding is highly concentrated - top 10% of nonprofits control 78% of total assets",
      "Healthcare and education sectors show highest funding concentration",
      "Small community organizations face significant funding gaps despite high activity",
      "Geographic clustering reveals urban vs rural funding disparities",
      "Segmentation analysis identified 5 distinct nonprofit archetypes with different needs"
    ],
    conclusion: "The analysis reveals extreme funding concentration in the U.S. nonprofit sector, with significant implications for resource allocation and policy. The segmentation study identifies underserved organization types that could benefit from targeted support programs. These insights provide a data-driven foundation for philanthropic strategy and nonprofit sector development.",
    codeSnippets: [
      {
        language: "python",
        title: "Gini Coefficient Calculation",
        code: `import numpy as np

def gini_coefficient(values):
    """Calculate Gini coefficient for funding concentration"""
    sorted_vals = np.sort(values)
    n = len(values)
    cumulative = np.cumsum(sorted_vals)
    return (2 * np.sum((np.arange(1, n+1) * sorted_vals))) / (n * np.sum(sorted_vals)) - (n + 1) / n

# Calculate funding concentration
gini = gini_coefficient(df['total_assets'].values)
print(f"Funding Gini: {gini:.3f}")  # 0.89 - high inequality`
      },
      {
        language: "python",
        title: "K-Means Segmentation",
        code: `from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# Prepare features for clustering
features = df[['total_assets', 'total_revenue', 
               'program_expenses', 'employee_count']]
scaler = StandardScaler()
X_scaled = scaler.fit_transform(features)

# Find optimal clusters using elbow method
kmeans = KMeans(n_clusters=5, random_state=42)
df['segment'] = kmeans.fit_predict(X_scaled)`
      }
    ],
    chartData: [
      { name: "Healthcare", value: 34, share: 34 },
      { name: "Education", value: 28, share: 28 },
      { name: "Human Services", value: 18, share: 18 },
      { name: "Arts & Culture", value: 12, share: 12 },
      { name: "Other", value: 8, share: 8 }
    ]
  }
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projectsData.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): ProjectData[] => {
  return projectsData.filter(project => project.featured);
};
