<home>
    <menubar></menubar>
    <h1>Home<span class="glyphicon glyphicon-flash" aria-hidden="true"></span></h1>
    <p>{config.test}</p>
    <p>{test}</p>
    <p>End</p>
    <form onsubmit={ add }>
        <input name="input" onkeyup={ edit } />
        <button class="btn btn-primary" disabled={ !text }>Change</button>
    </form>

    var ConfigStore = require('../scripts/stores/ConfigStore.js');
    var RiotControl = require('riotcontrol');

    this.disabled = true;
    this.config = ConfigStore;
    this.test = ConfigStore.test;

    var self = this;

    RiotControl.on(ConfigStore.Action.Changed, function(){
        //self.test = ConfigStore.test;
        //self.update();
    });

    edit(e) {
      this.text = e.target.value;
    }

    add(e) {
      if (this.text) {
        ConfigStore.setTest(this.input.value);
        this.text = this.input.value = '';
      }
    } 
</home>
