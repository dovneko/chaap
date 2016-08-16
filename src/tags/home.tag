<home>
    <menubar></menubar>
    <h1>Home<span class="glyphicon glyphicon-flash" aria-hidden="true"></span></h1>
    <p>{test}</p>
    <form onsubmit={ add }>
        <input name="input" onkeyup={ edit } />
        <button class="btn btn-primary" disabled={ !text }>Change</button>
    </form>

    var RiotControl = require('riotcontrol');
    var ConfigStore = require('../scripts/stores/ConfigStore');
    var SampleAction = require('../scripts/actions/SampleAction');


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
        SampleAction.SetName(this.input.value);
        this.text = this.input.value = '';
      }
    } 
</home>
