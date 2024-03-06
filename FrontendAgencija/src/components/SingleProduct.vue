<template>
    <div class="aranzman">
        <div>
            <b-card
            img-src="https://fastly.picsum.photos/id/71/5000/3333.jpg?hmac=wBjyqoAke0uv6bTtbbIby9s-VTQ52gIkI-QVXWS3W0I"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
            >
                <b-card-text>
                    <ul>
                        <li>ID: {{ aranzman.id }}</li>
                        <li>Naziv: {{ aranzman.naziv }}</li>
                        <li>Kolicina: {{ aranzman.kolicina }}</li>
                        <li>Hotel: {{ aranzman.hotelID}}</li>
                        <li>Dana: {{ aranzman.trajanjeID}} dana</li>
                    </ul>
                </b-card-text>

                <form v-if="logged"  @submit.prevent="onSubmit">
                    <button type="submit" href="#" variant="primary">Rezervisi</button>
                </form>
            </b-card>
        </div>
    
    </div>

</template>

<script>
import { mapActions,mapState } from 'vuex';
import io from 'socket.io-client'
import store from '../store/index'

let socket = io('http://localhost:7000', {
})

socket.connect()

socket.on('vracen', data => {
  store.commit('addProducts', data)
})

export default {
   name: 'SingleProduct',

   props: {
     aranzman: Object
   },computed:{
            logged(){
                return this.$store.state.token !== 'izlogovan'
            }
    },
    methods:{
        ...mapActions([
            'rezervisi'
        ]),
        onSubmit(e){
            this.rezervisi(this.aranzman.id)
            socket.emit('smanji', {
                id:this.aranzman.id
            })
        }
    }
   
 }

</script>
