<template>
  <div id="app" class="page">
    <the-header />
    <div class="page__wrapper">
      <nuxt />
    </div>
    <transition mode="out-in" name="fade">
      <TheModal v-if="isModalOpen">
        <ThePackageCard />
      </TheModal>
    </transition>
    <the-footer class="page__footer" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('main', ['isModalOpen']),
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html
body
  height 100%

// Style for root nuxt DOM element
body
  > #__nuxt
    height 100%
    > #__layout
      height 100%

.page
  position relative
  min-height 100%
  background $black
  color $blue
  display flex
  flex-direction column

  &__wrapper
    width 100%

  &__footer
    margin-top auto
</style>
