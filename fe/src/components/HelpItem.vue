<template>
<div class="item-container">
  <div @click="goto(itemInfo.type)">
    <el-row type="flex" justify="end">
      <el-col :span="20">
        <div class="item-pto">
          <img :src="itemInfo.imgUrl" />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="item-icon">
          <i class="el-icon-arrow-right el-icon--right" />
        </div>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelpItem',
  props: {
    itemInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>
