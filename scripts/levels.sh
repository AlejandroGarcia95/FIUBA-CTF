#! /bin/bash

for (( i=1; i<=$((LEVELS_AMOUNT)); i++ )) ; do
  CUR_LVL="/vagrant/${LEVELS_PATH}/level${i}/"
  sudo docker build -t level${i} ${CUR_LVL}
  sudo echo "alias play-level-${i}=\"sudo docker run --name level${i} -d --rm -p 8000:8000 level${i} > /dev/null && cat ${CUR_LVL}helper\"" >> /home/vagrant/.bashrc
  sudo echo "alias stop-level-${i}=\"sudo docker stop level${i} > /dev/null && echo Stopped\"" >> /home/vagrant/.bashrc
done

source /home/vagrant/.bashrc
