#! /bin/sh
git add .
git commit -am "gh-pages"
git push origin master
git checkout gh-pages
git checkout master -- site
rm  *.html
rm -rf ppmui _layout
mv -f site/* ./
rm -rf size
git add .
git commit -am "gh-pages"
git push origin gh-pages

git checkout master
