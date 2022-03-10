<template>
    <div>
        <div>
            <input type="text" v-model="item"/>
            <button @click="submitItem()">Submit</button>
        </div>
        <ul :class="unstyle">
            <li v-for="(it, index) in items" :key="index" @click="getItem(index)">
                {{ it }}
                <font-awesome-icon :icon="['fas', 'minus-circle']" @click="removeItem(index)" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Todos',
    data () {
        return{
            item:'',
            items: [],
            id: 0,
            unstyle: 'unstyle'
        }
    },
    methods: {
        
        submitItem(){
            if(this.id > -1){
                const arr = [...this.items]
                arr[this.id] = this.item
                this.items = arr
                this.id=0
                this.item = ''
            }
            else{
                this.items=[...this.items,this.item]
                this.item=''
            }
        },
        getItem(index) {
            this.item = this.items[index]
            this.id = index
        },
        removeItem(index){
            const arr = [...this.items]
            arr.splice(index,1)
            this.items = arr
        }
    }
}
</script>

<style scoped>
    .unstyle{
        list-style-type: none;
    }
</style>