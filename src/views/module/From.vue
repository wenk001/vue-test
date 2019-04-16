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
              required: true, message: 'Please input your password!',
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
              required: true, message: 'Please confirm your password!',
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
      <a-cascader
        v-decorator="[
          'residences',
          {
            rules: [{ type: 'array', required: true, message: '请选择你的性别！' }],
          }
        ]"
        :options="residences"
      />
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
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
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
    
  </a-form>
</template>

<script>
import Avatar from './Avatar'
const residences = [{
  value: 1,
  label: '男性',
}, {
  value: 2,
  label: '女性',
}];

export default {
  data () {
    return {
      confirmDirty: false,
      residences,
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
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            
          console.log(this.from);
        }
      });
    },
    handleConfirmBlur  (e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword  (rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
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
    
  },
};
</script>