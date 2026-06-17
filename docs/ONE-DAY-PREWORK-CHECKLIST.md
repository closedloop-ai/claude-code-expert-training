# One-Day Pre-Work Checklist

## Purpose

Complete this checklist **before** the one-day intensive so you arrive ready to build, not to install.

The live session is only about five hours. Every minute spent fixing setup is a minute taken from hands-on instruction. Run the install and verify steps below on the machine you will use during the session.

> Tip: run each **Verify** command and confirm you get the expected output. If a command is "not found," the tool is not installed (or not on your `PATH`) — revisit the install step.

## 1. Install the Toolchain

| Tool | Why you need it | Install | Verify |
|------|-----------------|---------|--------|
| **Claude Code** | The CLI you will use all day | [Setup guide](https://docs.claude.com/en/docs/claude-code/setup) · macOS/Linux/WSL: `curl -fsSL https://claude.ai/install.sh \| bash` · Windows (PowerShell): `irm https://claude.ai/install.ps1 \| iex` · npm (any OS, needs Node 18+): `npm install -g @anthropic-ai/claude-code` | `claude --version`<br>then `claude doctor` |
| **Node.js** (18+) | Required for the npm install of Claude Code and several tools | [nodejs.org/download](https://nodejs.org/en/download) (choose **LTS**) | `node --version` (expect `v18` or newer) |
| **Git** | Clone the repo and work with version control | [git-scm.com/downloads](https://git-scm.com/downloads) | `git --version` |
| **Python 3** | Run the demo-app tests and script | [python.org/downloads](https://www.python.org/downloads/) (often preinstalled on macOS/Linux) | `python3 --version` (expect `3.x`) |
| **An editor / IDE** | Read and edit code alongside the terminal | [VS Code](https://code.visualstudio.com/) · [JetBrains](https://www.jetbrains.com/) — either works | Open the cloned repo folder in it |

After installing Claude Code, run `claude doctor` — it checks your install, Node version, and auth in one shot and reports anything missing.

## 2. Clone the Repository

```bash
git clone https://github.com/closedloop-ai/claude-code-expert-training.git
cd claude-code-expert-training
```

> If you don't have the repository link yet, it will be in your training calendar invite. This checklist is everything you need to arrive ready — there is no separate setup lab you have to complete first.

Then confirm you can open it **both** ways:

- **Terminal:** you are in the `claude-code-expert-training` directory (`pwd` and `ls` show the repo files).
- **IDE:** open that same folder in your editor (VS Code: `code .`).

## 3. Run the Demo App (Environment Check)

This proves Python and the repo are wired up correctly:

```bash
cd examples/demo-app
python -m pytest
python src/order_totals.py
```

Expected: the test suite passes, and the script prints order-total output without errors.

> If `python` is not found, try `python3` instead (`python3 -m pytest`, `python3 src/order_totals.py`).

## 4. Confirm Claude Code Launches

From the repo root:

```bash
claude
```

You should land in an interactive Claude Code session. Exit with `/exit` (or `Ctrl-C` twice). If this is your first run, follow the prompts to authenticate.

## 5. Understand the Baseline Permissions Posture

Skim how Claude Code decides what it can run without asking, so the live permissions discussion lands faster:

- [TOOL-PERMISSIONS-EXAMPLES.md](TOOL-PERMISSIONS-EXAMPLES.md)
- [Claude Code permissions & settings](https://docs.claude.com/en/docs/claude-code/settings)

You do not need to master this — just know what "default-deny vs. allow" means before the session.

## You're Ready When

Self-check — every box should be ticked before the session:

- [ ] `claude --version` and `claude doctor` succeed
- [ ] `git --version` and `python3 --version` succeed
- [ ] the repo is cloned and opens in **both** terminal and IDE
- [ ] `python -m pytest` passes in `examples/demo-app`
- [ ] `python src/order_totals.py` runs and prints output
- [ ] you can launch an interactive `claude` session
- [ ] you understand the baseline permissions posture

## If You Get Stuck

- Re-run the relevant **Verify** command above and read the error — most issues are a missing install or a `PATH` problem.
- `claude doctor` diagnoses most Claude Code install and auth issues.
- If something is still broken, note the exact command and error so it can be resolved quickly at the start of the session.

> Want a guided walk-through of the same setup? The optional [Lab 00 — Environment Setup](../labs/00-environment-setup-local-stack-bootstrap/LAB.md) covers everything here as a hands-on lab. It is not required — this checklist is enough.

## Related Files

- [What to expect on the day (agenda)](ONE-DAY-LIVE-AGENDA.md)
