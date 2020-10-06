!/bin/bash

# read projects current directory with $PWD
echo “running command from” $PWD
cd $PWD
git add .
echo “Enter commit message: “
git commit -am “$commitMessage”
git push origin master
