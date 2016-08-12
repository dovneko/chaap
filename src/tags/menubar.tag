<menubar>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">Chaap</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li each={links} class={active:act}><a href="#/hehehe/{name}">{name}</a></li>
                </ul>
            </div>
        </div>
    </nav>

    this.links = [
        {name:"Neko", act:false},
        {name:"Kuma", act:false},
        {name:"User1", act:false},
        {name:"User2", act:false},
        {name:"User3", act:false}
    ];
    for (var i=0 ; i<this.links.length ; i++){
        if(this.links[i].name == opts.name){
            this.links[i].act = true;
        }  
    }
</menubar>