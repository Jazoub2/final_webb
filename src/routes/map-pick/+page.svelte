<!--sort by number of spaces, zones, special powers, starting spaces-->

<!--Template {name:"",spaces: , zones: , special:{specialtype: , specialitems: }, set:"" }
    Template Scheme {name:"",value:null,scheme:""},-->
<!--Template Img   img:"/", -->


<script>
    // @ts-nocheck
let maps = [
{name:"Sherwood Forest", img:"/sherwood-forest.jpg",spaces: 30, zones: 7, set:"Robin Hood vs Bigfoot" },
{name: "Yukon", img:"/yukon.jpg",spaces: 31, zones: 7, set: "Robin Hood vs Bigfoot"},

{name: "The Raft",img:"/the-raft.png", spaces: 31, zones: 8, special:{specialtype: "boostitems", specialitems: 
[
    {name:"Electrified Floor",value:null,scheme:"Deal 1 damage to each fighter in your zone"},
    {name:"Secret Documents",value:null,scheme:"Discard your hand. Draw 3 cards."},
    {name:"Security Cameras",value:null,scheme:"Look at an opponent's hand. Draw 1 card."},

    {name:"Electro-Baton",value:2, scheme:null},
    {name:"Food Tray", value:1, scheme: null},
    {name:"Folding C hair", value: 1, scheme: null}
]},set: "Redemption Row"},

{name:"Sanctum Sanctorum",img:"/sanctum_sanctorum.jpg",spaces:29, zones:7, special:{specialtype: "boostitems", specialitems: 
[
    {name:"Brazier of Bom'Galiath",value:null,scheme:"Play a scheme from your deck as a free action."},
    {name:"Daily Bugle",value:null,scheme:"Draw 3 cards. Put a card from your hand on the bottom of your deck."},
    {name:"Astral Ring",value:null,scheme:"Move each figher up to 1 space."},

    {name:"Dragon-Fang",value:2, scheme:null},
    {name:"Axe of Angarruumus", value:1, scheme: null},
    {name:"Black's Law Dictionary", value: 1, scheme: null}
]}, set:"Brains and Brawn" },

{name:"Helicarrier",img:"/helicarrier.jpg",spaces:29, zones:7, special:{specialtype: "boostitems", specialitems: 
[
    {name:"Rocket Pack",value:null,scheme:"Place your fighter in any space."},
    {name:"Laser Turret",value:null,scheme:"Deal 2 damage to a fighter in your zone."},
    {name:"EMP Pulse Array",value:null,scheme:"All players discard 2 cards."},

    {name:"Industrial Wrench",value:2, scheme:null},
    {name:"SHIELD-Issued Blaster", value:2, scheme: null},
    {name:"Reinforced Gloves", value: 1, scheme: null}
]}, set:"For King and Country"},

{name:"Raptor Paddock",img:"/raptor-paddock.jpg",spaces: 28, zones: 6, special:{specialtype: "map", ruling: "Has one-way arrows that only allow fighters to move in one direction. Fighters can still make attacks between those spaces.", }, set:"Raptors vs InGEn" },
{name:"Point Pleasant", img:"/point-pleasant.jpg",spaces:40, zones:7, set:"Tales To Amaze" },
{name:"Marmoreal", img:"/marmoreal.jpg",spaces: 31, zones: 8, set:"Battle Of Legends Volume 1"},
{name:"King Solomon's Mine", img:"/king-solomons-mine.png",spaces:29, zones: 7, special:{specialtype: "map", specialitems: null, ruling: "Has secret passages which connect distant parts of the map for movement, but not for attacks."}, set:"Houdini Vs The Genie"},
{name:"Heorot", img:"/heorot.jpg",spaces:30, zones:7, special:{specialtype: "map", ruling:"Has doors which can be opened and closed during a maneuver to impede movement and attacks. Opening a door costs 1 space of movement, but closing a door is free."}, set:"Little Red Riding Hood Vs Beowulf" },

{name:"Hell's Kitchen", img:"/hells-kitchen.png",spaces:30, zones:7, special:{specialtype:"boostitems", specialitems: [
    
    {name:"First Aid Kit",value:null,scheme:"Recover 2 health. Draw 1 card."},
    {name:"Map",value:null,scheme:"Your next attack this turn can target any space."},
    {name:"Payphone",value:null,scheme:"Choose 1 card in your discard pile and return it to your hand."},

    {name:"Fire Hydrant", value:2, scheme: null},
    {name:"Manhole Cover", value:2, scheme: null},
    {name:"Mailbox", value:1, scheme: null}
]}, set:"Hell's Kitchen"},

{name:"Navy Pier", img:"/navy-pier.png",spaces:30, zones:6, special:{specialtype:"boostitems", specialitems: [
    
    {name:"Helium Balloons",value:null,scheme:"Move 2 spaces. Gain 1 action."},
    {name:"XL Slushie",value:null,scheme:"Recover 3 health."},
    {name:"Zazoom",value:null,scheme:"Look at the top 3 cards of any deck. Put back in any order."},

    {name:"Parking Meter", value:2, scheme: null},
    {name:"Snow Globe", value:1, scheme: null},
    {name:"Garbage Can Lid", value:1, scheme: null}
]}, set:"Teen Spirit"},

{name:"McMinnville", img:"/mcminnville.jpg",spaces:42, zones:10, set:"Tales To Amaze" },
{name:"Baskerville Manor", img:"/baskerville-manor.jpg",spaces:32, zones: 7, special:{specialtype: "map", specialitems: null, ruling:"Has secret passages which connect distant parts of the map for movement, but not for attacks."}, set:"Cobble & Fog" },
{name:"Azuchi Castle", img:"/azuchi-castle.jpg",spaces:31, zones:8, set:"Sun's Origin" },
{name:"Hanging Gardens", img:"/hanging-gardens.png",spaces: 33, zones:8, special:{specialtype:"map", specialitems:null, ruling:"Has high ground spaces give a +1 attack bonus when a fighter is attacking from the high ground space into the adjacent space the arrow points towards."}, set:"Battle Of Legends Volume 2"},
{name:"Sunnydale High",img:"/sunnydale-high.png",spaces: 31, zones: 6, set:"Buffy The Vampire Slayer"},
{name:"The Bronze", img:"/the-bronze.png",spaces: 35, zones: 6, set: "Buffy The Vampire Slayer"},
{name:"T-Rex Paddock", img:"/t-rex-paddock.png",spaces: 26, zones: 6, set:"T-rex vs. Dr.Ellie Sattler"},
{name:"SoHo", img:"/soho.jpg",spaces: 29, zones: 7, set:"Cobble & Fog" },
{name:"Sarpedon", img:"/sarpedon.jpg",spaces: 38, zones: 6,set:"Batlle of Legends Volume 1"}
] 
let showing = [...maps]
console.log(showing)
let removedItem;
    function popFromList(removedMap) {
        removedItem = removedMap;
        setTimeout(() => {
            showing = showing.filter(map => map !== removedMap);
        },500);
    }

    let selectedZones = 7;
    let selectedSpaces = 30;

