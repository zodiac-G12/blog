#!/bin/bash


for file in `find ./static \( -name \*.png -o -name \*.jpg -o -name \*jpeg \) -print`; do ~/libwebp-1.1.0-mac-10.15/bin/cwebp "$file" -o "${file%.*}.webp"; done
