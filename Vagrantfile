# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'yaml'

def check_plugin()
  unless Vagrant.has_plugin?("vagrant-vbguest")
    raise 'vagrant-vbguest is not installed - please execute "vagrant plugin install vagrant-vbguest" !'
  end
end

check_plugin()

yaml = YAML.load_file('./config.yaml')
IMAGE = yaml['machine']['image']
MEMORY = yaml['machine']['memory']
CPUS = yaml['machine']['cpus']
NAME = yaml['machine']['name']
IPADDR = yaml['machine']['ip']

LEVELS_AMOUNT = yaml['levels']['amount']
LEVELS_PATH = yaml['levels']['path']

Vagrant.configure(2) do |config|

  config.vm.box = IMAGE

  config.vm.provider "virtualbox" do |vb|
    vb.customize ['modifyvm', :id, '--nictype1', 'virtio']
    vb.memory = MEMORY
    vb.cpus = CPUS
    vb.linked_clone = true
  end

  config.vm.define NAME do |box|
    box.vm.network "private_network", ip: IPADDR
    box.vm.hostname = NAME

    box.vm.provider "virtualbox" do |vb|
      vb.name = NAME
    end

    box.vm.provision "shell" do |s|
      s.env = {
        "NODE_IP"   => IPADDR,
      }
      s.privileged = true
      s.path = "scripts/docker.sh"
    end

    box.vm.provision "shell" do |s|
      s.env = {
        "NODE_IP"   => IPADDR,
	"LEVELS_AMOUNT" => LEVELS_AMOUNT.to_i,
	"LEVELS_PATH" => LEVELS_PATH
      }
      s.privileged = false
      s.path = "scripts/levels.sh"
    end

  end
end
