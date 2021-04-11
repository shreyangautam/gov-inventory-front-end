<template>
  <div class="flex flex-col mt-14">
    <!-- LIST BELT-->
    <ListBelt :config="listBeltConfig" @buttonAction="$emit('listBeltButtonAction')"/>
    <div v-if="isLoading" class="flex flex-row justify-center">
      <Searching class="w-1/3 my-24"/>
    </div>
    
    <!-- CONTENT -->
    <section v-else class="flex flex-row flex-wrap relative">
      <div v-for="user in data" v-bind:key="user.id">
      <UsersCards
       :email="user.email" 
       :firstName="user.fname"
       :lastName="user.lname"
       :isOnline="user.is_online"
       :isActive="user.is_active"
      />
      </div>
    </section>
    <!-- PAGINATION -->
    <Pagination/>
  </div>
</template>

<script>
import ListBelt from "../ListBelt/ListBelt"
import UsersCards from "../Cards/UsersCards"
import Pagination from "../ListPagination/ListPagination"
import Searching from "../Loading/Searching"
export default {
  components: {  
    ListBelt,
    UsersCards,
    Pagination,
    Searching,
  },
  data(){
    return{
      openDropdown: false,
      listBeltConfig: {
         buttonText: "ADD NEW USER",
         buttonIcon: "user-plus"
      },
    }
  },
  props: {
    data: Array,
    isLoading: Boolean
  },
  created() {
    console.log(this.data)
  },
};
</script>

<style>
.customPosition {
  margin-top: -100px;
  margin-bottom: 20px;
}
</style>