<template>
  <div class="flex flex-col mt-14">
    <!-- LIST BELT-->
    <ListBelt :config="listBeltConfig" @buttonAction="$emit('listBeltButtonAction')"/>
    <div v-if="isLoading" class="flex flex-row justify-center">
      <Searching class="w-1/3 my-24"/>
    </div>
    
    <!-- CONTENT -->
    <section v-else class="flex flex-row flex-wrap relative">
      <PPMPTable/>
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
import subPermission from '../Accordion/subPermission'
import PPMPTable from '../Forms/PPMPTable'
export default {
  components: {  
    ListBelt,
    UsersCards,
    Pagination,
    Searching,
    subPermission,
    PPMPTable,
  },
  data(){
    Permission
    return{
      openDropdown: false,
      listBeltConfig: {
         buttonText: "ADD NEW PPMP",
         buttonIcon: "plus-square"
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

<style>
.customPosition {
  margin-top: -100px;
  margin-bottom: 20px;
}
</style>