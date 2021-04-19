<template>
  <div class="flex flex-col mt-14">
    <!-- LIST BELT-->
    <ListBelt :config="listBeltConfig" @buttonAction="$emit('listBeltButtonAction')"/>
    <div v-if="isLoading" class="flex flex-row justify-center">
      <Searching class="w-1/3 my-24"/>
    </div>
    
    <!-- CONTENT -->
    <section v-else >
      <div v-for="user in data" v-bind:key="user.id" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
      <UsersCards
       :email="user.email" 
       :firstName="user.fname"
       :lastName="user.lname"
       :isOnline="user.is_online"
       :isActive="user.is_active"
      />
      <UsersCards
       :email="user.email" 
       :firstName="user.fname"
       :lastName="user.lname"
       :isOnline="user.is_online"
       :isActive="user.is_active"
      />
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
import Permission from '../Accordion/Permission'
import subPermission from '../Accordion/subPermission'
export default {
  components: {  
    ListBelt,
    UsersCards,
    Pagination,
    Searching,
    Permission,
    subPermission,
  },
  data(){
    Permission
    return{
      openDropdown: false,
      listBeltConfig: {
         buttonText: "ADD NEW USER",
         buttonIcon: "user-plus"
      },
      permissions: [
        {
          id: 1,
          title: "PBAC",
          collapse: false,
            rolePermissions: [
              {
                id: 1,
                name: "Purchase Order"
              }
            ]
        }
      ]
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

