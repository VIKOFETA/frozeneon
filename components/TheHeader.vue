<template>
  <div class="the-header">
    <div class="the-header__wrapper">
      <input
        ref="searchInput"
        type="text"
        placeholder="Enter package name"
        class="the-header__search text-2-regular"
      />
      <button
        class="the-header__search-button text-2-regular"
        @click="searchCommit"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'TheHeader',
  mounted() {},
  methods: {
    ...mapMutations('main', ['setSearchQuery', 'setIsLoading']),
    ...mapActions('main', ['searchPackages']),
    ...mapGetters('main', ['getIsLoading']),
    searchCommit(e) {
      e.preventDefault()
      if (this.getIsLoading() === true) return
      this.setIsLoading(true)
      this.setSearchQuery(this.$refs.searchInput.value)
      this.searchPackages()
    },
  },
}
</script>

<style lang="stylus" scoped>
.the-header
	padding-top rem($offsets.ui.x)
	padding-left rem($offsets.ui.y)
	padding-right rem($offsets.ui.y)

	+mobile()
		padding-top rem($offsets.ui.mobile.x)
		padding-left rem($offsets.ui.mobile.y)
		padding-right rem($offsets.ui.mobile.y)

	&__wrapper
		display flex

	&__search
		width 100%
		padding-right rem(15)
		padding-top rem(5)
		padding-bottom rem(5)
		border-bottom 1px solid $blue
		color $white

	&__search-button
		background $blue
		color $black
		padding rem(5) rem(15)
</style>
