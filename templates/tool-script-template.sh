#!/usr/bin/env bash
# A plugin can SHIP CLI tools. Claude runs binaries like this via Bash under your
# permission rules — there is no separate "tool definition" to write for Claude to
# use a CLI binary. (To add entirely new tool surfaces instead, register an MCP server.)
set -euo pipefail

# <do one bounded thing and print a result Claude can read>
echo "replace me with the tool's work"
