<template>
  <div class="claim">
<v-app v-cloak>
    <v-content class="bgGrad">
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row wrap justify-center>
                <v-flex xs12>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs4>
                    <v-card class="cardForm"> 
                        <v-form v-model="valid">
                            <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                            <v-text-field v-model="phone" label="Phone" required></v-text-field>
                            <v-text-field v-model="wineryInf" label="Winery" required></v-text-field>
                            <v-btn round>Claim This Winery</v-btn>
                        </v-form>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>

            
                <v-container>
                    <v-flex>
                        
                            <h1 class="display-2">How Our Listings Work</h1>
                            <p class="headline font-weight-thin">
                                We currently have most of the wineries in the united states listed in out directory as unclaimed. Which means we have very little information to present about these unclaimed wineries.

                                In an effort to give our users the best experience possible we rank upgraded wineries (claimed or premium) higher than the basic unclaimed wineries.
                            </p>
                        
                    </v-flex>
                </v-container>
            
                    <v-flex xs4>
                        <!-- <img id="phone" src="../../lib/phone.png"> -->
                        <img id="phone" src="#">

                    </v-flex>
                
            </v-layout>
            <v-layout row justify-center>
                <v-flex>
                    <!-- <img id="laptop" src="../../lib/laptop.png"> -->
                    <img id="laptop" src="#">

                </v-flex>
                <v-container>
                    <v-flex>
                        
                        <h1 class="display-2">Claimed Listings</h1>
                            
                        <h2 class="title"><i class="material-icons">done</i>Profile Page</h2>
                        <p class="headline font-weight-thin">After you claim your listing we’ll use your website to gather all the information we need for your profile page so you won’t have to do any work.</p>
                        <h3 class="title"><i class="material-icons">done</i>Upgraded Listing</h3>
                        <p class="headline font-weight-thin">Your listing will show up in the claimed section including your logo, location and bolder title so you’ll stand out and reach more customers. (then claim your listing button)</p>
                        
                    </v-flex>
                </v-container>
            </v-layout>
        </v-container>
    </v-content>
</v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      valid: false,
      name: '',
      nameRules: [
        (v: string) => !!v || 'Name is required',
        (v: string) => v.length <= 10 || 'Name must be less than 10 characters'
        ],
      email: '',
      emailRules: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
      phone: '',
      wineryInf: '',
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-pinterest',
        'fab fa-linkedin',
        'fab fa-youtube',
        'fab fa-snapchat',
        'fab fa-instagram'
      ],
    }
  }
})
</script>
