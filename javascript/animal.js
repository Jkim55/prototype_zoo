function Animal(kind, sound, name, age){
  this.kind = kind
  this.sound = sound
  this.name = name
  this.age = age
  this.awake = false
}

Animal.prototype.wakeUp = function(){
  this.awake = true
}  // write more code here

Animal.prototype.speak = function(){
  return this.sound
}

Animal.prototype.feed = function(){
  if (this.awake === true){
    return "NOM NOM NOM"
  }
}

Animal.prototype.growUp = function(){
  return this.age += 1
}

Animal.prototype.sleep = function (){
  this.awake = false
}
module.exports = Animal;
