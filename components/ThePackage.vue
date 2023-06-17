<template>
  <div class="package" @click="onClick">
    <div class="package__wrapper">
      <div class="package__info">
        <div class="package__details">
          <div class="package__name text-2-regular">
            {{ packageObject.name }}
          </div>
          <div class="package__version text-2-regular">
            {{ packageObject.version }}
          </div>
        </div>
        <div class="package__author text-2-regular">
          by {{ packageObject.publisher.username }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ThePackage',
  props: {
    packageObject: {
      type: Object,
      default() {
        return {}
      },
      require: true,
    },
  },
  methods: {
    ...mapMutations('main', ['setSelectedPackage', 'setIsModalOpen']),
    onClick() {
      this.setSelectedPackage(this.packageObject)
      this.setIsModalOpen(true)
      document.body.style.overflow = 'hidden'
    },
  },
}
</script>

<style lang="stylus" scoped>
.package
  padding rem(10) 0
  width 100%
  display flex
  flex-direction column
  position relative
  border-bottom 1px solid $blue
  cursor pointer

  &:hover
    .package__details
      transform translateX(10px)
    .package__author
      transform translateX(-10px)


  &__wrapper
    display flex
    flex-direction column

  &__info
  &__details
    display flex

    +mobile()
      flex-direction column

  &__details
  &__author
    transition transform .3s

  &__details
    +mobile()
      margin-bottom rem(10)

  &__name
    margin-right rem(10)
    +mobile()
      margin-bottom rem(10)


  &__author
    margin-left auto
    +mobile()
      margin-left 0
</style>
