<template>
  <div :class="[type === 'horizantal' ? 'vm-card-horizantal' : 'vm-card-vertical' , 'vm-panel']" style="width:100px;display:inline;">
    <div class="card-img" style="width:100px;display:inline;">
      <img :src="img" alt="" style="width:100%;">
      <div v-if="editable && type == 'vertical'" class="control">
        <span class="edit">
          <a :href="editUrl">
            <i class="fa fa-pencil"></i>
          </a>     
        </span>
        <span class="delete">
          <i class="fa fa-trash" @click="modalDelete=true"></i>
        </span>
      </div>
    </div>
    <Modal
        v-model="modalDelete"
        title="Delete"
        ok-text="OK"
        cancel-text="Cancel"
        v-on:on-ok="deleteOk">
        Are you sure to delete this data?
    </Modal>
  </div>
</template>
<script>
  export default {
    name: 'VmCard',
    props: {
      type: {
        type: String,
        default: 'vertical'
      },
      editable: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: 'Title'
      },
      img: {
        type: String,
        default: require('../assets/images/z.jpg')
      },
      desc: {
        type: String,
        default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
      },
      detailUrl: {
        type: String,
        default: '#'
      },
      editUrl: {
        type: String,
        default: '#'
      }
    },
    data: function () {
      return {
        modalDelete: false
      }
    },
    methods: {
      deleteOk: function () {
        this.$emit('delete-ok')
      }
    }
  }
</script>
<style>
.card-img{height:175px;display:inline-block;overflow:hidden;}
</style>





