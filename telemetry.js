const appInsights = require("applicationinsights");

// Use connection string if present; fall back to instrumentation key if that's what the portal added
const cs =
  process.env.APPLICATIONINSIGHTS_CONNECTION_STRING ||
  (process.env.APPINSIGHTS_INSTRUMENTATIONKEY
    ? `InstrumentationKey=${process.env.APPINSIGHTS_INSTRUMENTATIONKEY}`
    : null);

if (cs) {
  appInsights
    .setup(cs)
    .setAutoCollectRequests(true)       // HTTP incoming
    .setAutoCollectDependencies(true)   // HTTP/DB outgoing
    .setAutoCollectExceptions(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectConsole(true, true)  // console.log + console.error
    .setSendLiveMetrics(true)           // Live Metrics
    .start();
  console.log("✅ Application Insights initialized");
} else {
  console.log("⚠️ No AI connection string or key found in env.");
}

module.exports = appInsights;
