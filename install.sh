#!/usr/bin/env bash
set -euf -o pipefail

output="${HOME}/${APP_ID}"-output
meteor build "${output}" --directory --server-only --architecture os.linux.x86_64
mv ${output} ./my_app
cd my_app/bundle/programs/server
npm install
