import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Alert
} from "@mui/material";

export default function EmployeePage() {
  const [feedback, setFeedback] = useState("");
  const [task, setTask] = useState("");
  const [hours, setHours] = useState("");
  const [blockers, setBlockers] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    const payload = {
      employeeId: "EMP001",
      feedback,
      task,
      hours,
      blockers,
      date: new Date().toISOString()
    };

    console.log(payload);

    // Example API Call
    /*
    await fetch("http://localhost:8000/employee/diary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    */

    setSubmitted(true);

    setFeedback("");
    setTask("");
    setHours("");
    setBlockers("");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Work Diary
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Share your progress and feedback
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Entry submitted successfully
        </Alert>
      )}

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">
            Daily Progress Update
          </Typography>

          <TextField
            label="Task Completed"
            multiline
            rows={3}
            fullWidth
            margin="normal"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <TextField
            label="Hours Spent"
            type="number"
            fullWidth
            margin="normal"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />

          <TextField
            label="Blockers / Challenges"
            multiline
            rows={3}
            fullWidth
            margin="normal"
            value={blockers}
            onChange={(e) => setBlockers(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">
            Feedback & Sentiment
          </Typography>

          <TextField
            label="How are you feeling today?"
            multiline
            rows={5}
            fullWidth
            margin="normal"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Example: I feel overloaded with project work and need more support."
          />
        </CardContent>
      </Card>

      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
      >
        Submit Entry
      </Button>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Sentiment Score
              </Typography>
              <Typography variant="h3">
                😊 82%
              </Typography>
              <Typography>
                Positive Trend
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Work Entries
              </Typography>
              <Typography variant="h3">
                24
              </Typography>
              <Typography>
                This Month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Attrition Risk
              </Typography>
              <Typography variant="h3">
                Low
              </Typography>
              <Typography>
                AI Assessment
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
