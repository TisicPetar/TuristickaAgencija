<template>
    <div class="row">
            <div v-for="product in getProductsForArr" :key="product.id" class="col-sm-4">
              <MySingleProduct :aranzman="product"></MySingleProduct>
            </div>
          </div>
    
    </template>

    <script>
    import MySingleProduct from '@/components/MySingleProduct.vue';
    import { mapActions, mapGetters } from 'vuex';
    
    export default{
        name:"MySingleProducts",
        components:{
           MySingleProduct 
        },computed:{
            ...mapGetters([
                'getMyProducts'
            ]),
    
            getProductsForArr(){
                return Object.values(this.getMyProducts)
            }
        },
        mounted(){
            this.fetchMyReservations()
    },
        methods:{
            ...mapActions([
                'fetchMyReservations'
            ]),
        }
    }
    
    </script>