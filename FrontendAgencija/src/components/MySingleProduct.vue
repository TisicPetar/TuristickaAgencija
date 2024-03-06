<template>
    <div class="aranzman">
        <div>
            <b-card
                    img-src="https://fastly.picsum.photos/id/71/5000/3333.jpg?hmac=wBjyqoAke0uv6bTtbbIby9s-VTQ52gIkI-QVXWS3W0I"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                <b-card-text>
                    <ul>
                        <li>ID korisnik: {{ aranzman.korisnikID}}</li>
                        <li>Po cenovniku: {{aranzman.cenovnikID}}</li>
                        <li>Racun br: {{ aranzman.id }}</li>
                        <li>Popust: {{ aranzman.popust }}%</li>
                    </ul>
                </b-card-text>
            </b-card>
        </div>
    </div>
</template>

<script>
import { mapActions,mapState } from 'vuex';
import store from '../store/index'

export default {
   name: 'MySingleProduct',

   props: {
     aranzman: Object
   },computed:{
        logged(){
            return this.$store.state.token !== 'izlogovan'
        }
    },
    methods:{
        // onSubmit(e){
        //     this.fetchMyReservations({})
            // socket.emit('smanji', {
            //     aranzman:this.aranzman.id,
            //     broj:this.aranzman.kolicina - 1 
            // })
        // }
    }
  }

</script>
