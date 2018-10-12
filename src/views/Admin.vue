<template>
<div>
<v-container>
    <v-text-field placeholder ="Search for Winery by name" @keyup.enter.prevent ="getWineryByName(nameSearch)" v-model ='nameSearch' type='text'></v-text-field>
    <v-btn @click='getWineryByName(nameSearch)'>Search by name</v-btn>
    <v-text-field placeholder ="Search for Winery by name" @keyup.enter.prevent ="getWineryById(idSearch)" v-model ='idSearch' type='text'></v-text-field>
    <v-btn @click='getWineryById(idSearch)'>Search by Id</v-btn>
    
    <h1>Add Winery</h1>
        <v-form id="form" @submit.prevent ='updateWinery' enctype ='multipart/form-data'>
            <v-text-field label="Winery Name" name="wineryName" v-model = 'winery.wineryname'></v-text-field>
            <v-text-field label="Winery Owner" name="wineryOwner" v-model = 'winery.wineryowner'></v-text-field>
            <v-text-field label="Permit Number" name="permitNumber" v-model = 'winery.permitnumber'></v-text-field>
            <v-text-field label="Street" name="street" v-model = 'winery.street'></v-text-field>
            <v-text-field label="City" name="city" v-model = 'winery.city'></v-text-field>
            <v-text-field label="State" name="state" v-model = 'winery.state'></v-text-field>
            <v-text-field label="Zipcode" name="zip" v-model = 'winery.zipcode'></v-text-field>
            <v-text-field label="County" name="county" v-model = 'winery.county'></v-text-field>
            <v-text-field label="Latitude" name="lat" v-model = 'winery.lat'></v-text-field>
            <v-text-field label="Longitude" name="lng" v-model = 'winery.lng'></v-text-field>
            <v-text-field label="Status" name="status" v-model = 'winery.status'></v-text-field>
            <v-text-field label="Video Url" name="vidUrl" v-model = 'winery.videourl'></v-text-field>
            <v-text-field label="Website Url" name="webUrl" v-model = 'winery.websiteurl'></v-text-field>
            <input type="file" @change="logoData" id="uploader1" name="logoImg" style="display: none" accept="*.jpg">
            <v-btn label="Logo" @click="upload1" id="clicker">Logo</v-btn>
            <input type="file" @change="bgData" id="uploader2" name="backgroundImg" style="display: none" accept="*.jpg">
            <v-btn label="Background Image" @click="upload2" id="clicker">Background</v-btn>
            <v-text-field label="Phone Number" v-model = 'winery.phone'></v-text-field>
            <v-text-field label="Email" v-model = 'winery.email'></v-text-field>
            <v-text-field label="Description" v-model = 'winery.description'></v-text-field>
            <v-text-field label="Logo link" :value = 'winery.logo'></v-text-field>
            <v-text-field label ="Background Link" :value = 'winery.background'></v-text-field>
            <v-btn type ='submit'>Save</v-btn>
            <v-btn @click="addWinery">Add</V-btn>
        </v-form>
    
    <img :src= 'winery.logo'>
    <img :src= 'winery.background'>
</v-container>
</div>
</template>

<script lang="ts">
import api from '../helper/api';
import {Component, Prop, Vue } from 'vue-property-decorator';

export default Vue.extend({
    data: function () {
        return {
            winery: {
                wineryname: <string> '',
                wineryowner: <string>'',
                permitnumber: <string>'',
                street: <string>'',
                city: <string>'',
                state: <string>'',
                zipcode: <number> 0,
                county: <string>'',
                lat: <string> '',
                lng: <string> '',
                status: <string>'',
                videourl: <string>'',
                websiteurl: <string>'',
                logoImg: <string>'',
                backgroundImg: <string>'',
                logo: <string>'',
                background: <string>'',
                phone: <string>'',
                email: <string>'',
                description: <string>'',
                _id: <string>'',
            },
            nameSearch: <string>'VINEYARD GRANT JAMES',
            idSearch: <string>'5b4d3169493a1b5f8394df0b',
            exists: <boolean>false,
            wineries: <any>[],
        }
    },
    created () {},
    methods: {
        upload1(){
            let upld1 = document.querySelector('#uploader1')
            // if (upld1 != null) upld1.click()
        },
        upload2(){
            let upld2 = document.querySelector('#uploader2')
            // upld2.click()
        },
        addWinery () {
            const winery = {
                wineryname: this.winery.wineryname,
                wineryowner: this.winery.wineryowner,
                permitnumber: this.winery.permitnumber,
                street: this.winery.street,
                city: this.winery.city,
                state: this.winery.state,
                zipcode: Number(this.winery.zipcode),
                county: this.winery.county,
                lat: Number(this.winery.lat),
                lng: Number(this.winery.lng),
                status: this.winery.status,
                videourl: this.winery.videourl,
                websiteurl: this.winery.websiteurl,
                logo: this.winery.logo,
                bgImg: this.winery.backgroundImg,
                phone: this.winery.phone,
                email: this.winery.email,
                description: this.winery.description,
            }
            //using the api to add a winery to the database
            api.addWinery(winery)
                .then(winery => this.wineries.unshift(winery)) //adding the winery to the vue instance.
        },
        logoData(e: any){
            this.winery.logoImg = e.target.files[0]
        },
        bgData(e: any){
            this.winery.backgroundImg = e.target.files[0]
        },
        getWineryByName (name: string) {
            api.getWineryByName(name)
                .then(winery => this.winery = winery)
        },
        getWineryById (id: string) {
            api.getWineryById(id)
                .then(winery => this.winery = winery)
        },
        updateWinery () {

            const winery = {
                wineryname: this.winery.wineryname,
                // wineryowner: this.wineryowner,
                // permitnumber: this.permitnumber,
                // street: this.street,
                // city: this.city,
                // state: this.state,
                // zipcode: Number(this.zipcode),
                // county: this.county,
                // lat: Number(this.lat),
                // lng: Number(this.lng),
                status: this.winery.status,
                videourl: this.winery.videourl,
                websiteurl: this.winery.websiteurl,
                backgroundImg: this.winery.backgroundImg,
                logoImg: this.winery.logoImg,
                phone: this.winery.phone,
                email: this.winery.email,
                description: this.winery.description,
                _id: this.winery._id
            }
            console.log(winery)
            api.updateWinery(winery)
                .then(updatedWinery => this.winery = updatedWinery)
        }
    }
});

</script>