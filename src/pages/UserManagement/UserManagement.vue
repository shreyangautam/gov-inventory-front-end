<template>
  <UserList
    :data="usersList"
    :isLoading="isLoading"
    @listBeltButtonAction="listBeltAction"
  />
  <SuccessAlert v-if="showSuccess" @closeAlert="showSuccess = false"/>
  <Modal
    v-if="openModal"
    @closeModal="closeModal"
    modalTitle="Add User"
    modalButtonName="Add User"
    @modalAction="addUser"
    disableDefaultButtons
  >
    <template v-slot:modal-content>
      <ErrorAlert :message="errorMessage" v-if="showError" @closeAlert="showError = false"/>
      <Loading v-if="modalLoading"/>
      <div v-else class="h-10"/>
      <div class="flex flex-col -mx-3">
      
        <Stepper :stepsData="stepperData" @stepperAction="switchStepPages">
        
        <template v-slot:stepper-pages>
        <div v-if="stepperData[0].isActive">
        <div class="w-full px-3 mb-5">
          <Input
            type="text"
            label="Firstname"
            placeholder="Enter firstname of user"
            @getValue="addToCollections"
            :value="fields[0].value"
            isRequired
            maxLength="25"
            isTextOnly
          />
        </div>
        <div class="w-full px-3 mb-5">
          <Input
            type="text"
            label="Middlename"
            placeholder="Enter midlename of user"
            @getValue="addToCollections"
            :value="fields[1].value"
            isRequired
            isTextOnly
            maxLength="20"
        
          />
        </div>

        <div class="w-full px-3 mb-5">
          <Input
            type="text"
            label="Lastname"
            placeholder="Enter lastname of user"
            @getValue="addToCollections"
            :value="fields[2].value"
            isRequired
            isTextOnly
            maxLength="20"
         
          />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 px-3 pb-3">
          
            <Input
              label="Email Address"
              placeholder="user@email.com"
              @getValue="addToCollections"
              maxLength="20"
              isRequired
              type="text"
              :value="fields[3].value"
            />


            <Input
              label="Mobile Number"
              placeholder="09XX XXX XXXX"
              maxLength="11"
              type="numeric"
            />
        </div>
        </div>
         <div v-if="stepperData[1].isActive">You are in Roles</div>
         <div v-if="stepperData[2].isActive">You are in Permission</div>

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
import { clearAllFields, formValidation, resetStepperData } from "../../helpers/helpers";
import Stepper from "../../components/Stepper/Stepper"
export default {
  computed: mapState(["usersList"]),
  data() {
    return {
      isLoading: true,
      openModal: false,
      modalLoading: false,
      errorMessage: '',
      showError: false,
      showSuccess: false,
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

      stepperData: [
        {
          stepName: "Basic Info",
          isActive: true,
          isNext: false,
        },
        {
          stepName: "Roles",
          isActive: false,
          isNext: true,
        },
        {
          stepName: "Permission",
          isActive: false,
          isNext: false,
        },

      ]
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
        this.$router.push("/login");
      } else {
        setTimeout(() => (this.isLoading = false), 1000);
      }
    },
    listBeltAction() {
      this.openModal = !this.openModal;
    },
    closeModal() {
      this.resetUI()
      //console.log(clearAllFields(this.fields))
      this.openModal = false;
      //console.log("Steper Data", this.stepperData);
    },
    addToCollections(label, value) {
      //console.log(value)
      let index = this.fields.findIndex((data) => data.label === label);
      this.fields[index].value = value;
      //console.log(this.fields[index].value)
    },
    addUser() {
      //this.modalLoading = !this.modalLoading

      let result = formValidation(this.fields)
      if(result === true){
        console.log("send the data to api")
        this.showSuccess = true
        this.closeModal()
        //console.log(this.fields)
        //console.log(this.stepperData)
      }
      else{
        this.errorMessage = result
        this.showError = true
      }
      console.log(result);
    },
    switchStepPages(data){
       if(data === 'finish'){
         console.log("execute the finish")
         this.addUser()
       }
       else{
         this.stepperData = data
         console.log(this.stepperData)
       }

    },
    resetUI(){
        this.fields = clearAllFields(this.fields);
        this.stepperData = resetStepperData(this.stepperData)
    }
  },
};
</script>

<style scoped>
</style>