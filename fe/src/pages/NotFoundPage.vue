<template>
<div class="notfound-page">
  <header-section :go-back="true" :head-title="headTitle" />

  <main class="notfound-container">
    <p>哎呀，界面走失了或者还没有开发呢～</p>
  </main>
</div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection';

export default {
  name: 'NotFoundPage',
  components: {
    HeaderSection,
  },
  data() {
    return {
      headTitle: '界面丢失',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';

.notfound-container {
  @include absolute-center;
  width: 80%;
  height: 20%;
}
</style>
