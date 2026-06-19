# EmpowerIQ: Understanding People Through Performance Patterns

## Overview

EmpowerIQ is an AI-powered employee performance intelligence platform designed to help organizations better understand workforce sentiment, productivity, engagement, and attrition risks.

The platform provides employees with a structured way to submit work updates and feedback while enabling managers and leadership teams to gain actionable insights through AI-driven analytics.

### Key Features

* Employee feedback and work diary submissions
* Real-time sentiment analysis using NLP
* Attrition risk prediction using Machine Learning
* Manager dashboards with team insights
* Leadership dashboards with organizational analytics
* Explainable AI using SHAP/LIME
* Role-based access and secure data handling

---

## Technology Stack

| Layer          | Technology                             |
| -------------- | -------------------------------------- |
| Frontend       | React + Material UI                    |
| Backend        | FastAPI                                |
| Database       | PostgreSQL                             |
| AI/ML          | Scikit-Learn, HuggingFace Transformers |
| Visualization  | Plotly                                 |
| Deployment     | Docker, Azure                          |
| Authentication | JWT                                    |

---

## Repository Structure

```text
my-work-diary-ai/
│
├── README.md
├── .gitignore
├── requirements.txt
│
├── docs/
│   ├── project-proposal.md
│   ├── architecture-diagram.png
│   ├── database-schema.md
│   └── sprint-plan.md
│
├── data/
│   ├── raw/
│   │   ├── employee_feedback.csv
│   │   ├── attrition_data.csv
│   │   └── performance_reviews.csv
│   │
│   ├── synthetic/
│   │   └── generated_employee_data.csv
│   │
│   └── processed/
│
├── database/
│   ├── schema.sql
│   ├── seed_data.sql
│   └── er-diagram.png
│
├── backend/
│   ├── app.py
│   ├── routes/
│   │   ├── employee.py
│   │   ├── manager.py
│   │   └── management.py
│   │
│   ├── models/
│   │   ├── employee.py
│   │   ├── feedback.py
│   │   └── attrition.py
│   │
│   └── services/
│       ├── sentiment_service.py
│       ├── attrition_service.py
│       └── report_service.py
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── EmployeePage.jsx
│   │   │   ├── ManagerDashboard.jsx
│   │   │   └── LeadershipDashboard.jsx
│   │   │
│   │   ├── components/
│   │   └── api/
│
├── ai/
│   ├── sentiment_analysis/
│   │   ├── train_sentiment.py
│   │   ├── sentiment_model.pkl
│   │   └── notebooks/
│   │
│   ├── attrition_prediction/
│   │   ├── train_attrition.py
│   │   ├── attrition_model.pkl
│   │   └── notebooks/
│   │
│   └── explainability/
│       ├── shap_analysis.py
│       └── lime_analysis.py
│
├── deployment/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── azure-deployment.md
│
└── tests/
```

---

## AI Modules

### 1. Employee Sentiment Analysis

Uses NLP models to classify employee feedback into:

* Positive
* Neutral
* Negative

Outputs:

* Sentiment score
* Sentiment trend
* Feedback summaries

### 2. Attrition Prediction

Uses employee engagement and performance signals to predict:

* Low Risk
* Medium Risk
* High Risk

Potential factors:

* Sentiment trends
* Promotion history
* Overtime
* Workload
* Performance ratings

### 3. Explainable AI

Provides transparency into predictions using:

* SHAP
* LIME

Example:

```text
Attrition Risk: High

Top Drivers:
- Increased negative sentiment
- Excessive overtime
- No promotion in 3 years
```

---

## User Roles

### Employee

* Submit feedback
* Maintain work diary
* Track sentiment trends
* View personal insights

### Manager

* Monitor team sentiment
* Review employee progress
* Identify engagement issues
* Receive attrition alerts

### Leadership

* Organization-wide analytics
* Attrition forecasting
* Workforce health metrics
* Process improvement recommendations

---

## Project Roadmap

### Phase 1

* Database schema
* Synthetic data generation
* Employee submission page

### Phase 2

* Sentiment analysis model
* Manager dashboard

### Phase 3

* Attrition prediction model
* Leadership dashboard

### Phase 4

* Explainable AI
* Cloud deployment
* Security and role management

---

## Expected Outcomes

* Improved transparency in performance management
* Real-time visibility into employee sentiment
* Early identification of attrition risks
* Better managerial decision-making
* Increased employee engagement
* Data-driven organizational improvements

---

## Team Vision

EmpowerIQ aims to transform traditional performance management systems into intelligent workforce analytics platforms that prioritize employee experience while enabling data-driven decision-making.

```
```
