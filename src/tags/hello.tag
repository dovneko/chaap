<hello>
  <menubar name={opts.zz}></menubar>
  <h1>こんにちわ { opts.zz } </h1>
  <p>{config.test}</p>

  <script>
    var ConfigStore = require('../scripts/stores/ConfigStore.js');
    this.config = ConfigStore;
  </script>
</hello>