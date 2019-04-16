<template>
<div style="width:100%;height:auto;padding:16px;background:#e5e5e5;">
  <div style="background:white;padding:10px 0 10px 0;">
     <div style="border:1px solid  rgb(14, 171, 243);margin:0 1% 16px 1%;">
    <h2 style="width:90px; margin:auto;">条件查询:</h2>
    <div>
      <div class="select">
         <a-form>
        <div style="float:left;width:24.25%;height:50px;margin-right:1%;margin-bottom:10px;">
          <a-form-item>
              <a-input placeholder="账号查询" addonBefore="账号"></a-input>
            </a-form-item>
        </div>
        <div style="float:left;width:24.25%;height:50px;margin-right:1%;margin-bottom:10px;">
          <a-form-item>
                <a-input placeholder="手机号码查询" addonBefore="手机号"></a-input>
              </a-form-item>
        </div>
        <div style="float:left;width:24.25%;height:50px;margin-right:1%;margin-bottom:10px;">
          <a-form-item>
            <a-input placeholder="邮箱查询" addonBefore="邮箱"></a-input>
            </a-form-item>
        </div>
        <div style="float:left;width:24.25%;height:50px;">
          <a-form-item>
            <a-input placeholder="真实姓名" addonBefore="姓名"></a-input>
            </a-form-item>
        </div>
         </a-form>
      </div>
      <div style="width:172px;margin:auto;margin-bottom:10px;">
        <a-button type="primary" icon="search">查询</a-button>
        <a-button type="primary" icon="reload" style="margin-left: 8px">重置</a-button>
      </div>
    </div>
  </div>
<div style="margin: 0 0 16px 5px;">
     <UserModule/>
</div>
<div>
  <a-table :columns="columns"
    :dataSource="datas"
    :pagination="pagination"
    :loading="loading"
    bordered
  >
   <span slot="action" slot-scope="text, record">
          <a>编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">
              更多 <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item >
                <a href="javascript:;" >详情</a>
              </a-menu-item>

              <a-menu-item >
                <a href="javascript:;" >修改密码</a>
              </a-menu-item>

              <a-menu-item>
                <a-popconfirm title="确定删除吗?">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>

              <a-menu-item v-if="record.status==1">
                <a-popconfirm title="确定冻结吗?">
                  <a>冻结</a>
                </a-popconfirm>
              </a-menu-item>

              <a-menu-item v-if="record.status==2">
                <a-popconfirm title="确定解冻吗?">
                  <a>解冻</a>
                </a-popconfirm>
              </a-menu-item>

            </a-menu>
          </a-dropdown>
        </span>
  </a-table>
  </div>
 
  </div>
</div>

</template>

<script>
import { version } from 'punycode';
import UserModule from './module/UserModule'
const columns = [{
  title: '账号',
  dataIndex: 'username',
  sorter: true,
  width: '11%',
}, {
  title: '真实姓名',
  dataIndex: 'realName',
  sorter: true,
  width: '11%',
}, {
  title: '性别',
  dataIndex: 'sex',
  sorter: true,
  filters: [
    { text: '男', value: 'male' },
    { text: '女', value: 'female' },
  ],
  customRender:function (text) {
              if(text==1){
                return "男";
              }else if(text==2){
                return "女";
              }else{
                return text;
              }
            },
  //width: '11%',
}, {
  title: '手机号码',
  dataIndex: 'phone',
  key: 'phone',
  //width: '11%',
}, {
  title: '状态',
  dataIndex: 'status',
  sorter: true,
 // width: '11%',
  filters: [
    { text: '正常', value: 'normal' },
    { text: '冻结', value: 'freeze' },
  ],
}, {
  title: '注册时间',
  dataIndex: 'createTime',
  sorter: true,
  //width: '11%',
}, {
  title: '修改时间',
  dataIndex: 'updateTime',
  sorter: true,
  //width: '11%',
}, {
  title:'修改详情',
  dataIndex:'createWhere',
  sorter:true,
  //width:'11%',
}, {
  title: '操作',
  dataIndex: 'action',
  scopedSlots: { customRender: 'action' },
  fixed:"right",
  align:"center",
  width: 150,
}];

export default {
  components:{
    UserModule,
  },
  data() { 
    return {
      selectedRowKeys: [],
      loading: false,
      columns,
      pagination:{
          current: 1,
          pageSize: 8,
          pageSizeOptions: ['6', '12', '24'],
          showTotal: (total, range) => {
            return range[0] + "-" + range[1] + " 共" + total + "条"
          },
          showQuickJumper: true,
          showSizeChanger: true,
          total: 0
        },
    }
  },
  created() {
      this.loadData();
     
    },
   computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
    },
    datas(){
      
       return this.$store.state.user.userData
    }
  },
  methods: {
    start () {
      this.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },
    onSelectChange (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
    onClearSelected(){
      this.selectedRowKeys=[];
    },
    loadData(){
      this.loading = true;
      this.$store.dispatch('GetuserList')
      this.loading = false;
    },
  },
}
</script>
<style scoped>
.select::after{
  clear:both;
  content:'';
  display:block;
  width:0;
  height:0;

}
</style>