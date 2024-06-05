
<script>
    //@ts-nocheck
    // control template: ,{name: "",type:"",input:{}}
    let controls = [
        {name: "top-block",type:"shield", input:{first:"w"}},
        {name: "left-block",type:"shield",input:{first:"a"}},
        {name: "down-block",type:"shield",input:{first:"s"}},
        {name: "right-block",type:"shield",input:{first:"d"}},

        {name: "left-dash",type:"movement",input:{first:"space",second:"left-arrow-key"}},
        {name: "right-dash",type:"movement",input:{first:"space",second:"right-arrow-key"}},

        {name: "boulder-hold",type:"enabler",input:{first:"shift-key"}},
        
        {name: "boulder-dash",type:"shift-attack", input:{first:"space-key",second:"arrow-key"}},
        {name: "boulder-smash",type:"shift-attack",input:{first:"enter-key"}},
        {name: "boulder-throw",type:"shift-attack",input:{first:"delete-key"}},

        {name: "push",type:"basic",input:{first:"f"}},
        {name: "recover",type:"basic",input:{first:"j"}}
    ]
    function allKeys(){
        let allkeyslist = []
        for (let i = 0; i < controls.length; i++) {
            allkeyslist.push(controls[i].input)
        }
        return allkeyslist;
    }

</script>

<!--Page-->
<body>
    <main>
        <div class="control_container">
            {#each controls as ctrl,i}
            <ul>
                <li>
                        Name: {ctrl.name}<br>
                        Type: {ctrl.type}<br>
                        {#if ctrl.input.length > 1}
                        {#each allKeys() as single_input}
                            {#each single_input as keypress,i}
                                {keypress[i]}
                            {/each}
                        {/each}
                            <!--Input: {ctrl.input.first}<br>
                            Input: {ctrl.input.second}-->
                            {:else}
                            <!--Input: {ctrl.input.first}--->
                        {/if}
                </li>
            </ul>
            {/each}
        </div>
    </main>
</body>

<style>

    .control_container{
        /*Grid setup, 2 x 5*/
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, 1fr);

        width: 50vw;
        height: 50vh;

        background-color: rgba(255, 255, 255, 0.255);
        
        margin-top: 5vh;
        margin-left: 2.5vw;

        overflow-y: scroll;
    }
    main{
        width:100%;
        height: 100%;
        
        border: 1px solid white;
        border-bottom: 1px transparent;
    }
    body{
        overflow-y: scroll;
    }
</style>