#/bin/sh

r.js -o name=almond.min include=bootstrap out=bootstrap.min.js baseUrl=. optimize=none paths.jquery=libs/jquery-1.7.1.min paths.weld=libs/weld-min excludeShallow=text,cs

