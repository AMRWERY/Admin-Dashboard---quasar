<template>
  <div class="q-pa-sm">
    <div class="row q-col-gutter-lg q-mt-xs">
      <div class="col-12">
        <h3 class="text-weight-light text-purple q-mb-sm">Google Maps</h3>
      </div>
      <div class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <q-card class="my-card">
          <q-card-section>
            <GMapMap :center="{ lat: 29.9694, lng: 31.2793 }" :zoom="7" map-type-id="terrain"
              style="width: 100%; height: 400px">
              <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true">
                <GMapInfoWindow :opened="true">
                  <div>I am here!
                    <MyComponent />
                  </div>
                </GMapInfoWindow>
              </GMapMarker>
            </GMapMap>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <q-card class="my-card" style="width: 100%; height: 430px">
          <q-card-section>
            <RadarCharts />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script >
import RadarCharts from 'src/charts/RadarCharts.vue';

export default {
  components: { RadarCharts },

  data() {
    return {
      openedMarkerID: null,
      center: { lat: 29.9694, lng: 31.2793 },
      markers: [
        {
          id: 1,
          position: {
            lat: 29.9694,
            lng: 31.2793
          }
        },
        {
          id: 2,
          position: {
            lat: 31.2213,
            lng: 29.9379
          }
        }
      ]
    }
  },

  methods: {
    openMarker(id) {
      this.openedMarkerID = id
    }
  }
}
</script>
