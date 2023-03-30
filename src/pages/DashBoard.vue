<template>
  <div class="q-pa-sm">
    <div class="row">
      <div class="col-6 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <h3 class="text-weight-light text-purple">DashBoard</h3>
      </div>
    </div>
    <div class="row q-col-gutter-lg">
      <div class="col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <q-card class="my-card">
          <q-card-section>
            <div>
              <p class="text-center">Visits Today</p>
            </div>
            <div>
              <LineCharts />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <q-card class="my-card">
          <q-card-section>
            <div>
              <p class="text-center">App Performance</p>
            </div>
            <div>
              <BarCharts />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <q-card class="my-card">
          <q-card-section>
            <div>
              <p class="text-center">Server Overview</p>
            </div>
            <div>
              <ScatterCharts />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-my-xl">
      <div class="col">
        <q-card class="my-card">
          <q-card-section>
            <div>
              <p class="text-center">Daily Line Chart</p>
            </div>
            <div>
              <PieCharts />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-col-gutter-lg">
      <div class="col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <q-card class="my-card">
          <q-card-section>
            <div>
              <p class="text-center">RNS</p>
            </div>
            <div>
              <PolarArea />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <q-card class="my-card">
          <q-card-section>
            <div>
              <p class="text-center">Sing App</p>
            </div>
            <div>
              <RadarCharts />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <q-card class="my-card">
          <q-card-section>
            <div>
              <p class="text-center">Light Blue</p>
            </div>
            <div>
              <PolarArea />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <DashboardTable />
      </div>
    </div>
  </div>
</template>

<script>
import BarCharts from 'src/charts/BarCharts.vue';
import LineCharts from 'src/charts/LineCharts.vue';
import ScatterCharts from 'src/charts/ScatterCharts.vue';
import PieCharts from 'src/charts/PieCharts.vue';
import PolarArea from 'src/charts/PolarArea.vue';
import RadarCharts from 'src/charts/RadarCharts.vue';
import DashboardTable from 'src/components/table/DashboardTable.vue';

export default {
  components: { BarCharts, LineCharts, ScatterCharts, PieCharts, PolarArea, RadarCharts, DashboardTable }
}
</script>

<style>
.my-card {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
</style>
