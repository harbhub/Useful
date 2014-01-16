Git
===

**Clone:**

git clone https://github.com/harbhub/Useful.git

**Add:**

git add FileName.Extension

git commit -m "Message String"

git push

git clone -b gh-pages https://github.com/harbhub/Useful.git

**Pull Request:**

navigate the browser to github.com

log in under your username

locate the repository that you wish to make the pull request with

fork the repository

open command prompt

git clone https://path.to.your.forked.copy/

cd into the folder that you just cloned

add the file(s) and/or make the changes to existing files >> git add filename.ext

git commit -m "I am making a pull request because..."

git push

navigate (or refresh) the browser to your forked copy of the repository

make sure that the changes you made are displaying as expected

click on the Make a pull request link and follow the instructions

**Log In**

git config --global user.email foo@bar.org

git config --global user.name some_name

and to check that you did it correctly use >> git config --global --list

**Bit Bucket Repository**

make a directory for the new repository

mkdir your_repo

move into the new folder

cd your_repo

initialize an empty git repository

git init

set the remote origin to the Bit Bucket repository location

git remote add origin ssh://git@bitbucket.org/username_or_teamname/repository_name.git

add some files to the repository

git add filename.ext
git add other_filename.ext

commit the changes with a message

git commit -m "Your message"

push the changes to the Bit Bucket repository

git push -u origin master
