<template>
    <div class="main-desk-div">
        <draggable class="list-container"
                   :group="{name: 'lists', pull:true, put: true}"
                   :list="list"
                   :sort="true"
                   @change="commitChange"
        >
            <div
                    class="list-item"
                    v-for="element in list"
                    :key="element.name"
            >
                <div class="list-item-text">
                    {{ element.name }}
                </div>
            </div>
        </draggable>
        <draggable class="list-container"
                   :group="{name: 'lists', pull:true, put: true}"
                   :list="list2"
                   @change="commitChange"
        >

            <div
                    class="list-item"
                    v-for="element in list2"
                    :key="element.name"
            >
                <div class="list-item-text">
                    {{ element.name }}
                </div>
            </div>
        </draggable>
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
        // lists: [
        //     {
        //         listId: 1,
        //         list: [
        //             { id: 1, listId: 1, name: '11' },
        //             { id: 2, listId: 1, name: '12' },
        //             { id: 3, listId: 1, name: '13' }
        //         ]
        //     },
        //     {
        //         listId: 2,
        //         list: [
        //             { id: 1, listId: 2, name: '21' },
        //             { id: 2, listId: 2, name: '22' },
        //             { id: 3, listId: 2, name: '23' }
        //         ]
        //     },
        //     {
        //         listId: 3,
        //         list: [
        //             { id: 1, listId: 3, name: '31' },
        //             { id: 2, listId: 3, name: '32' },
        //             { id: 3, listId: 3, name: '33' }
        //         ]
        //     }
        // ]
        enabled: true,
        list: [
            { name: 'John', id: 1 },
            { name: 'Jojo', id: 2 },
            { name: 'Jean', id: 3 },
            { name: 'Gerard', id: 4 },
        ],
        list2: [
            { name: 'John2', id: 12 },
            { name: 'Jojo2', id: 22 },
            { name: 'Jean2', id: 32 },
            { name: 'Gerard2', id: 42 },
        ],
        dragging: false,
    }),
    methods: {
        commitChange(event) {
            //console.log(event)
            console.log(this.list)
        },
    },
    mounted() {}
})
</script>

<style scoped>
    .main-desk-div {
        width: 97%;
        padding: 3% 0 0 3%;
        background-color: rgba(246, 247, 249, 0.96);
    }
    .list-container {
        background-color: white;
        padding: 1% 1% 2% 1%;
        width: 20%;
        border-radius: 15px;
        border: 1px solid #0f3443;
    }
    .list-item {
        padding: 2% 0 2% 0;
        border-bottom: #8e8e8e solid 1px;
    }
    .list-item-text {

    }
</style>
