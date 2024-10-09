const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViYW5mZG1sZHFodXJ6c3F2bXprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2MjIsImV4cCI6MjA0MzM3ODYyMn0.9QvNgrCidYigkhoL49POC-NNJRixPkqhxOiomGLBs3E"

export const defaultHeader = {
    "apikey": apikey,
    "Authorization": `Bearer ${apikey}`,
    "Content-Type": "application/json"
}