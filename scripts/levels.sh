#! /bin/bash

for (( i=1; i<=$((LEVELS_AMOUNT)); i++ )) ; do
  CUR_LVL="/vagrant/${LEVELS_PATH}/level${i}/"
  # sudo docker build -t level${i} ${CUR_LVL}
  sudo echo "alias play-level-${i}=\"sudo docker-compose -f ${CUR_LVL}docker-compose.yml up -d --quiet-pull &> /dev/null && cat ${CUR_LVL}goals\"" >> /home/vagrant/.bashrc
  sudo echo "alias stop-level-${i}=\"sudo docker-compose -f ${CUR_LVL}docker-compose.yml stop &> /dev/null && echo Stopped\"" >> /home/vagrant/.bashrc
  sudo echo "alias help-level-${i}=\"cat ${CUR_LVL}helper\"" >> /home/vagrant/.bashrc
done

source /home/vagrant/.bashrc
