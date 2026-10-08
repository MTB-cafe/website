#!/usr/bin/env bash
set -euo pipefail;

mkdir -p dist;

deno check ./src/index.tsx \
	--unstable-raw-imports;
deno bundle ./src/index.tsx \
	--unstable-raw-imports \
	> ./dist/mtb.bundle.js;

echo "
<html>
	<head>
		<script>$(cat ./dist/mtb.bundle.js)</script>
	</head>
</html>
" > ./dist/index.html;