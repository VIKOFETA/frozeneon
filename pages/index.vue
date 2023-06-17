<template>
  <div>
    <ThePackagesList />
  </div>
</template>

<script>
import Vue from 'vue'
import ThePackagesList from '~/components/ThePackagesList.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { ThePackagesList }
})
