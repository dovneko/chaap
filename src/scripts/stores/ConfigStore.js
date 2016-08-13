var riot = require('riot');

var RiotControl = require('riotcontrol');


var ConfigStore = function (){
    riot.observable(this);
    
    var self = this;
    self.test = 'kame';

    self.setTest = function(val){
        self.test = val;
        self.trigger(self.Action.Changed);
    };


    self.Action = {Changed:"ConfigStore_Value_Changed"};
}

var store = new ConfigStore();
RiotControl.addStore(store);

module.exports = store;