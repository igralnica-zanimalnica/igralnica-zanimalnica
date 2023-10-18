cd public/scripts/
rm *.js
ln ../../private/scripts/app.js app.js
ln ../../private/scripts/auth.js auth.js
ln ../../private/scripts/edit-db.js edit-db.js
ln ../../private/scripts/htmlTemplates.js htmlTemplates.js
cd ../
rm style.css
ln ../private/style.css style.css
echo Symlinks created