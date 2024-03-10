#!/bin/bash

current_date_time=$(date)

rm -rf build
npm run build
cd build
git init
git remote add origin git@github.com:LesliTech/lesli.dev.git
git add --all
git commit -m "deploy $current_date_time"
git branch -m production
git push origin production --force
