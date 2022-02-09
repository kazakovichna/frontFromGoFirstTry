<template>
    <div class="main-list-div">
        <div class="list-page-toolbar">
            <div class="new-list-div">
                <input class="new-list-input" v-model="addNewItem" placeholder="New item..." type="text">
                <div class="new-list-but-div">
                    <div class="new-list-but-text"
                        @click="addItem"
                    >
                        Add
                    </div>
                </div>
            </div>
            <div class="new-list-div">
                <input class="new-list-input" v-model="addNewList" placeholder="New List..." type="text">
                <div class="new-list-but-div">
                    <div class="new-list-but-text"
                         @click="addList"
                    >
                        Add
                    </div>
                </div>
            </div>
        </div>
        <div class="main-desk-div">
            <draggable class="list-name-wrapper"
                :list="lists"
                :animation="150"
                :group="{name: 'listsNames', pull: false, put: false}"
                @end="commitNameChange($event)"
            >
                <div class="list-name-div"
                     v-for="list in lists"
                     :key="list.listId"
                >
                    <div class="list-name-text">
                        {{list.listName}}
                    </div>
                </div>
            </draggable>
            <div class="list-wrapper">
                <draggable class="list-container"
                           :group="{name: 'lists', pull:true, put: true}"
                           v-for="list in lists"
                           :key="list.listId"
                           :animation="150"
                           :id="list.listId"
                           :list="list.list"
                           @end="commitChange(list.listId, $event)"
                >
                    <div
                        class="list-item"
                        v-for="element in list.list"
                        :key="element.itemName"
                    >
                        <div class="list-item-text">
                            {{element.itemId}}  {{ element.itemName }}
                        </div>
                        <span class="material-icons-outlined"
                              @click="deleteItem(element.itemId, list.listId)"
                        >delete</span>
                    </div>
                </draggable>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

export default defineComponent({
    name: "Desk",
    components: {
        draggable: VueDraggableNext,
    },
    data: () => ({
        addNewItem: '',
        addNewList: '',
        listsNameMas: [],
        enabled: true,
        lists: [
            {
                listId: 1,
                listName: "To Do",
                list: [
                    {itemName: "Make MakeFile", itemId: 1},
                    {itemName: "Make America Great Again", itemId: 2},
                    {itemName: "Make Some Shit", itemId: 3},
                    {itemName: "Make Mess", itemId: 4},
                ]
            },
            {
                listId: 2,
                listName: "In Progress",
                list: [
                    {itemName: "Make MakeFile 2", itemId: 1},
                    {itemName: "Make America Great Again 2", itemId: 2},
                    {itemName: "Make Some Shit 2", itemId: 3},
                    {itemName: "Make Mess 2", itemId: 4},
                ]
            },
            {
                listId: 3,
                listName: "In Check",
                list: [
                    {itemName: "Make MakeFile 3", itemId: 1},
                    {itemName: "Make America Great Again 3", itemId: 2},
                    {itemName: "Make Some Shit 3", itemId: 3},
                    {itemName: "Make Mess 3", itemId: 4},
                ]
            },
        ],
        dragging: false,
    }),
    methods: {
        commitChange(id, event) {
            const fromMas = id
            const toMas = parseInt(event.to.id)
            // const oldI = event.oldIndex
            // const newI = event.newIndex

            this.updateListsAndItems(fromMas, toMas)
        },
        // This function update itemId in Old and New lists
        // (it's necessary to correct write in data base)
        updateListsAndItems(fromMas, toMas) {
            let countMas = []
            fromMas !== toMas ? countMas.push(fromMas, toMas) : countMas.push(fromMas)

            for (let i = 0; i < countMas.length; i++) {
                for (let j = 0; j < this.lists[countMas[i] - 1].list.length; j++) {
                    this.lists[countMas[i] - 1].list[j].itemId = j + 1
                }
            }
        },
        commitNameChange(event) {
            console.log(event)
        },
        deleteItem(id, listId) {
            console.log(id)
            console.log(listId)
            this.lists[listId - 1].list.splice(id - 1, 1)

            this.updateListsAndItems(listId, listId)
        },
        addItem() {
            if (this.addNewItem === "") {
                return
            }
            const newItem = {
                itemName: this.addNewItem,
                itemId: this.lists[0].list.length + 1
            }
            this.lists[0].list.push(newItem)
            this.addNewItem = ''
        },
        addList() {
            console.log(this.addNewList)
            const newList = {
                listId: this.lists.length + 1,
                listName: this.addNewList,
                list: []
            }
            this.lists.push(newList)
            this.addNewList = ''
        }
    },
    mounted() {}
})
</script>

<style scoped>
    .main-list-div {
        width: 100%;
        background-color: rgba(246, 247, 249, 0.96);
    }
    .main-desk-div {
        display: flex;
        flex-direction: column;
        column-gap: 2%;
        width: 97%;
        height: 86%;
        padding: 3% 0 0 3%;
        overflow-x: scroll;
        overflow-y: scroll;
    }
    .main-desk-div::-webkit-scrollbar {
        width: 0;
    }
    .list-page-toolbar {
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
    .new-list-div {
        margin-left: 4%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .new-list-div input:focus {
        outline: #0f3443 solid 1px !important;
    }
    .new-list-div input:hover {
        outline: rgba(15, 52, 67, 0.54) solid 1px;
    }
    .new-list-input {
        height: 100%;
        border: none;
        border-radius: 2px;
        outline: none;
        font-size: 18px;
    }
    .new-list-but-div {
        padding: 2%;
        margin-left: 5%;
        font-family: sans-serif;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid #616161;
        border-radius: 5px;
        color: #616161;
        transition: 100ms;
    }
    .new-list-but-div:hover {
        font-weight: 500;
        background-color: white;
        cursor: pointer;
        border-color: white;
    }
    .new-list-but-text {}

    .list-name-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 2%;
    }
    .list-name-div {
        cursor: pointer;
        font: 20px sans-serif;
        font-weight: 600;
        color: #616161;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 1% 1% 1% 1%;
        margin-bottom: 0;
        border-bottom: #616161 solid 1px;

        min-width: 250px;
        max-width: 350px;
    }
    .list-name-text {}
    .list-name-but {}
    .list-wrapper {
        margin-top: 2%;
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 2%;
    }
    .list-container {
        font-family: sans-serif;

        height: fit-content;
        background-color: white;
        padding: 1% 1% 2% 1%;
        min-width: 250px;
        max-width: 350px;
        border-radius: 15px;
        border: 1px solid #0f3443;
    }
    .list-item {
        color: #616161;
        font-weight: 500;

        padding: 2% 1% 2% 1%;
        border-bottom: #8e8e8e solid 1px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .list-item:hover {
        background-color: #f2f2f5;
        cursor: pointer;
    }
    .material-icons-outlined {
        color: #616161;
        font-size: 18px;
    }

</style>
