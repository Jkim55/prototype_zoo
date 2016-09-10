var Animal = require('./animal');

function Zoo(location, name, status, animals) {
  this.location = location
  this.name = name
  this.status = "closed"
  this.animals = []
}


Zoo.prototype.isOpen = function(){
  if (this.status === 'closed'){
    return false
  }
}

Zoo.prototype.open = function(){
  return this.status = "open"
}

Zoo.prototype.addAnimal = function(animal){
  if (this.status === 'open' && animal instanceof Animal && this.animals.indexOf(animal) === -1){
    return this.animals.push(animal)
  }
}

Zoo.prototype.close = function () {
  this.status = 'closed'
};

Zoo.prototype.removeAnimal = function(animal){
  if (!this.status === 'closed'){
    return this.animals.splice(animal)
  }
}

Zoo.prototype.changeLocation = function (location) {
  return this.location = location  
};

module.exports = Zoo;
