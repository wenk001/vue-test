<template>
<div class="wk">
  <div>
    <h1>登录系统</h1>
  </div>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
        placeholder="用户名"
        v-model="username"
      >
        <a-icon
          slot="prefix"
          type="user"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
        type="password"
        placeholder="密码"
        v-model="password"
      >
        <a-icon
          slot="prefix"
          type="lock"
          style="color: rgba(0,0,0,.25)"
        />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
         @click="handleSubmit"
      >
        登录
      </a-button>
    </a-form-item>
  </a-form>
  <a-modal
      title="登陆成功："
      v-model="visible"
      @ok="handleOk"
    >
      <p>{{username}}</p>
      <p>{{realname}}</p>
    </a-modal>
  </div>
</template>

<script>
  import { mapActions } from "vuex"
  import Vue from 'vue'
export default {

  data: function () {
    return {
      username:"",
      password:"",
      realname:"",
      visible:false
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
   created () {
      Vue.ls.remove('ACCESS_TOKEN')
   },
  methods: {
    
    ...mapActions([ "Login"]),
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
      let loginParams={
        username:this.$data.username,
        password:this.$data.password,
      }
      let that=this
      that.Login(loginParams).then(() => {
            this.realname=this.$store.state.name
            that.loginSuccess()
            
        }).catch((err) => {
          that.requestFailed(err);
        })
    },
    loginSuccess(){
      this.visible=true
    },
    handleOk() {
      this.visible = false
    },
  },
};
</script>
<style scoped>
.wk{
  width: 30%;
  height: auto;
  margin: auto;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>