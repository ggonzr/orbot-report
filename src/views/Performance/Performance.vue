<template>
  <div class="performance">
    <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <base-button @click="selected = 1">
          Caso 1
        </base-button>
        <base-button @click="selected = 2">
          Caso 2
        </base-button>
        <base-button @click="selected = 3">
          Caso 3
        </base-button>
        <base-button @click="selected = 4">
          Caso 4
        </base-button>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row"></div>
      <case1 v-if="selected === 1" />
      <case2 v-if="selected === 2" />
      <case3 v-if="selected === 3" />
      <case4 v-if="selected === 4" />
    </div>
  </div>
</template>
<script>
import Case1 from "./Case1";
import Case2 from "./Case2";
import Case3 from "./Case3";
import Case4 from "./Case4";
export default {
  name: "repo",
  components: {
    Case1,
    Case2,
    Case3,
    Case4
  },
  data() {
    return {
      selected: 1
    };
  }
};
</script>