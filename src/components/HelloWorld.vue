<template>
<div>
<div style="margin: 16px 0 16px 10px;fr">
      <a-button
        type="primary"
        @click="start"
        :disabled="!hasSelected"
        :loading="loading"
      >
        批量操作
      </a-button>
      <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{`选择了 ${selectedRowKeys.length} 条记录`}}
        </template>
      </span>
</div>

  <a-table :columns="columns"
    :dataSource="data"
    :pagination="pagination"
    :loading="loading"
    :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
    bordered
  >
  
  </a-table>
  <div>
  <h1>按条件查询:</h1>
     <div>
       <a-form layout="inline">
        <a-row :gutter="30">

          <a-col :span="4">
            <a-card>
            <a-form-item label="账号">
              <a-input placeholder="账号查询"></a-input>
            </a-form-item>
            </a-card>
          </a-col>
       
          <a-col :span="4">
            <a-card>
            <a-form-item label="性别">
              <a-select placeholder="性别查询">
                <a-select-option value="1">男性</a-select-option>
                <a-select-option value="2">女性</a-select-option>
              </a-select>
            </a-form-item>
            </a-card>
          </a-col>

            <a-col :span="4">
              <a-card>
              <a-form-item label="手机">
                <a-input placeholder="手机号码查询"></a-input>
              </a-form-item>
              </a-card>
            </a-col>

            <a-col :span="4">
              <a-card>
              <a-form-item label="状态">
                <a-select placeholder="状态查询">
                  <a-select-option value="1">正常</a-select-option>
                  <a-select-option value="2">解冻</a-select-option>
                </a-select>
              </a-form-item>
              </a-card>
            </a-col>

        </a-row>
        <div style="width:172px;margin:10px 40% 10px 40%;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" icon="search">查询</a-button>
              <a-button type="primary" icon="reload" style="margin-left: 8px">重置</a-button>
            </div>
      </a-form>
    </div>


  </div>
</div>

</template>

<script>
const columns = [{
  title: '账号',
  dataIndex: 'username',
  sorter: true,
  width: '11%',
  scopedSlots: { customRender: 'username' },
}, {
  title: '真实姓名',
  dataIndex: 'name',
  sorter: true,
  width: '11%',
  scopedSlots: { customRender: 'name' },
}, {
  title: '性别',
  dataIndex: 'gender',
  sorter: true,
  filters: [
    { text: '男', value: 'male' },
    { text: '女', value: 'female' },
  ],
  scopedSlots: { customRender: 'gender' },
  width: '11%',
}, {
  title: '邮箱',
  dataIndex: 'email',
  width: '11%',
}, {
  title: '手机号码',
  dataIndex: 'phone',
  key: 'phone',
  width: '11%',
}, {
  title: '状态',
  dataIndex: 'status',
  sorter: true,
  width: '11%',
  scopedSlots: { customRender: 'status' },
  filters: [
    { text: '正常', value: 'normal' },
    { text: '冻结', value: 'freeze' },
  ],
}, {
  title: '注册时间',
  dataIndex: 'createTime',
  sorter: true,
  width: '11%',
  scopedSlots: { customRender: 'createTime' },
}, {
  title: '修改时间',
  dataIndex: 'updateTime',
  sorter: true,
  width: '11%',
  scopedSlots: { customRender: 'updateTime' },
}, {
  title: '操作',
  dataIndex: 'move',
  width: '11%',
}];

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    username: `wk ${i}`,
    name: `温凯 ${i}`,
    gender: '男',
    phone: '12123132132',
    email: '111111111@qq.com',
    status: '正常',
    createTime: '2019-04-14',
    updateTime: '2019-04-15',
  });
}
export default {
  data() {
    return {
      data,
      pagination: {},
      selectedRowKeys: [],
      loading: false,
      columns,
    }
  },
   computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0
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
    }
    
  },
}
</script>
<style scoped>
.a{
  text-align: center
}
</style>
