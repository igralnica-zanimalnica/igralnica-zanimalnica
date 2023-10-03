cd ../public/scripts/
rm *.js
ln -s ../../private/scripts/app.js app.js
ln -s ../../private/scripts/auth.js auth.js
ln -s ../../private/scripts/htmlTemplates.js htmlTemplates.js
cd ../
rm style.css
ln -s ../private/style.css style.css