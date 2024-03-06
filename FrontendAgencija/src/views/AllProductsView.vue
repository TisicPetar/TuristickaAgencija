<template>
<div class="row">
        <div v-for="product in getProductsForArr" :key="product.id" class="col-sm-4">
          <SingleProduct :aranzman="product"></SingleProduct>
        </div>
      </div>

</template>

<script>
import SingleProduct from '@/components/SingleProduct.vue';
import { mapActions, mapGetters } from 'vuex';

export default{
    name:"AllProducts",
    components:{
       SingleProduct 
    },computed:{
        ...mapGetters([
            'getProducts'
        ]),

        getProductsForArr(){
            return Object.values(this.getProducts)
        }
    },
    mounted(){
        this.fetchProducts()
    }, methods:{
        ...mapActions([
            'fetchProducts','rezervisi'
        ]),
    }
}

</script>