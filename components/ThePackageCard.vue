<template>
  <div class="package-card">
    <div v-if="selectedPackage" class="package-card__wrapper">
      <div class="package-card__header">
        <div class="package-card__info">
          <div class="package-card__name heading-3-medium-up">
            {{ selectedPackage.name }}
          </div>
          <div class="package-card__version">
            {{ selectedPackage.version }}
          </div>
        </div>
        <div class="package-card__time">
          {{ selectedPackage.date }}
        </div>
      </div>
      <div class="package-card__body">
        <div class="package-card__keywords text-2-regular">
          Tags:
          {{
            selectedPackage.keywords &&
            selectedPackage.keywords.length > 0 &&
            selectedPackage.keywords.join(', ')
          }}
        </div>
        <div class="package-card__description text-2-regular">
          {{ selectedPackage.description }}
        </div>
        <div class="package-card__links">
          <a
            v-for="(link, index) in selectedPackage.links"
            :key="index"
            class="package-card__link hover-link"
            :href="link"
            target="_blank"
            >{{ index }}</a
          >
        </div>
      </div>
      <div class="package-card__footer">
        <div class="package-card__author text-2-regular">
          {{ selectedPackage.publisher.username }}
        </div>
        <a
          :href="`mailto:${selectedPackage.publisher.email}`"
          class="package-card__author-email text-2-regular hover-link"
          >{{ selectedPackage.publisher.email }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ThePackageCard',
  computed: {
    ...mapState('main', ['selectedPackage']),
  },
}
</script>

<style lang="stylus" scoped>
.package-card
  height 100%
  position relative

  &__wrapper
    height 100%
    display flex
    flex-direction column

  &__header
    padding-right rem(15)
    margin-bottom rem(24)
    display flex
    align-items flex-end

    +mobile()
      flex-direction column
      align-items flex-start

  &__info
    display flex
    align-items flex-end

    +mobile()
      margin-bottom rem(16)
      flex-direction column
      align-items flex-start

  &__name
    margin-right rem(20)

  &__time
    margin-left auto

  &__body
    display flex
    flex-direction column

  &__keywords
    margin-bottom rem(16)

  &__description
    margin-bottom rem(16)

  &__links
    width 100%
    display flex
    flex-wrap wrap

  &__link
    &:not(:last-child)
      margin-right rem(10)

  &__footer
    margin-top auto
    display flex
    +mobile()
      flex-direction column

  &__author
    padding-right rem(5)
    border-right 3px solid $black
    +mobile()
      margin-bottom rem(5)
      border none
  &__author-email
    margin-left rem(5)
    +mobile()
      margin-left 0
</style>
