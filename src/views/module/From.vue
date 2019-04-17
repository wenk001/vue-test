<template>
  <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      v-bind="formItemLayout"
      label="用户名"
    >
      <a-input
        v-decorator="[
          'username',
          {
            rules: [{ required: true, message: '请输入用户名' }],
          }
        ]"
      />
    </a-form-item>
    <a-form-item
      v-bind="formItemLayout"
      label="密码"
    >
      <a-input
        v-decorator="[
          'password',
          {
            rules: [{
              required: true, message: '请输入密码',
            }, {
              validator: validateToNextPassword,
            }],
          }
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item
      v-bind="formItemLayout"
      label="确认密码"
    >
      <a-input
        v-decorator="[
          'confirm',
          {
            rules: [{
              required: true, message: '请再输入一次密码',
            }, {
              validator: compareToFirstPassword,
            }],
          }
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    
    <a-form-item
      v-bind="formItemLayout"
      label="性别"
    >
      <a-select  
      v-decorator="[
          'sex',
          {
            rules: [{ required: true, message: '请选择你的性别' }],
          }
        ]"
        >
      <a-select-option value="0">男</a-select-option>
      <a-select-option value="1">女</a-select-option>
  </a-select>
    </a-form-item>


    <a-form-item
      v-bind="formItemLayout"
      label="手机号"
    >
      <a-input
        v-decorator="[
          'phone',
          {
            rules: [{ required: true, message: '请输入你的手机号' }],
          }
        ]"
        style="width: 100%"
      >
      </a-input>
    </a-form-item>
    <a-form-item
      v-bind="formItemLayout"
      label="邮箱"
    >
      <a-input
        v-decorator="[
          'email',
          {
            rules: [{
              type: 'email', message: '这不是一个正确的邮箱',
            }, {
              required: true, message: '请输入邮箱',
            }]
          }
        ]"
      />
    </a-form-item>
<a-form-item
      v-bind="formItemLayout"
      label="头像"
    >
      <Avatar/>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button
        type="primary"
        html-type="submit"
      >
        确认添加
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import Avatar from './Avatar'

export default {
  data () {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
  components:{
    Avatar,
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleConfirmBlur  (e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword  (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('两次密码不一样');
      } else {
        callback();
      }
    },
    validateToNextPassword  (rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
         const userinfo=this.form.getFieldsValue(['username','password','phone','sex','email']) 
         this.$store.dispatch('Adduser',userinfo)
         this.$message.info(this.$store.state.user.addinfo)
         //console.log(this.form.getFieldsValue(['username','password','phone','sex','email']))
        }
      });
    },
  },
};
</script>