function handleSpaceSliderChange(event) {
    selectedSpaces = parseInt(event.target.value);
    document.getElementById('spacesValue').textContent = selectedSpaces;
}

function handleZoneSliderChange(event) {
    selectedZones = parseInt(event.target.value);
    document.getElementById('zonesValue').textContent = selectedZones;
}

function filterzones(){
    showing = maps.filter((map) => map.zones >= selectedZones);
    return showing;
}
function filterSpaces(){
    showing = maps.filter((map) => map.spaces <= selectedSpaces);
    return showing;
}
    </script>
    <main>
        <!--<input style="width:350px;"type="range" min ="26" max="42" value="30" id = "spacesSlider" on:input={handleSpaceSliderChange}>
        <span id="spacesValue">25</span>spaces
        <input style="width: 350px;"type="range" min="6" max="10" value="8" id="zonesSlider" on:input={handleZoneSliderChange}>
        <span id="zonesValue">7</span> Zones-->
    <div></div>
    <div class="gridcontainer">
        {#each showing as map,i}
        <button on:click={() => popFromList(map)} class="griditem {map === removedItem ? 'fadeOut' : ''}" style="background-image: url('{map.img}')">
                <h3>{map.name}</h3>
                </button>

        {/each}
       <!-- <button on:click={()=>filterzones()} style="background-color:red" class="btn">FILTER</button>
        <button on:click={()=>filterSpaces()} style="background-color:red" class="btn">FILTERSPACES</button>-->
    </div>
    </main>



<style>
.fadeOut {
    opacity: 0;
    transition: opacity 1s ease-out; 
    }
.griditem{
height: 200px;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
transition: ease-in-out 0.07s;
}
.griditem:active{
    transform: scale(0.95);
}
.gridcontainer{
    display:grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    row-gap: 40px;
}
</style>
