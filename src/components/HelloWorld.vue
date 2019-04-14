<template>
  <a-card>
    <div style="width:100%;height:60px;">
       <a-form layout="inline">
        <a-row :gutter="24">

          <a-col :span="6">
            <a-form-item label="账号">
              <a-input placeholder="请输入账号查询"></a-input>
            </a-form-item>
          </a-col>

          <a-col :span="6">
            <a-form-item label="性别">
              <a-select placeholder="请选择性别查询" style="width:100%">
                <a-select-option value="0">请选择性别查询</a-select-option>
                <a-select-option value="1">男性</a-select-option>
                <a-select-option value="2">女性</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>


          <template v-if="true">
            <a-col :span="6">
              <a-form-item label="邮箱">
                <a-input placeholder="请输入邮箱查询"></a-input>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="手机号码">
                <a-input placeholder="请输入手机号码查询"></a-input>
              </a-form-item>
            </a-col>

            <a-col :span="6">
              <a-form-item label="状态">
                <a-select placeholder="请选择用户状态查询">
                  <a-select-option value="0">请选择用户状态</a-select-option>
                  <a-select-option value="1">正常</a-select-option>
                  <a-select-option value="2">解冻</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>

          <a-col :span="6" >
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" icon="search">查询</a-button>
              <a-button type="primary" icon="reload" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>

        </a-row>
      </a-form>
    </div>
  </a-card>
</template>
<script>
export default {

}

</script>
<style scoped>
  .ant-card-body .table-operator{
    margin-bottom: 18px;
  }
  .ant-layout-content{
    margin:12px 16px 0 !important;
  }
  .ant-table-tbody .ant-table-row td{
    padding-top:15px;
    padding-bottom:15px;
  }
  .anty-row-operator button{margin: 0 5px}
  .ant-btn-danger{background-color: #ffffff}

  .ant-modal-cust-warp{height: 100%}
  .ant-modal-cust-warp .ant-modal-body{height:calc(100% - 110px) !important;overflow-y: auto}
  .ant-modal-cust-warp .ant-modal-content{height:90% !important;overflow-y: hidden}

  .anty-img-wrap{height:25px;position: relative;}
  .anty-img-wrap > img{max-height:100%;}
</style>