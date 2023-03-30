<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <q-item clickable v-ripple v-for="item in list" :key="item" :to="item.router" class="text-weight-regular">
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section>{{ item.title }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { icon: 'fa-solid fa-house', title: 'Dashboard', router: '/' },
        { icon: 'fa-solid fa-font', title: 'Typography', router: '/typo' },
        { icon: 'fa-solid fa-table-cells-large', title: 'Tables', router: '/tables' },
        { icon: 'fa-brands fa-uikit', title: 'Google-Maps', router: '/maps' },
      ]
    }
  }
}
</script>
