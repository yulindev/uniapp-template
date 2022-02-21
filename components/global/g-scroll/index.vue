<template>
  <scroll-view style="height: 100%" :refresher-enabled="refresherEnabled" :refresher-triggered="refresherTriggered" scroll-y @scrolltolower="$emit('scrollTolower')" @refresherrefresh="$emit('refresherRefresh')">
    <template v-if="!noData">
      <u-gap height="20" />
      <slot></slot>
      <view class="yp-loadmore" v-if="status">
        <u-loadmore :status="status" @loadmore="$emit('scrollTolower')" />
      </view>
    </template>
    <u-empty v-else></u-empty>
  </scroll-view>
</template>

<script>
export default {
  props: {
    refresherEnabled: {
      type: Boolean,
      default: false
    },
    refresherTriggered: {
      type: Boolean,
      default: false
    },
    noData: {
      type: Boolean,
      default: true
    },
    status: {
      type: String,
      default: ``
    }
  },
  data() {
    return { }
  }
}
</script>

<style lang="scss">
.yp-loadmore {
  height: 80rpx;
  @include flex(center, center);
}
</style>
