<template>
    <div class="main-left-slide">
        <div class="slide-des">
            BOARDS
        </div>
        <div class="desks-list">
            <div class="desk"
                 v-for="board in boards" :key="board"
                 @click="$router.push('/desk/' + board.id)"
            >
                <div class="desk-name">
                    {{board.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftSlide",
        data: () => ({
            boards: {
                board1:{
                    id: 1,
                    name: "Are"
                },
                board2:{
                    id: 2,
                    name: "You"
                },
                board3:{
                    id: 3,
                    name: "Sure"
                },
                board4:{
                    id: 4,
                    name: "About"
                },
                board5:{
                    id: 5,
                    name: "That"
                },
                board6:{
                    id: 6,
                    name: "?"
                }
            }
        })
    }
</script>

<style scoped>
    .main-left-slide {
        background-color: #fafbfc;
        border-color: rgba(0,0,0, 0.3);
        border-width: 0 1px 0 0;
        border-style: solid;
    }
    .slide-des {
        margin-top: 4%;
        margin-bottom: 4%;
        width: 100%;
        text-align: center;
        font-family: sans-serif;
        font-weight: 800;
        font-size: 18px;
        color: #8e8e8e;
    }
    .desks-list {
        width: 100%;
        border-style: solid;
        border-color: rgba(0,0,0, 0.3);
        border-width: 0 0 1px 0;
    }
    .desk {
        height: 50px;
        border-style: solid;
        border-color: rgba(0,0,0, 0.3);
        border-width: 1px 0 0 0;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        background: #fafbfc;
        font-family: sans-serif;
        font-weight: 800;
        font-size: 18px;
        color: #aaaaaa;
        cursor: pointer;

        transition: 300ms;
    }
    .desk:hover{
        /*background: linear-gradient(90deg, #34e89e, #0f3443);*/
        border-style: solid;
        border-image: linear-gradient(90deg, #0f3443, #34e89e);
        border-image-slice: 1;
        border-width: 1px 50px 1px 0;
        color: #0f3443;
        background-color: white;
    }
    .desk-name {
        margin-left: 5%;
        font-family: sans-serif;
        font-weight: 600;
        font-size: 16px;
    }
</style>
