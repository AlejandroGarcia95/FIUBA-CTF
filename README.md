# Capture The Flag (FIUBA 66.09 edition)

## Pre-requisites

You will need:
- [Vagrant](https://www.vagrantup.com/downloads.html) (tested with 2.2.4)
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads) (tested with 5.2.26 r128414)
- A strong desire for hacking (?

## Starting the game

Simply run `vagrant up` to start the VM that will host the game. Note the first time you run this command, the VM will be created and all the dependencies (like Docker) will be installed into it, so you can expect a little wait.

Once the VM is up, you can connect to it with `vagrant ssh`. And that's it! You can now play any level X of the game by simply typing `play-level-X` into the shell. Similarly, to stop playing that level just type `stop-level-X`. If you feel stuck with some level, you can use `help-level-X` to get some useful info about that level vulnerability.

## Collaborating (adding levels)

All levels are located on the `levels` folder, and consist of a `docker-compose` file (with any additional files used by it, like a `Dockerfile`), a `goals` file with a message that will be shown when starting the level, and a `helper` file with hints for the player. 

For adding a new level X, just create a new `levels/levelX` folder with these files, and edit the `config.yaml` file of the game changing the levels amount variable. Then run `vagrant provision` and the new level container and aliases will be created automatically.
