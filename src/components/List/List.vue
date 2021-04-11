<template>
  <div class="flex flex-col mt-5">
    <!-- LIST BELT-->
    <ListBelt :config="listBeltConfig"/>
    <!-- CONTENT -->
    <section class="flex flex-row flex-wrap relative">
      <ErrorAlert/>
      <UsersCards/>
      <UsersCards/>
      <UsersCards/>
    </section>
    <!-- PAGINATION -->
    <Pagination/>
  </div>
</template>

<script>
import ErrorAlert from '../Alert/ErrorAlert'
import ListBelt from "../ListBelt/ListBelt"
import UsersCards from "../Cards/UsersCards"
import Pagination from "../ListPagination/ListPagination"
export default {
  components: {  
    ListBelt,
    UsersCards,
    Pagination,
    ErrorAlert,
  },
  data(){
    return{
      openDropdown: false,
      listBeltConfig: {
         buttonText: "ADD NEW USER",
         buttonIcon: "user-plus"
      }
    }
  },
  props: {
    
  },
  created() {
    
  },
};
</script>

<style>
.customPosition {
  margin-top: -100px;
  margin-bottom: 20px;
}
</style>