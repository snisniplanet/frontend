<template>
  <Banner class="is-medium is-dark">
    <template #title>
      <IconLabel icon="folder-open">Empty</IconLabel>
    </template>

    <template #subtitle>
      Seems like nobody has decided to post here... yet
    </template>
  </Banner>
</template>

<script>
import Banner from '~/components/atoms/Banner'
import IconLabel from '~/components/atoms/IconLabel'

export default {
  components: {
    Banner,
    IconLabel
  }
}
</script>
