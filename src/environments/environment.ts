// ✅ SAFE TO COMMIT — this is the development environment file.
// The real Google Sheets URL is stored in environment.prod.ts (NOT committed to git).
export const environment = {
  production: false,
  googleSheetUrl: '' // Leave empty for local dev; form submissions will silently fail
};
