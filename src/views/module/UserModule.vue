 <template>
  <div>
    <a-button
        type="primary"
        icon="plus"
        @click="changevisible"
      >
        添加用户
      </a-button>
    <a-modal
      title="添加用户"
      v-model="visible"
      @ok="handleOk"
      style="top:5%;height: 95%;overflow-y: hidden"
      cancelText="取消添加"
      okText="确认添加"
    >
      <From/>
    </a-modal>
  </div>
</template>
<script>
import From from './From'
export default {
  data() {
    return {
      visible: false,
    }
  },
  components:{
      From,
  },
   beforeCreate () {
    this.form = this.$form.createForm(this);
    
  },
  methods: {
    changevisible(){
      this.visible=true
    },
    handleOk(e) {
      console.log(e);
      this.visible = false
    },
  }
}
</script>
