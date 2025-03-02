
find src/models -type f -name "*.ts" -exec perl -i -pe 's/([a-z0-9])_([a-z])/\1\U\2/g' {} \;
