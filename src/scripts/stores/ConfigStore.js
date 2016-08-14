var riot = require('riot');
var RiotControl = require('riotcontrol');
var ActionType = require('../constants/ActionType.js');


var ConfigStore = function (){
    riot.observable(this);
    
    var self = this;
    self.test = 'kame';

    self.on(ActionType.Config.SetName,function(val){
        self.test = val;
        self.trigger(self.Action.Changed, val);
    });

    self.Action = {Changed:"ConfigStore_Value_Changed"};
}

var store = new ConfigStore();
RiotControl.addStore(store);

module.exports = store;