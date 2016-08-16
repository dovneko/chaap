var RiotControl = require('riotcontrol');
var Actions = require('./Actions');

var ConfigStore = require('../stores/ConfigStore');

var Action = {};
Actions.Action = Action;

Action.SetName = function(name){
    RiotControl.trigger(ConfigStore.Action.SetName, name);
};

module.exports = Action;