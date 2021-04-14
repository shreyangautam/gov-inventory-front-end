<template>
  <UserList
    :data="usersList"
    :isLoading="isLoading"
    @listBeltButtonAction="listBeltAction"
  />
  <Modal
    v-if="openModal"
    @closeModal="closeModal"
    modalTitle="Add User"
    modalButtonName="Add User"
    @modalAction="addUser"
    disableDefaultButtons
  >
    <template v-slot:modal-content>
      <Loading v-if="modalLoading"/>
      <div v-else class="h-10"/>
      <ErrorAlert/>
      <div class="flex flex-col -mx-3">
      
        <Stepper >
        
        <template v-slot:stepper-pages>
        <div>
        <div class="w-full px-3 mb-5">
          <Input
            type="text"
            label="Firstname"
            placeholder="Enter firstname of user"
            @getValue="addToCollections"
      
            isRequired
            maxLength="25"
            isTextOnly
          />
        </div>
        <div class="w-full px-3 mb-5">
          <Input
            type="text"
            label="Middlename"
            placeholder="Enter firstname of user"
            @getValue="addToCollections"
            isRequired
            isTextOnly
            maxLength="20"
        
          />
        </div>

        <div class="w-full px-3 mb-5">
          <Input
            type="text"
            label="Lastname"
            placeholder="Enter firstname of user"
            @getValue="addToCollections"
            isRequired
            isTextOnly
            maxLength="20"
         
          />
        </div>
        <div class="flex">
          <div class="w-1/2 px-3 mb-5">
            <Input
              label="Email Address"
              placeholder="user@email.com"
              @getValue="addToCollections"
              maxLength="20"
              isRequired
              type="text"
       
            />
          </div>

          <div class="w-1/2 px-3 mb-5">
            <Input
              label="Mobile Number"
              placeholder="09XX XXX XXXX"
              maxLength="11"
              type="numeric"
            />
          </div>
        </div>
        </div>
        </template>
        </Stepper>
      </div>
    </template>
  </Modal>
</template>

<script>
import List from "../../components/List/List";
import Input from "../../components/Input/Input";
import store from "../../store/store";
import Modal from "../../components/Modals/Modal";
import Loading from "../../components/Loading"
import SuccessAlert from "../../components/Alert/SuccessAlert"
import ErrorAlert from "../../components/Alert/ErrorAlert"
import { mapState } from "vuex";
import { clearAllFields, formValidation } from "../../helpers/helpers";
import Stepper from "../../components/Stepper/Stepper"
export default {
  computed: mapState(["usersList"]),
  data() {
    return {
      isLoading: true,
      openModal: false,
      modalLoading: false,
      fields: [
        {
          label: "Firstname",
          api_field: "fname",
          isRequired: true,
          value: "",
        },
        {
          label: "Middlename",
          api_field: "mname",
          isRequired: true,
          value: "",
        },
        {
          label: "Lastname",
          api_field: "lname",
          isRequired: true,
          value: "",
        },
        {
          label: "Email Address",
          api_field: "lname",
          isRequired: true,
          value: "",
        },
      ],
    };
  },
  components: {
    UserList: List,
    Modal,
    Input,
    Loading,
    SuccessAlert,
    ErrorAlert,
    Stepper
  },
  created() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      let result = await store.dispatch("getUsersList");
      if (result === "UNAUTHORIZED") {
        this.$router.push("/");
      } else {
        setTimeout(() => (this.isLoading = false), 1000);
      }
    },
    listBeltAction() {
      this.openModal = !this.openModal;
    },
    closeModal() {
      this.fields = clearAllFields(this.fields);
      //console.log(clearAllFields(this.fields))
      this.openModal = false;
      console.log(this.fields);
    },
    addToCollections(label, value) {
      //console.log(value)
      let index = this.fields.findIndex((data) => data.label === label);
      this.fields[index].value = value;
      //console.log(this.fields[index].value)
    },
    addUser() {
      this.modalLoading = !this.modalLoading
      let result = formValidation(this.fields)
      console.log(this.fields);
    },
  },
};
</script>

<style scoped>
</style>