#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../examples/demo-app"
python -m pytest
