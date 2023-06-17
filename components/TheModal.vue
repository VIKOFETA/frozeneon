<template>
  <div class="modal">
    <div class="modal__wrapper wrapper">
      <div class="modal__body">
        <div class="modal__close" @click="onClick">X</div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'TheModal',
  methods: {
    ...mapMutations('main', ['setIsModalOpen']),
    onClick(e) {
      e.stopPropagation()
      document.body.style.overflow = ''
      this.setIsModalOpen(false)
    },
  },
}
</script>

<style lang="stylus" scoped>
.modal
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background rgba(0, 0, 0, 0.6)

  &__wrapper
    height 100%

  &__close
    position absolute
    top 10px
    right 10px
    color $black
    cursor pointer


  &__body
    position relative
    height 100%
    padding rem(50)
    background $blue
    color $black

    +mobile()
      padding rem(15)
</style>
