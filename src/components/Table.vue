<template>
  <div class="table-container">
    <div class="table-coordinate mt-5">
      <p class="table-coordinate__title">Coordinate Form</p>
      <div class="d-flex flex-wrap justify-content-start mt-3">
        <div
          class="
            col-sm-12 col-md-12 col-lg-6
            d-flex
            flex-wrap
            justify-content-between
          "
        >
          <div class="form-group col-12 col-sm-6 col-md-6 col-lg-3 lat-input">
            <label htmlFor="txtLat">Lat</label>
            <input
              type="text"
              class="form-control"
              id="txtLat"
              placeholder="Enter lat. Ex: 9.567941"
              v-model="coordinate.lat" 
            />
            
            <span class="text-danger">{{error.lat}}</span>
          </div>
          <div class="form-group col-12 col-sm-6 col-md-6 col-lg-3 long-input">
            <label htmlFor="txtLong">Long</label>
            <input
              type="text"
              class="form-control"
              id="txtLong"
              placeholder="Enter long. Ex: 105.7459"
              v-model="coordinate.long"
            />
            <span class="text-danger">{{error.long}}</span>
          </div>
          <button class="btnAddCoor" @click="addToArray()">
            Add coordinate
          </button>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <table class="table__coordinate">
            <thead>
              <tr>
                <th>Lat</th>
                <th>Long</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="coor in coordinates" :key="coor.id">
                <td>
                  <input type="text" v-model="coor.lat" />
                </td>
                <td>
                  <input type="text" v-model="coor.long" />
                </td>
                <td>
                  <span @click="deleteOneRow(coor.id)" style="cursor: pointer"
                    >X</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <button class="btnAddCoor" @click="log()">
            Log
          </button> -->
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      //   length: 1,
      error:{
        lat:'',
        long: ''
      },
      coordinate: {
        id: 0,
        lat: "",
        long: "",
      },
      coordinates: [],
    };
  },
  methods: {
    addToArray() { 
      this.error={
        lat:'',
        long: ''
      }
      if (this.coordinate.lat === "" ) {
        this.error.lat = 'Lat is required ';
      }
      if(this.coordinate.long === ""){
        this.error.long ='Long is required ';
      }
      if(this.coordinate.lat !== "" && !this.coordinate.lat.match(/^\d*[.]{1}\d*$/)){
        this.error.lat="Must be Only accept the number and dot (.) character.";
      }
      if(this.coordinate.long !== "" && !this.coordinate.long.match(/^\d*[.]{1}\d*$/)){
        this.error.long="Must be Only accept the number and dot (.) character.";
      }
      else if(
        (this.coordinate.lat !== "" && this.coordinate.lat.match(/^\d*[.]{1}\d*$/)) &&
        (this.coordinate.long !== "" && this.coordinate.long.match(/^\d*[.]{1}\d*$/))
      ){
        //   console.log(this.coordinate);
        this.coordinate.id++;
        const arr = [...this.coordinates];
        arr[this.coordinates.length] = Object.assign({}, this.coordinate);
        //   console.log(arr);
        this.coordinates = arr;
        //   console.log(this.coordinates);
        this.coordinate.lat = "";
        this.coordinate.long = "";
      }
    },

    deleteOneRow(index) {
      let arr = [...this.coordinates];
      arr = arr.filter((coordinate) => coordinate.id !== index);
      this.coordinates = arr;
    },

    log() {
      console.log(this.coordinates);
    },
  },
};
</script>

<style scoped>
.table-container {
  width: 1200px;
  margin: auto;
  padding-top: 100px;
}

.table-coordinate div {
  padding: 0 15px;
  margin-bottom: 1rem;
}

.table-coordinate__title {
  font-size: 25px;
  letter-spacing: 2px;
  color: white;
  padding-left: 30px;
  font-family: "Marcellus SC", serif;
  font-weight: 400;
  text-transform: uppercase;
}

.table-container .form-control {
  position: relative;
  width: 100%;
  margin: 0 0 14px;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  line-height: 20px;
  color: #656565;
  background-color: transparent;
  border: 1px dashed #ccc;
  outline: none;
  box-sizing: border-box;
  height: 60px;
}

.table-container label {
  font-size: 18px;
  line-height: 2;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  color: white;
  text-transform: capitalize;
  float: left;
}

.btnAddCoor {
  outline: 0;
  font-size: 12px;
  letter-spacing: 0.15em;
  font-weight: 600;
  text-transform: uppercase;
  box-sizing: border-box;
  height: 60px;
  border: 1px solid white;
  padding: 20px 25px;
  color: #fff;
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;
}

.btnAddCoor:hover {
  background-color: white;
  color: black;
}

.table__coordinate {
  color: white;
  width: 80%;
  float: right;
  margin-top: 36px;
}

.table__coordinate tr th,
.table__coordinate tr td {
  border: 1px dashed #ccc;
  text-align: center;
  padding: 5px 0;
}

.table__coordinate tr th:not(:last-child),
.table__coordinate tr td:not(:last-child) {
  width: 40%;
}

.table__coordinate tr th:last-child,
.table__coordinate tr td:last-child {
  width: 20%;
}

.table__coordinate input {
  color: #fff;
  background-color: transparent;
  border: none;
  text-align: center;
}

.table__coordinate input:focus {
  border: none;
  outline: none;
}

.lat-input,
.long-input {
  width: 48% !important;
  padding: 0px !important;
}
</style>