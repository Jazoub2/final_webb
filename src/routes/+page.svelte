<script>
// @ts-nocheck
import { TableOfContents, filter, tocCrawler } from '@skeletonlabs/skeleton';
import { send, receive } from './transition.js';
import { fade, scale, blur } from 'svelte/transition';
import {elasticIn, backIn, backInOut} from 'svelte/easing'


let hotbarCharachters=[]		
let player_one_characters = []
let player_two_characters = []
let bannedCharacters = []

let dontshow = true;
let p1turn = true;
let turncount = 0;

let superDone = false;  

  //Template  ,{name:"",img:"/.png",set:"",color:"#"}
let charachters =[
 {name:"Medusa",img:"/medusaProfile.png",set:"Battle Of legends Volume 1",color:"lime"}
,{name:"King Arthur",img:"/kingArthurProfile.png",set:"Battle Of legends Volume 1",color:"red"}
,{name:"Alice",img:"/aliceProfile.png",set:"Battle Of legends Volume 1",color:"blue"}
,{name:"Simbad",img:"/simbadProfile.png",set:"Battle Of legends Volume 1",color:"orange"}

,{name:"Bruce Lee",img:"/bruceLeeProfile.png",set:"BruceLee",color:"orange"}

,{name:"Robin Hood",img:"robinHoodProfile.png",set:"RobinHood Vs Bigfoot",color:"darkgreen"}
,{name:"Bigfoot",img:"bigFootProfile.png",set:"RobinHood Vs Bigfoot",color:"brown"}

,{name:"InGen",img:"ingenProfile.png",set:"Jurassic Park InGen Vs Raptors",color:"rgb(255, 68, 51)"}
,{name:"Raptors",img:"raptorsProfile.png",set:"Jurassic Park InGen Vs Raptors",color:"lime"}

,{name:"Sherlock Holmes",img:"sherlockHolmesProfile1.png",set:"Cobble & Fog",color:"yellow"}
,{name:"Invisible Man",img:"invisibleManProfile.png",set:"Cobble & Fog",color:"turquoise"}
,{name:"Jekyll & Hyde",img:"jekyll&HydeProfile.png",set:"Cobble & Fog",color:"lime"}
,{name:"Dracula",img:"draculaProfile.png",set:"Cobble & Fog",color:"black"}

,{name:"Buffy",img:"buffyProfile1.png",set:"Buffy the vampire slayer",color:"yellow"}
,{name:"Willow",img:"willowProfile.png",set:"Buffy the vampire slayer",color:"turquoise"}
,{name:"Spike",img:"spikeProfile.png",set:"Buffy the vampire slayer",color:"salmon"}
,{name:"Angel",img:"angelProfile.png",set:"Buffy the vampire slayer",color:"purple"}

,{name:"Beowulf",img:"beowulfProfile.png",set:"Little red riding hood vs Beowulf",color:"#088F8F"}
,{name:"Little Red Riding Hood",img:"littleRedProfile.png",set:"Little red riding hood vs Beowulf",color:"#722F37"}

,{name:"Deadpool",img:"deadpoolProfile.png",set:"Deadpool",color:"#722F37"}

,{name:"Sun Wukong",img:"sunWukongProfile.png",set:"Battle Of legends Volume 2",color:"yellow"}
,{name:"Achilles",img:"achillesProfile.png",set:"Battle Of legends Volume 2",color:"orange"}
,{name:"Bloody Mary",img:"bloodyMaryProfile.png",set:"Battle Of legends Volume 2",color:"#686868"}
,{name:"Yennenga",img:"yennengaProfile.png",set:"Battle Of legends Volume 2",color:"#00008B"}

,{name:"Luke Cage",img:"lukeCageProfile.png",set:"Redemption Row",color:"yellow"}
,{name:"Ghost Rider",img:"ghostRiderProfile.png",set:"Redemption Row",color:"orange"}
,{name:"Moon Knight",img:"moonKnightProfile.png",set:"Redemption Row",color:"white"}

,{name:"Daredevil",img:"daredevilProfile.png",set:"Hell's Kitchen",color:"orange"}
,{name:"Elektra",img:"elektraProfile.png",set:"Hell's Kitchen",color:"black"}
,{name:"Bullseye",img:"bullseyeProfile.png",set:"Hell's Kitchen",color:"#6F8FAF"}

,{name:"T-Rex",img:"trexProfile.png",set:"Jurassic Park Sattler vs T-Rex",color:"#A020F0"}
,{name:"Dr. Sattler",img:"drSattlerProfile.png",set:"Jurassic Park Sattler vs T-Rex",color:"pink"}

,{name:"Houdini",img:"houdiniProfile.png",set:"Houdini Vs The Genie",color:"#203010"}
,{name:"The Genie",img:"theGenieProfile.png",set:"Houdini Vs The Genie",color:"#800080"}

,{name:"Ms. Marvel",img:"msMarvelProfile.png",set:"Teen Spirit",color:"yellow"}
,{name:"Squirell Girl",img:"squirellGirlProfile.png",set:"Teen Spirit",color:"#7B3F00"}
,{name:"Cloak and Dagger",img:"cloakAndDaggerProfile.png",set:"Teen Spirit",color:"#1D1936"}

,{name:"Black Widow",img:"blackWidowProfile.png",set:"For King and Country",color:"red"}
,{name:"Black Panther",img:"blackPantherProfile.png",set:"For King and Country",color:"purple"}
,{name:"Winter Soldier",img:"winterSoldierProfile.png",set:"For King and Country",color:"grey"}

,{name:"Dr. Strange",img:"drStrangeProfile.png",set:"Brains And Brawn",color:"yellow"}
,{name:"Spiderman",img:"spiderManProfile.png",set:"Brains And Brawn",color:"red"}
,{name:"She-Hulk",img:"sheHulkProfile.png",set:"Brains And Brawn",color:"lime"}

,{name:"Dr. Jill Trent",img:"drJillTrentProfile.png",set:"Tales To Amaze",color:"turquoise"}
,{name:"Golden Bat",img:"goldenBatProfile.png",set:"Tales To Amaze",color:"#FFD700"}
,{name:"Annie Christmas",img:"annieChristmasProfile.png",set:"Tales To Amaze",color:"purple"}
,{name:"Nikola Tesla",img:"nikolaTeslaProfile.png",set:"Tales To Amaze",color:"#800020"}

,{name:"Oda Nobunaga",img:"odaNobunagaProfile.png",set:"Sun's Origin",color:"#800020"}
,{name:"Tomoe Gozen",img:"tomoeGozenProfile.png",set:"Sun's Origin",color:"#008080"} 
]
/**
 * @param {{ name: string; img: string; set: string; color: string; }} charachter
 */
