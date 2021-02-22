#!/bin/bash
./prepare-assets.sh
cd website
[ ! -d "node_modules/docusaurus" ] && npm install
npm run build-quick

