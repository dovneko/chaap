var RiotControl = require('riotcontrol');
var ActionType = require('../constants/ActionType.js');

var ConfigAction = {
    SetName: function (val){
        RiotControl.trigger(ActionType.Config.SetName, val);
    }
};


module.exports = ConfigAction;