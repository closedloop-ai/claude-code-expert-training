#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../examples/demo-app"
pnpm install
pnpm test
