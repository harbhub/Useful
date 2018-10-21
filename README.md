Useful
======

Code that is generally useful

How to find a forever process on a server:
ps -ef | grep forever

How to find a node process on a server:
ps -ef | grep node

How to kill a process by id on a server:
kill <id>

Demo
====

[Demo] (http://harbhub.github.io/Useful/)

List all of the working directories of the currently running processes:
lsof -d cwd

Update to latest stable version of NodeJS:

This issue happened because of your NodeJS version. My working solution (for Ubuntu):

remove all "node_modules" directory:

sudo rm -rf /usr/local/lib/node_modules/

reinstall:

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

sudo apt-get install -y nodejs
