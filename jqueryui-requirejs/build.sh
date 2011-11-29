#!/bin/bash

cd js
r.js -o name=bootstrap.js out=bootstrap.min.js baseUrl=. paths.jquery=require-jquery
