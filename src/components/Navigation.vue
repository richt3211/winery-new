<template>
    <v-toolbar style="background-color: #cc3230">
    <router-link to ='/'>
        <v-toolbar-side-icon>
            <v-avatar>
                <img src="https://d1qmdf3vop2l07.cloudfront.net/white-iris.cloudvent.net/compressed/edce7f6eeee3062a0077fc33d57d65d3.svg" alt="avatar">
            </v-avatar>
        </v-toolbar-side-icon>
    </router-link>
    <v-toolbar-title class="display-1 font-weight-thin">
        Winery Guild
    </v-toolbar-title>

    <v-dialog width="700px" v-model="dialog">                            
        <v-btn slot="activator">Filter</v-btn>
        <v-card width ="700px" height="600px">
                <v-card-title><p class="text-xs-center">Set Filters</p></v-card-title>
                <v-divider></v-divider>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex md4>
                            <v-card-text style="height: 400px; overflow: auto;">
                                <v-radio-group v-model="userState">

                                    <v-radio v-for="item in filterState" name="query" :key="item" v-bind:value="item" :label="item" ></v-radio>

                                </v-radio-group>
                            </v-card-text>
                        </v-flex>
                        <v-flex md4>
                            <v-card-text style="height: 400px; overflow: auto;">
                                <v-radio-group v-model="userCounty" v-if="userState">
                                    <v-radio v-for="item in filterCounty" :key="item" v-bind:value="item" :label="item"></v-radio>
                                </v-radio-group>
                            </v-card-text>
                        </v-flex>
                        <v-flex md4>
                            <v-card-text style="height: 400px; overflow: auto;">
                                <v-radio-group v-model="userCity" v-if="userCounty">
                                    <v-radio v-for="item in filterCity"  name="city" :key="item" v-bind:value="item" :label="item"></v-radio>
                                </v-radio-group>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-card-title>
                    <v-btn @click ='searchWineries' @click.native="dialog = false">Search</v-btn>
                    <v-btn @click = 'clear'>Clear</v-btn>
                </v-card-title>
        </v-card>
    </v-dialog>
    


    <v-spacer></v-spacer>
    
    <router-link to ='/claim'>
        <v-btn>Claim</v-btn>
    </router-link>
    <router-link to ='/upgrade'>
        <v-btn>Upgrade</v-btn>
    </router-link>
    <router-link to ='/admin'>
        <v-btn>Admin</v-btn>
    </router-link>
    
    
    </v-toolbar>
</template>


<script lang='ts'>
import api from '../helper/api';
import Vue from 'vue';
export default Vue.extend({
    name: 'Navigation',
    data() {
        return {
            userState: <string>'',
            userCounty: <string>'',
            userCity: <string>'',
            filterState: <object>{},
            filterCounty: <object>{},
            filterCity: <object>{},
            dialog: <boolean>false,
        }
    },
  created() {
      console.log(this);
      const query = {}
      api.loadFilters(query)
          .then(states => this.filterState = states)
  },
  watch: {

      userState(val){
          const query:object = {
              state: val
          }
          this.userCounty = '';
          api.loadFilters(query)

              .then(counties => this.filterCounty = counties);
      },
      userCounty(val) {
          const query:object = {
              state: this.userState,
              county: val
          }
          this.userCity = ''
          api.loadFilters(query)
              .then(cities => this.filterCity = cities)
      }
  },
  methods: {
    filterCounties() {
        const query: object = {};
        api.loadFilters(query)
            .then(filters => this.filterCounty = filters)
    },
    filterCities() {
        const query: object = {};
        api.loadFilters(query)
            .then(filters => this.filterCity = filters)
    },
    searchWineries() {
        if (!this.userState) {
            this.$router.push({
                name: 'all',
                })
        }
        if (this.userState) {
            this.$router.push({
                name: 'state',
                  params: {
                      state: this.userState
                    }
                })
        }
        if (this.userCounty) {
            this.$router.push({
                name: 'county',
                params: {
                    state: this.userState,
                    county: this.userCounty
                }
            })
        }
        if (this.userCity) {
            this.$router.push({
                name: 'city',
                params: {
                    state: this.userState,
                    county: this.userCounty,
                    city: this.userCity,
                }
            })
        }
        console.log(this.dialog)
    },

    },
})
</script>