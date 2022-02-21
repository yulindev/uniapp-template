<template>
	<view class="workBench">
		<g-scroll :status="status" :noData="noData" :refresherEnabled="true" :refresherTriggered="refresh" @scrollTolower="loadMore" @refresherRefresh="refresherRefresh"></g-scroll>
	</view>
</template>

<script>
export default {
	data() {
		return {
			status: '',
			noData: false,
			refresh: false,
		}
	},
	onLoad() { },
	methods: { 
		loadMore() {
			if (this.status === 'nomore') return
			this.status = 'loading'
			this.pageList()
		},
		refresherRefresh() {
			this.refresh = true
			this.pageList()
		},
		pageList() {
			setTimeout(() => {
				if (this.refresh) {
					this.refresh = false
				}
				this.noData = true
			}, 300)
		}
	}
}
</script>

<style lang="scss">
.workBench {
	height: 100%;
}
</style>
