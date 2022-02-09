<template>
  <div class="home">
<!--   This is TOOLBar   -->
    <div class="main-page-toolbar">
      <div class="desk-search-div">
        <input class="desk-search-input" placeholder="Write board name..." type="text">
      </div>
      <div class="filters">
        Filters
      </div>
      <div class="sort">
        Sort by..
      </div>
    </div>
<!--   This is BOARDBar   -->
    <div class="main-board-div">
        <div class="board"
             v-for="board in dataObjectMass" :key="board"
             @click="$router.push('/desk/' + board.id)"
        >
            <div class="board-name">
                <div class="board-name-text">
                    {{board.name}}
                </div>
            </div>
            <div class="board-date">
                <div class="board-date-text">
                    {{board.date}}
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'Home',
    data: () => ({
      width: null,
      height: null,
      dataObjectMass: {
        fistTable: {
            id: 1,
            name: "First Desk",
            date: "07.6.2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            picture: "Kek this is picture"
        },
        secondTable: {
            id: 2,
            name: "Second Desk",
            date: "07.6.2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            picture: "Kek this is picture"
        },
        thirdTable: {
            id: 3,
            name: "Third Desk",
            date: "07.6.2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            picture: "Kek this is picture"
        },
        fourthTable: {
            id: 4,
            name: "Forth Desk",
            date: "07.6.2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            picture: "Kek this is picture"
        }
      }
    }),
    methods: {
      routerMethod(boardId) {
          this.router.push({path: 'desk', params: {boardId}})
        // console.log("hello")
      }
    },
    async mounted () {
      // console.log(innerHeight)
      // console.log(innerWidth)
    }
  }
</script>

<style>
    .home {
        background-color: #fafbfc;
    }
    .main-page-toolbar {
        padding: 2% 0 2% 0;
        width: 100%;
        height: 4%;
        background-color: #f2f2f5;
        align-items: center;
        display: flex;
        justify-content: flex-start;
        gap: 2%;

        border-color: rgba(0,0,0, 0.3);
        border-width: 0 0 1px 0;
        border-style: solid;
    }
    .desk-search-div {
        margin-left: 4%;
        height: 100%;
    }
    .desk-search-div input:focus {
        outline: #0f3443 solid 1px !important;
    }
    .desk-search-div input:hover {
        outline: rgba(15, 52, 67, 0.54) solid 1px;
    }
    .desk-search-input {
        height: 100%;
        border: none;
        border-radius: 2px;
        outline: none;
        font-size: 18px;
    }
    .main-board-div {
        height: 50%;
        margin: 2% 2% 0 2%;
        display: grid;
        grid-column-gap: 2%;
        grid-row-gap: 2%;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .board {
        background: url('../assets/back2.jpg') no-repeat center;
        background-size: cover;
        height: 200px;
        border-radius: 5%;
        cursor: pointer;

        font-family: sans-serif;
        font-weight: 800;
        font-size: 18px;
    }
    .board:hover .board-date {
        background: linear-gradient(rgba(0,0 ,0, 0.2), rgba(51, 225, 154, 0.4));
        border-radius: inherit;
        height: 70%;
        color: white;
    }
    .board:hover .board-name {
        /*background: rgba(255, 255, 255, 0.8);*/
        /*border-radius: inherit;*/
        height: 30%;
    }
    .board-name {
        height: 50%;
    }
    .board-name-text {
        margin-left: 10%;
        padding-top: 2%;
        color: #ffffff;
    }
    .board-date {
        height: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 15px 15px 0 0;
        color: #616161;

        transition: 50ms;
    }
    .board-date-text {
        margin-left: 10%;
        padding-top: 2%;
    }

</style>
