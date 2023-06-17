<template>
  <div class="packages-list">
    <div class="packages-list__wrapper wrapper">
      <div v-if="packages && packages.length > 0" class="packages-list__list">
        <ThePackage
          v-for="item in packages"
          :key="item.package.name"
          :package-object="item.package"
          class="packages-list__list-item"
        />
      </div>
      <div v-else class="packages-list__empty">
        <h2 class="heading-2-up">EMPTY</h2>
      </div>
      <v-pagination
        v-if="maxPages > 0"
        class="packages-list__navigation"
        :length="maxPages"
        :total-visible="10"
        :value="page"
        :active-color="'#000'"
        :color="'#84ceff'"
        @input="handlePagination($event)"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import ThePackage from './ThePackage.vue'

export default {
  name: 'PackagesList',
  components: { ThePackage },
  computed: {
    ...mapState('main', ['packages', 'maxPages', 'page']),
  },
  methods: {
    ...mapMutations('main', ['setPage', 'setIsLoading']),
    ...mapActions('main', ['searchPackages']),
    ...mapGetters('main', ['getIsLoading']),
    handlePagination(value) {
      if (this.getIsLoading() === true) return
      this.setIsLoading(true)
      this.setPage(value)
      this.searchPackages()
    },
  },
}
</script>

<style lang="stylus" scoped>
.packages-list
  display flex
  flex-direction column

  &__wrapper
  &__list
    display flex
    flex-direction column
    position relative

  &__list-item
    &:not(:last-child)
      margin-bottom rem(25)

  &__navigation
    width 100%
    margin-top rem(24)
    +mobile()
      transform scale(0.7)
</style>
