<template>
    <div>
        <div>
            <p>Coordinates</p>
            <button @click="addOneMoreRow()">+</button>
            <button @click="addToArray()">Display</button>
        </div>
        <table>
            <tr>
                <th>Lat</th>
                <th>Long</th>
                <th></th>
            </tr>
            <tr v-for="(i) in length" :key="i">
                <td><input type="text" v-model="coordinate.lat" placeholder="Lat" /></td>
                <td><input type="text" v-model="coordinate.long" placeholder="Long" /></td>
                <td>X</td>
            </tr>
        </table>
        <p>{{coordinate}}</p>
        
        <ul>
            <li v-for="(coor) in coordinates" :key="coor">
                {{coor}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name: "Table",
        data(){
            return{
                length:1,
                coordinate:{
                    id: 0,
                    lat: "",
                    long: "",
                },
                coordinates: []
                
            }
        },
        methods:{
            addOneMoreRow(){
                this.length++
            },
            addToArray(){
                console.log(this.coordinate);
                // const arr = [...this.coordinates]
                // arr[this.coordinates.length] = this.coordinate
                // console.log(arr)
                // this.coordinates=arr
                // console.log(this.coordinates)
                this.coordinate.lat=""
                this.coordinate.long=""
            },
            deleteOneRow(index){

            }
        }
    }
</script>