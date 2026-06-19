# my-work-diary-ai
EmpowerIQ: Understanding People Through Performance Patterns

#Structure#
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
│   ├── dockerfile
│   ├── docker-compose.yml
│   └── azure-deployment.md
│
└── tests/
