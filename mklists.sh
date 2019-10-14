ls pages | sed -e 's/vue/vue=1/g' | jo | tee components/fileLists.json
