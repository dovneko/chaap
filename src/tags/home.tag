<home>
    <menubar></menubar>
    <h1>Home<span class="glyphicon glyphicon-flash" aria-hidden="true"></span></h1>
    <p>{test}</p>
    <p>End</p>
    <form onsubmit={ add }>
        <input name="input" onkeyup={ edit } />
        <button class="btn btn-primary" disabled={ !text }>Change</button>
    </form>

    var ConfigStore = require('../scripts/stores/ConfigStore.js');
    var RiotControl = require('riotcontrol');
    var ConfigAction = require('../scripts/actions/ConfigAction.js');

    this.disabled = true;

    var self = this;

    RiotControl.on(ConfigStore.Action.Changed, function(name){
        self.test = name;
        self.update();
    });

    edit(e) {
      this.text = e.target.value;
    }

    add(e) {
      if (this.text) {
        ConfigAction.SetName(this.input.value);
        this.text = this.input.value = '';
      }
    } 
</home>
