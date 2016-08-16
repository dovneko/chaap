var riot = require('riot');
var RiotControl = require('riotcontrol');

var ConfigStore = function (){
    riot.observable(this);
    var self = this;

    self.Action = {
        Changed: "ConfigStore_Value_Changed",
        SetName: "ConfigStore_SetName"
    };

    self.on(self.Action.SetName,function(val){
        self.test = val;
        self.trigger(self.Action.Changed, val);
    });
}

var store = new ConfigStore();
RiotControl.addStore(store);
module.exports = store;