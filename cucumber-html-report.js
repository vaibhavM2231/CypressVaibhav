const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/json",
  reportPath: "./cypress/reports/html/cucumber-html-report",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "6th June 2023, 02:31 PM EST" },
      { label: "Execution End Time", value: "6th June 2023, 02:56 PM EST" },
    ],
  },
});