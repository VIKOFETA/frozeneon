<template>
  <div class="the-footer">
    <div class="the-footer__wrapper">
      <div class="the-footer__author">Alexey 'VIKOFETA' Skripka</div>
      <a
        href="https://github.com/VIKOFETA"
        target="_blank"
        class="the-footer__author-link hover-link"
        >GitHub</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style lang="stylus" scoped>
.the-footer
	padding-bottom rem($offsets.ui.x)
	padding-left rem($offsets.ui.y)
	padding-right rem($offsets.ui.y)

	+mobile()
		padding-bottom rem($offsets.ui.mobile.x)
		padding-left rem($offsets.ui.mobile.y)
		padding-right rem($offsets.ui.mobile.y)

	&__wrapper
		padding-top rem(10)
		display flex
		justify-content center
		border-top 1px solid $blue
		+mobile()
			flex-direction column
			align-items center

	&__author
		margin-right rem(15)
		+mobile()
			margin-right 0
			margin-bottom rem(15)

	&__author-link
		width fit-content
</style>
