<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Tamaño de archivos</h3>
        </div>
        <div class="col text-right">
          <base-button size="sm" type="primary" @click="expand = !expand">{{
            expand ? "Ocultar" : "Expandir"
          }}</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        thead-classes="thead-light"
        :data="expand ? tableData : tableData.filter(item => !item.hide)"
      >
        <template slot="columns">
          <th>Archivo</th>
          <th>Tamaño</th>
          <th></th>
        </template>

        <template slot-scope="{ row }">
          <th scope="row">
            {{ row.name }}
          </th>
          <td>
            {{ row.visitors }}
          </td>
          <td>
            <div class="d-flex align-items-center">
              <span class="mr-2">{{ row.progress }}%</span>
              <base-progress
                :type="row.progressType"
                class="pt-0"
                :show-percentage="false"
                :value="row.progress"
              />
            </div>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expand: false,
      tableData: [
        {
          name: "Lib",
          visitors: "5.2MB",
          progress: 57,
          progressType: "gradient-danger"
        },
        {
          name: "Lib -> armeabi-v7a",
          visitors: "5.2MB",
          progress: 57,
          progressType: "gradient-danger",
          hide: true
        },
        {
          name: "Lib -> armeabi-v7a -> obfs4proxy.so",
          visitors: "2.5MB",
          progress: 28,
          progressType: "gradient-danger",
          hide: true
        },
        {
          name: "Lib -> armeabi-v7a -> tor.so",
          visitors: "2.5MB",
          progress: 28,
          progressType: "gradient-danger",
          hide: true
        },
        {
          name: "Lib -> armeabi-v7a -> pdnsd.so",
          visitors: "84.6KB",
          progress: 0.9,
          progressType: "gradient-danger",
          hide: true
        },
        {
          name: "Lib -> armeabi-v7a -> libtun2socks.so",
          visitors: "77.4KB",
          progress: 0.8,
          progressType: "gradient-danger",
          hide: true
        },

        {
          name: "classes.dex",
          visitors: "1.9MB",
          progress: 20.4,
          progressType: "gradient-success"
        },
        {
          name: "assets",
          visitors: "1.4MB",
          progress: 15.3,
          progressType: "gradient-primary"
        },
        {
          name: "res",
          visitors: "315.7KB",
          progress: 3.4,
          progressType: "gradient-info"
        },
        {
          name: "resources.arsc",
          visitors: "284.7KB",
          progress: 3.1,
          progressType: "gradient-warning"
        },
        {
          name: "META-INF",
          visitors: "37.4KB",
          progress: 0.4,
          progressType: "gradient-warning"
        },
        {
          name: "okhttp3",
          visitors: "33.2KB",
          progress: 0.4,
          progressType: "gradient-warning"
        },
        {
          name: "AndroidManifest.xml",
          visitors: "2.9KB",
          progress: 0,
          progressType: "gradient-warning"
        }
      ]
    };
  }
};
</script>
<style>
</style>
