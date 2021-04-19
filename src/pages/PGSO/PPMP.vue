<template>
  <PPMPList @listBeltButtonAction="listBeltAction" />
  <Modal
    v-if="openModal"
    @closeModal="openModal = false"
    modalTitle="Add PPMP"
    modalButtonName="Add PPMP"
    @modalAction="addUser"
  >
    <template v-slot:modal-content>
      <div class="flex flex-col -mx-3 pt-5">
        <div class="flex">
          <div class="w-1/2 px-3 mb-5">
            <Dropdown label="From" name="Month" :data="months" />
          </div>

          <div class="w-1/2 px-3 mb-5">
            <Dropdown label="To" name="Month" :data="months" />
          </div>
        </div>
        <div class="w-full px-3 mb-5">
          <Input
            type="text"
            label="Item / Equipment"
            placeholder="Enter Item or Equipment"
            isRequired
            maxLength="25"
            isTextOnly
          />
        </div>
        <div class="w-full px-3 mb-5">
          <Input
            type="numeric"
            label="Quantity"
            placeholder="Enter Quantity"
            isRequired
            maxLength="25"
            isTextOnly
          />
        </div>
        <div class="flex">
          <div class="w-1/2 px-3 mb-5">
            <Dropdown label="From" name="Unit" :data="unit" />
          </div>

          <div class="w-1/2 px-3 mb-5">
            <Dropdown label="To" name="Type" :data="type" />
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import PPMPList from "../../components/List/PPMPList";
import Modal from "../../components/Modals/Modal";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";

export default {
  data() {
    return {
      openModal: false,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      unit: ['meter', 'inch', 'dozen'],
      type: ['Consumable', 'Non-Consumable']
    };
  },
  components: {
    PPMPList,
    Modal,
    Input,
    Dropdown,
  },
  methods: {
    listBeltAction() {
      this.openModal = true;
    },
  },
};
</script>

<style>
</style>