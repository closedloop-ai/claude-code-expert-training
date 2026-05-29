# Lab 04 — Give Claude Eyes & Ears: Connecting Dynamic Data Sources

## Objective

Improve Claude's next answer by connecting it to the right dynamic data sources and feedback artifacts.

## Scenario

Claude produced a partial fix, but the result is still wrong. Your task is to avoid vague feedback like “that didn't work” and instead supply concrete evidence.

## Dynamic Data Sources

Use at least three of the following:

- logs
- failing test output
- CLI output
- screenshot of the broken UI or state
- app simulator output or emulator trace
- MCP server output
- API or schema documentation
- GitHub issue or PR discussion
- diff excerpt showing the suspicious area
- short written observation about what changed versus what was expected

## Exercises

1. Run the failing command or test.
2. Capture the smallest useful output.
3. Connect at least one non-test dynamic source such as logs, docs, issues, screenshots, simulator output, or MCP context.
4. Summarize the failure in one precise sentence.
5. Ask Claude to revise the fix using only the supplied artifacts.

## Teaching Focus

- give evidence, not frustration
- reduce noise before pasting output
- tell Claude what to focus on in the artifact
- distinguish reproduction evidence from diagnosis
- connect live context, not just static prose

## Deliverable

Create a feedback bundle containing:

- one failing artifact
- one connected dynamic data source beyond the failing artifact
- one observation
- one revised instruction to Claude
- one sentence explaining why this feedback is better than a generic correction
