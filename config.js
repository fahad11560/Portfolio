// Paste your Supabase project's values here — both come from
// Supabase Dashboard → Project Settings → API.
//
// SUPABASE_URL   → "Project URL"
// SUPABASE_ANON_KEY → "anon public" key (NOT the service_role key)
//
// The anon key is safe to expose in client-side code like this —
// it's designed to be public. Row Level Security (set up by
// supabase-setup.sql) is what actually protects your data.

const SUPABASE_URL = "https://cwavazjalciqaqbqcdpr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3YXZhemphbGNpcWFxYnFjZHByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3NDQyMjEsImV4cCI6MjEwNjMyMDIyMX0.QinScPyJMxnvjxtwwv3xpeQClVttYYlkTl96A0gGdy0";

// --- Contact form → Google Sheets ---
// GOOGLE_SHEETS_URL: the Apps Script "Web app" URL you get after deploying
//   the script from the README's Google Sheets setup section (ends in /exec).
//   This is what the contact form POSTs each message to.
// GOOGLE_SHEET_VIEW_URL: the normal, human-readable link to the sheet itself
//   (docs.google.com/spreadsheets/...) — just for the "Open Google Sheet"
//   button in admin.html.
const GOOGLE_SHEETS_URL = "YOUR_APPS_SCRIPT_WEB_APP_URL";
const GOOGLE_SHEET_VIEW_URL = "YOUR_GOOGLE_SHEET_LINK";