function addToHotbar(charachter, player_x_array){
  if(hotbarCharachters.length + player_x_array.length < 3 ){
      if(hotbarCharachters.includes(charachter) || bannedCharacters.includes(charachter)){
      return;
    }
    else{
      hotbarCharachters.push(charachter);
    }
  }
  hotbarCharachters = hotbarCharachters;
}
function saveToArray(player_x_array){
  if (turncount<3){
  smoothScroll(charachters[0].set);
  console.log("turncount är just nu: ",turncount)
  if(hotbarCharachters.length + player_x_array.length === 3){
    if(turncount<=1){
      if(player_x_array.length == 0){player_x_array = [...hotbarCharachters]}
      else{hotbarCharachters.forEach(character => {
      player_x_array.push(character)
    });
  }
  hotbarCharachters = []
  p1turn = !p1turn;
  turncount++;
}   else if (turncount == 2){ // här sitter felet, turncount börjar på 0, sedan blir den 1. Och man behöver trycka en extra gpng för att den ska bli 2
    dontshow = false;
    setTimeout(() => {
       checkPlayerArrays(player_one_characters, player_two_characters);
    }, 3000);
    return player_one_characters
  }
  return player_x_array
  }else {
    return player_x_array;
  }
  }
}
function getGradient(set) {
    const charactersInSet = charachters.filter(char => char.set === set);
    const colors = charactersInSet.map(char => char.color);
    
    if (colors.length === 1) {
        return `radial-gradient(circle, ${colors[0]}, black)`;
    } else {
        return `linear-gradient(to right, ${colors.join(', ')})`;
    }
}
function togglePlay() {
        const audio = document.getElementById('background-music');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
function checkPlayerArrays(p1_array, p2_array){
  let result = [] 

  //bannedCharacters = alla valda charactärer
  //bannedCharacters = p1_array.concat(p2_array);
  bannedCharacters = [...bannedCharacters,...p1_array, ...p2_array];
  console.log("alla bannade",bannedCharacters);

  p1_array.forEach(char => {
    p2_array.forEach(char2 => {
      if (char == char2)
      result.push(char)
    })
  });

//skapar en ny lista som filtrerar ut alla som finns i listan result
for (let i = 0; i < result.length; i++) {
  
    let removed = result[i]
    p2_array= p2_array.filter((value)=>value!=removed)
    p1_array=  p1_array.filter((value)=>value!=removed)

}

player_two_characters = p2_array;
player_one_characters = p1_array;
if(player_one_characters.length + player_two_characters.length == 6){
  superDone = true;

}else{dontshow = !dontshow;}
turncount = 0;
}
function changeScene(){
  window.location.href = "/loading"
}
/*chatgpt*/
function smoothScroll(elementId) {
  const element = document.getElementById(elementId);
  if (element != null) {
    element.scrollIntoView({ behavior: 'smooth' });
  }else{
    console.log("element not found")
  }
}

</script>
<body>
  <!--Audio-->
  <audio id="background-music" src="everlasting_youth.mp3" loop></audio>
  <button style="background-color:black; margin-top:10px; filter: opacity(0.5)"class="btn" on:click={()=>togglePlay()}>Play/Pause Music</button>
<div class="bg-blue">
  <!---Table of contents-->
  <div style="background-color: green; width:80px; height: 30px; position: fixed; top: 170px; left: 123px; text-align: center; border-left: 2px solid lime; border-top:2px solid lime; border-bottom: 2px solid black; border-right: 2px solid black;
">Try me!</div>
  <img style="filter: drop-shadow(0 0 0.75rem white);position: sticky; top: 20px; margin-left: 45%; width: 250px;"src="/unmatched_logo.png" alt="logo_not_found">
    <div class="tableofcontents">
      <h3 style="position:sticky; top: 0px;background-color:rgb(63, 110, 151); text-align: center;">Sets</h3>
        {#each charachters as set,i}
          {#if i == 0}
          <button on:click={() => smoothScroll(charachters[0].set)} class="set-btns">{set.set}</button>
          {/if}
          {#if i!== 0 && charachters[i].set != charachters[i-1].set}
          <button data-target={set.set} on:click={() => smoothScroll(set.set)} class="set-btns">{set.set}</button>
          {/if}
        {/each}
    </div>
<!---<button onClick="document.getElementById('{charachters[0].set}').scrollIntoView();" class="set-btns">{set.set}</button>-->
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Picks</h2> <!---"sr-only = screen reader"-->

      <div class="grid grid-cols-1 gap-x-2 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-1">
        <!--Each set-->
          <div class="setcontainer" style="grid-column-start: 1; grid-column-end: 5;text-align:center;">
            <h3 style=" background: {getGradient(charachters[0].set)};" id="{charachters[0].set}">{charachters[0].set}</h3>
          </div>
        {#each charachters as charachter,i}
            {#if i>0 && charachters[i].set !== charachters[i-1].set}    
            <div class="setcontainer" style="grid-column-start: 1; grid-column-end: 5;text-align:center;">
                <h3 style=" background: {getGradient(charachter.set)};"id="{charachters[i].set}">{charachters[i].set}</h3>
            </div>
            {/if}

            <!---Each charachter-->
            {#if bannedCharacters.includes(charachter)}
            <a href="" on:click={p1turn? ()=>addToHotbar(charachter, player_one_characters):()=>addToHotbar(charachter, player_two_characters)} class="container group" style="background-color: {charachter.color};border-color:{charachter.color};border-width:5px;filter: brightness(40%);">
              <div class="card aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-red-500 xl:aspect-h-8 xl:aspect-w-7">
                <img src="{charachter.img}" alt="{charachter.name}" class="h-full w-full object-cover object-center" style="filter: brightness(40%);"> 
              </div>
              <h3 class="character_name mt-4 text-sm text-black-700">{charachter.name}</h3>
          </a>
              {:else}
                <a href="" on:click={p1turn? ()=>addToHotbar(charachter, player_one_characters):()=>addToHotbar(charachter, player_two_characters)} class="container group" style="background-color:{charachter.color};border-color:{charachter.color};border-width:5px; filter: drop-shadow(0 0 0.75rem {charachter.color});">
                  <div class="card aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-red-500 xl:aspect-h-8 xl:aspect-w-7">
                    <img src="{charachter.img}" alt="{charachter.name}" class="h-full w-full object-cover object-center"> 
                  </div>
                  <h3 class="character_name mt-4 text-sm text-black-700">{charachter.name}</h3>
                </a>
            {/if}
        {/each}
      </div>
    </div>
  </div>

<!--Hotbar-->
<div class="hotbar-sideskirt">
  <!--<h3 id="current_turn_text">{p1turn ? "Player One's Turn" : "Player Two's turn"}</h3>-->
  <h3 style ="background-color: rgb(26, 67, 103); width: 200px; margin-left: 350px; border-radius: 5px; height: 30px; box-shadow: 
  -10px 0 15px -5px black, /* Left red shadow */
  10px 0 15px -5px black; /* Right green shadow */

}" id="current_turn_text" class="{p1turn ? 'flashing': 'flashing2'}">
    {#if p1turn}
        Player One's Turn
    {:else}
        Player Two's Turn
{/if}
</h3>
    <div class="hotbar logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5">
    {#each hotbarCharachters as hbChar}
    <div style ="border: 3px solid {hbChar.color}; background-image: url('{hbChar.img}'); background-size: cover; background-position: center;"class="hotbar-item">{hbChar.name}
    </div>
    {/each}
    </div>
</div>

<!--Submit/Reset/continue button-->

<button on:click={()=>hotbarCharachters = []} class="delete noselect"><span class="text">Reset</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
<button on:click={p1turn ? () => { player_one_characters = saveToArray(player_one_characters) } : () => { player_two_characters = saveToArray(player_two_characters) } } class="submit noselect">
  <span class="text">{turncount == 2 ? 'Show' : 'Submit'}</span>
  <span class="icon">
    {#if turncount == 2}
      <!-- Eye Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c-7 0-12 7-12 7s5 7 12 7 12-7 12-7-5-7-12-7zm0 12c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z"/></svg>
    {:else}
      <!-- X Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
    {/if}
  </span>
</button>
<button on:click={superDone ? () => changeScene() : null} class="{superDone ? 'glowing alldone superdone noselect' : 'disabled alldone noselect'}">
  <span class="text">Continue</span>
  <span class="icon">
    {#if superDone}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 6.795l-1.285-1.285-11 11-5.5-5.5-1.285 1.285 6.785 6.785z"></path></svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg>
    {/if}
  </span>
</button><!--<button on:click={hotbarCharacters.length === 3 ? () => {  player_one_characters = saveToArray(player_one_characters) } : () => {}} class="btn" style="background-color:green; width:100px; position: fixed; left:62%; top:85%; %;height:100px;">Submit picks</button>-->

<!--Picked-->
<article class="picked_article">
<div class="picked-container">
  <h3 style="position:fixed; top:540px; right: 100px;">PLAYER ONE CHARACHTERS</h3>
    <div style="background-color: #411199;" class="p1picks logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
    {#each player_one_characters as p1Char,i}
    <div style ="
    {dontshow?"filter: blur(10px) grayscale(100%);":"background-color: #444999;"}
    border: 3px solid {p1Char.color};
    background-image: url('{p1Char.img}');
    background-size: cover;
    background-position: center;"
    class="logo-item">{p1Char.name}</div>
    {/each}
</div>

</div>
<div class ="picked-container">
  <h3 style="position:fixed; top:320px; right: 100px;">PLAYER TWO CHARACHTERS</h3>
<div style={p1turn?"background-color: #444999 ;" :"background-color: #222999;"} class="p2picks logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
  {#each player_two_characters as p2Char,i}
  <div style ="
  {dontshow?"filter: blur(10px) grayscale(100%);":"background-color: #444999;"}
  border: 3px solid {p2Char.color};
  background-image: url('{p2Char.img}');
  background-size: cover; background-position: center;
  background-repeat: no-repeat;"
  class="logo-item2">{p2Char.name}
  i</div>
  {/each}
</div>
</div>
</article>
</body>

<style>
  #current_turn_text{
    position: relative;
    text-align: center;
    top: -55px;
    z-index: 1;

    font-size: larger;
  }
  ::selection {
  color: rgb(215, 213, 213);
  background: rgba(117, 90, 0, 0.391);
}
  .character_name{
    text-align: center;
    font-family:'Times New Roman', Times, serif;
    font-size: large;
    text-shadow: 2px 2px 2px black;
  }
  .setcontainer h3 {
    font-size: x-large;
    font-weight: 800;
    text-shadow: 3px solid black;
}
  .picked_article{
    background-color:rgb(10, 41, 69);
    width: 400px;
    height: 470px;
    position: fixed;
    left: 78.6%;
    top: 280px;

    border-radius: 30px;
    border: 1px solid wheat;
  }
body{
  animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

}
.hotbar{
background-color: rgb(26, 67, 103);
  position: fixed;
  bottom: 1vh;
  left: 37%;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 12px 0 15px -4px rgba(13, 255, 0, 0.8), -12px 0 8px -4px rgba(255, 0, 0, 0.8);  
}
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }   
    100% {
        opacity: 1;
    }
  }
  .flashing, .flashing2{
    animation-direction: normal;
    animation-duration: 1000ms;
    animation-iteration-count: 2;
  }
  .flashing{
    animation-name: flashing;
  }
  .flashing2{
    animation-name: flashing2;
  }
  
  @keyframes flashing {
    0% {
        transform: scale(1.0);  
        text-shadow: 0 0 10px rgb(0, 255, 13), 0 0 20px red, 0 0 30px red, 0 0 40px red;
    }
    50% {
        transform: scale(1.5);
        text-shadow: 0 0 5px blue, 0 0 10px blue, 0 0 15px blue, 0 0 20px blue;
    }
    100% {
        transform: scale(1.0);
        text-shadow: 0 0 10px green, 0 0 20px green, 0 0 30px green, 0 0 40px green;
    }
}
@keyframes flashing2 {
    0% {
        transform: scale(1.0);  
        text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px red;
    }
    50% {
        transform: scale(1.5);
        text-shadow: 0 0 5px blue, 0 0 10px blue, 0 0 15px blue, 0 0 20px blue;
    }
    100% {
        transform: scale(1.0);  
        text-shadow: 0 0 10px green, 0 0 20px green, 0 0 30px green, 0 0 40px green;
    }
}

.hotbar-sideskirt{
  position: fixed;
  top: 80%;
  left:26.5%;
  width: 900px;
  height:140px;
  background: rgb(26, 67, 103);
  border-radius: 10px;
  box-shadow: 
        -10px 0 15px -5px red, /* Left red shadow */
        10px 0 15px -5px green; /* Right green shadow */

}
.delete {
  position: fixed;
  left:27.7%;
  top:85%;
  width: 150px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: red;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  background: #e62222;
}.delete,.delete span {
  transition: 200ms;
}.delete .text {
  transform: translateX(35px);
  color: white;
  font-weight: bold;
}.delete .icon {
  position: absolute;
  border-left: 1px solid #c41b1b;
  transform: translateX(110px);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}.delete svg {
  width: 15px;
  fill: #eee;
}.delete:hover {
  background: #ff3636;
}.delete:hover .text {
  color: transparent;
}.delete:hover .icon {
  width: 150px;
  border-left: none;
  transform: translateX(0);
}.delete:focus {
  outline: none;
}.delete:active .icon svg {
  transform: scale(0.8);
}.delete:active{
  transform: scale(0.95);
}
.alldone {
  position: fixed;
  right: 8%;
  bottom: 5%;
  width: 150px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: grey;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  background: grey;
}
.alldone, .alldone span {
  transition: 200ms;
}
.alldone .text {
  transform: translateX(35px);
  color: white;
  font-weight: bold;
}
.alldone .icon {
  position: absolute;
  border-left: 1px solid grey;
  transform: translateX(110px);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.alldone svg {
  width: 15px;
  fill: #eee;
}
.alldone.superdone:hover {
  background: grey;
}
.alldone.superdone:hover .text {
  color: transparent;
}
.alldone.superdone:hover .icon {
  width: 150px;
  border-left: none;
  transform: translateX(0);
}
.disabled {
  /* Optional styles for the disabled state */
  cursor: not-allowed;
  opacity: 0.5;
}
.alldone:focus {
  outline: none;
}
.alldone:active .icon svg {
  transform: scale(0.8);
}
.alldone:active {
  transform: scale(0.95);
}
.glowing{
  animation: glowing 1300ms infinite;
}
.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
@keyframes glowing {
        0% {
          background-color: rgb(0, 255, 136);
          box-shadow: 0 0 20px rgb(0, 255, 21);;
        }
        50% {
          background-color: rgb(3, 163, 88);
          box-shadow: 0 0 5px rgb(1, 187, 16);
        }
        100% {
          background-color: rgb(0, 255, 136);
          box-shadow: 0 0 20px rgb(0, 255, 21);
      } 
    }
.submit {
  transition:ease-in-out 0.1s; 
  position: fixed;
  left: 64.7%;
  top: 85%;
  width: 150px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: #079a02;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  background: #079a02;
}
.submit,
.submit span {
  transition: 300ms;
}
.submit .text {
  transform: translateX(35px);
  color: white;
  font-weight: bold;
}
.submit .icon {
  position: absolute;
  border-left: 1px solid #079a02;
  transform: translateX(110px);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.submit svg {
  width: 15px;
  fill: #eee;
}
.submit:hover {
  background: #079a02;
}
.submit:hover .text {
  color: transparent;
}
.submit:hover .icon {
  width: 150px;
  border-left: none;
  transform: translateX(0);
}
.submit:focus {
  outline: none;
}
.submit:hover:active,.icon:hover:active{
  transform: scale(0.9);
}
.submit:hover:active{
  background-color: #057901;
}


  .tableofcontents{
    width: 200px;
    position: fixed;
    left:20px;
    top: 200px;
    background-color: rgb(10, 41, 69);
    z-index: 1;
    overflow-y: scroll;
    height: 60vh;
    border-radius: 1  0px;
  }

/*set buttons*/
  .set-btns{
    transition:ease-in-out 0.1s; 
    max-width: 150px;
    margin: 5px 10px;
    padding: 3px;
    border-radius: 5px
  }.set-btns:hover{
    background-color: rgb(59, 38, 136);
  }

.p1picks{
  bottom: 200px;
}
.p2picks{
  top: 350px; 
}
.p1picks, .p2picks{
  width: 350px;
  height: 150px;
  left: 80%;
  position: fixed;
}


a{
  transition:ease-in-out 0.1s; 
}
a:hover:active{
  transform: scale(1.0);
}
a:hover{
  transform: scale(1.10);
}

.logo-item{
margin: 10px;
height: 130px;
width: 1fr;
opacity: 1;
}
.hotbar-item{
  height: 180px;
  margin: 10px;
}
.logo-item2{
margin: 10px;
height: 130px;
width: 1fr;
}
/*.num-players-form{
  width: 200px;
  background-color: blue;
}*/ 
#number-of-players{
  background-color: blue;

  width: inherit;
}
.card{
 height: 200px;
 width: 200px;
}
.container{
  width: fit-content;
  border: 1px solid black;
}


  </style>
  <!--dropdown-->
  <!---https://www.linkedin.com/advice/1/whats-easiest-way-create-drop-down-list-html-forms-skills-html-->