<template>
    <div class="header-div">
        <div class="logo-div">S O M E _ C O O L _ L O G O</div>
        <div class="new-board">
            <div class="new-board-btn">New Board</div>
        </div>
        <div class="auth-div">You</div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header-div {
        height: 100%;
        width: 100%;
        font-family: sans-serif;
        background: linear-gradient(90deg, #34e89e, #0f3443);
        display: grid;
        grid-template-columns: 3fr 2fr 4fr;
        align-items: center;
        color: white;
        font-weight: 600;
    }
    .logo-div {
        margin-left: 1%;
        text-align: center;
        cursor: pointer;
        font-size: 20px;
        font-weight: 800;
    }
    .new-board {
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .new-board-btn {
        width: 80%;
        max-width: 200px;
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: center;

        border-style: solid;
        border-width: 2px;
        border-radius: 3px;
        color: white;
        transition: 0.2s;
    }
    .new-board-btn:hover {
        background-color: #ffffff;
        color: #259e78;
        cursor: pointer;
        border-color: #ffffff;
    }
    .auth-div {
        margin-right: 1%;
        text-align: right;
        padding-right: 5%;
    }
</style>
