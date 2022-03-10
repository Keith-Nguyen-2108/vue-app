<template>
    <div>
        <div>
            <h1 :class="color && redColor">VBind Class</h1>
            <h1 :id="bindId"> VBind ID</h1>
            <h1 :style="backgroundColor">VBind Style</h1>
        </div>
        
        
        <button @click="colorText()">Toggle Color</button>
    </div>
</template>

<script>
    export default {
        name: 'VBind',
        data () {
            return {
                redColor: 'red-color',
                color: false,
                bindId: 'bindId',
                backgroundColor: {
                    backgroundColor: 'black',
                    color: 'white',
                    height: '50px',
                    width: '100%'
                }
            };
        },
        methods: {
            colorText () {
                this.color = !this.color
            }
        }
    }
</script>

<style scoped>

    .red-color{
        color: red;
    }

    #bindId{
        font-size: 18px;
    }

</style>
