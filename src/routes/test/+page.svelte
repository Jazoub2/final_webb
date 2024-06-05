<script>
    //@ts-nocheck
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // Bresenham's Line Algorithm implementation
    function drawLine(x0, y0, x1, y1, context) {
        const dx = Math.abs(x1 - x0);
        const dy = Math.abs(y1 - y0);
        const sx = x0 < x1 ? 1 : -1;
        const sy = y0 < y1 ? 1 : -1;
        let err = dx - dy;

        while (true) {
            context.fillRect(x0, y0, 1, 1); // Draw the pixel
            
            if (x0 === x1 && y0 === y1) break;
            const e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x0 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y0 += sy;
            }
        }
    }

    let startX = writable(50);
    let startY = writable(50);
    let endX = writable(200);
    let endY = writable(300);

    // Function to handle drawing the line when coordinates change
    function draw() {
        const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        // Get the current values of the coordinates
        startX.subscribe(value => startX = value);
        startY.subscribe(value => startY = value);
        endX.subscribe(value => endX = value);
        endY.subscribe(value => endY = value);

        drawLine(startX, startY, endX, endY, context);
    }

    // Initialize the canvas and draw the initial line
    onMount(() => {
        draw();
    });
</script>

<style>
    canvas {
        border: 1px solid #000000;
        
    }
    .container {
        position: relative;
        width: fit-content;
        margin: 20px;
    }
    .coordinate {
        position: absolute;
        font-size: 10px;
        color: grey;
    }
    .vertical-coord {
        position: absolute;
        transform: translateY(-50%);
    }
    .horizontal-coord {
        position: absolute;
        transform: translateX(-50%);
    }
    .input-container {
        margin: 20px;
    }
    .input-field {
        margin: 5px;
    }
</style>

<div class="input-container">
    <div class="input-field">
        <label for="startX">Start X: </label>
        <input type="number" id="startX" bind:value={$startX} on:change={draw} />
    </div>
    <div class="input-field">
        <label for="startY">Start Y: </label>
        <input type="number" id="startY" bind:value={$startY} on:change={draw} />
    </div>
    <div class="input-field">
        <label for="endX">End X: </label>
        <input type="number" id="endX" bind:value={$endX} on:change={draw} />
    </div>
    <div class="input-field">
        <label for="endY">End Y: </label>
        <input type="number" id="endY" bind:value={$endY} on:change={draw} />
    </div>
</div>

<div class="container">
    <canvas id="myCanvas" width="500" height="500"></canvas>
    {#each Array(11).fill(0).map((_, i) => i * 50) as x}
        <div class="coordinate horizontal-coord" style="left: {x + 10}px; top: 510px;">{x}</div>
        <div class="coordinate vertical-coord" style="left: 510px; top: {x + 10}px;">{x}</div>
    {/each}
</div>
