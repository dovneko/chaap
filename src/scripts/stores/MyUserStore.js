var riot = require('riot');
var RiotControl = require('riotcontrol');

var Store = function (){
    riot.observable(this);
    var self = this;

    self.isRead = false;
    self.Name = "";
    self.ID = "";
    self.Settings = {};

    self.Action = {
        Changed: "UserStore_Value_Changed",
        GetUser: "UserStore_GetUser"
    };

    self.on(self.Action.GetUser,function(id){
        

        self.isRead = true;
        self.trigger(self.Action.Changed, val);
    });
}

var store = new Store();
RiotControl.addStore(store);
module.exports = store;