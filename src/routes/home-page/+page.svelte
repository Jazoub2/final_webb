<script>
    //@ts-nocheck
    let selectedArticle = null;

    function handleClick(article) {
        if (selectedArticle === article) {
            selectedArticle = null;
        } else {
            selectedArticle = article;
        }
    }
</script>

<h1>Welcome To Unmatchup Builder</h1>
<main>
    <div class="article_container {selectedArticle === null ? 'two-columns' : selectedArticle === 'about_unmatched' ? 'about_unmatched-click' : 'about_unmatched_mb-click'}">
        <article class="about_unmatched">
            <h2>About Unmatched</h2>
            <h3>IN BATTLE THERE ARE NO EQUALS</h3>
            <p>"Unmatched" encapsulates the essence of being unparalleled, standing apart in a realm of its own. It's the exquisite blend of uniqueness and superiority, a beacon of distinction in a sea of similarity. To be unmatched is to transcend expectations, to soar above the ordinary and redefine standards.

                In the realm of creativity, the unmatched are the trailblazers, the visionaries who dare to explore uncharted territories and challenge the status quo. Their ingenuity knows no bounds, weaving together threads of inspiration to create masterpieces that leave an indelible mark on the canvas of human expression.
                
                In the arena of competition, the unmatched are the champions, the epitome of excellence whose prowess knows no equal. With unwavering determination and relentless dedication, they ascend to the pinnacle of their craft, leaving their adversaries in awe of their prowess and determination.
                
                In the tapestry of life, the unmatched are the pioneers, the architects of their destiny who carve their own path with boldness and conviction. Fearless in the face of adversity, they embrace challenges as opportunities for growth, emerging stronger and more resilient with each hurdle overcome.
                
                To be unmatched is to embody the essence of greatness, to transcend the ordinary and leave an indelible mark on the world. It is a testament to the power of human potential, a reminder that with passion, perseverance, and purpose, anything is possible</p>
                <button class="expand-button" on:click={() => handleClick('about_unmatched')}>»</button>
            </article>
        <article class="about_unmatched_mb">
            <h2>About Unmatched Matchup Builder</h2>
            <button style="left:0%;"class="expand-button" on:click={() => handleClick('about_unmatched_mb')}>«</button>
            <p style="color:red;">"Unmatched" encapsulates the essence of being unparalleled, standing apart in a realm of its own. It's the exquisite blend of uniqueness and superiority, a beacon of distinction in a sea of similarity. To be unmatched is to transcend expectations, to soar above the ordinary and redefine standards.

                In the realm of creativity, the unmatched are the trailblazers, the visionaries who dare to explore uncharted territories and challenge the status quo. Their ingenuity knows no bounds, weaving together threads of inspiration to create masterpieces that leave an indelible mark on the canvas of human expression.
                
                In the arena of competition, the unmatched are the champions, the epitome of excellence whose prowess knows no equal. With unwavering determination and relentless dedication, they ascend to the pinnacle of their craft, leaving their adversaries in awe of their prowess and determination.
                
                In the tapestry of life, the unmatched are the pioneers, the architects of their destiny who carve their own path with boldness and conviction. Fearless in the face of adversity, they embrace challenges as opportunities for growth, emerging stronger and more resilient with each hurdle overcome.
                
                To be unmatched is to embody the essence of greatness, to transcend the ordinary and leave an indelible mark on the world. It is a testament to the power of human potential, a reminder that with passion, perseverance, and purpose, anything is possible</p>
                
        </article>
    </div>
    <div class="button_container">
        <form class="href_begin" action="/">
            <input type="submit" value="Begin"/>
        </form>
    </div>
</main>

<footer>
    All rights reserved to Restoration Games<br>
    <a href="https://restorationgames.com/unmatched/">restorationgames.com/unmatched</a>
</footer>

<style>
    main {
        width: 1500px;
        height: 700px;
        margin: auto;
        margin-top: 70px;
        background-color: rgba(255, 255, 255, 0.048);
    }
    .article_container {
        display: grid;
        height: 100%;
        width: 100%;
        transition: grid-template-columns 0.3s ease;
    }
    .two-columns {
        grid-template-columns: 1fr 1fr;
    }

    .about_unmatched-click {
        grid-template-columns: 2fr 1fr;
    }

    .about_unmatched_mb-click {
        grid-template-columns: 1fr 2fr;
    }

    /*StartButton*/
    .href_begin {
        align-items: center;
        text-align: center;
        background-color: blue;
    }
    .href_begin:hover {
        filter: brightness(0.75);
    }
    .href_begin:hover:active {
        filter: brightness(0.5);
    }

    /*Articles*/
    .about_unmatched, .about_unmatched_mb {
        background-color: rgba(0, 0, 0, 0.5);
        margin: 20px;
        justify-content: center;
        position: relative; /* For positioning the button */
        transition: transform 0.3s ease;
    }
    .about_unmatched h2, .about_unmatched_mb h2{
        background-color: rgba(255, 255, 255, 0.1);
        height: 40px;
        align-content: center;
        text-align: center;
    }
    .about_unmatched p, .about_unmatched_mb p {
    font-size: x-large;
    white-space: pre-wrap; /* Allows wrapping of long lines */
    overflow-y: auto; /* Enable vertical scrolling when needed */
    max-height: 600px; /* Define the maximum height for scrolling */
    }
    .about_unmatched:hover, .about_unmatched_mb:hover {
        filter: brightness(1.25);
    }
    
    /*expand-button*/
    .expand-button {
    height: 100px;
    width: 30px;
    position: absolute; /* Change position to absolute */
    top: 50%; /* Position it 50% from the top */
    right: 0px; /* Adjust right spacing */
    transform: translateY(-50%); /* Center vertically */
    background-color: inherit;
    padding: 10px 20px;
    border-radius: 10px;
    }
    .expand-button:hover {
        filter: brightness(0.55);
    }

    /*headers*/
    h1 {
        font-size: xx-large;
        top: 100px;
    }
    h2 {
        font-size: x-large;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    h1, footer {
        position: absolute;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        left: 50%;
    }

    a {
        color: blue;
    }
    footer {
        bottom: -10px;
    }
</style>
