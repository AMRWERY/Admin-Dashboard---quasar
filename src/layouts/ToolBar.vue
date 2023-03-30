<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-deep-purple-12 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="cursor-pointer">
          Admin DashBoard
        </q-toolbar-title>
        <q-btn flat>
          <q-icon name="fa-solid fa-magnifying-glass" />
        </q-btn>
        <q-btn flat>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Check out this awesome ticket</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>What is the best way to get...</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>This is just a simple notification</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>12 new orders has arrived</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
          <q-icon name="fa-regular fa-bell" />
        </q-btn>
        <q-btn flat>
          <q-menu>
            <h6 class="text-center q-ma-xs">New Messages</h6>
            <p class="text-center q-ma-xs text-red-6">4 new Messages</p>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Check out this awesome ticket</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>What is the best way to get...</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>This is just a simple notification</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>12 new orders has arrived</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
          <q-icon name="fa-regular fa-envelope" />
        </q-btn>
        <q-btn flat>
          <q-menu fit>
            <h6 class="text-center q-ma-xs">Amr Mohamed</h6>
            <p class="text-center q-ma-xs text-deep-purple-9">Flatlogic.com</p>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Profile</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Tasks</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Messages</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-btn color="deep-orange" outline>Sign Out</q-btn>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
          <q-icon name="fa-solid fa-person" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" elevated>
      <!-- drawer content -->
      <SideList />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue';
import SideList from './SideList.vue';

export default {
  components: { SideList },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
