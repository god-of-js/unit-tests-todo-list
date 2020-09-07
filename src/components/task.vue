<template>
  <div style="display: flex; justify-content: space-between; padding: 5px;">
    <div>
      <div style="text-align: left;">
        <div class="name">{{ name }}</div>
        <div class="status" style="font-size: 0.7em;">
          {{ status === true ? "Complete" : "Unfinished" }}
        </div>
      </div>
    </div>
    <button @click="emitEvent">Emit Event</button>
  </div>
</template>
<script>
export default {
  name: "task",
  props: {
    name: String,
    status: Boolean
  },
  data: () => {
    return {
      show: true
    };
  },
  methods: {
    emitEvent() {
      this.$emit("event", true);
    }
  }
};
</script>
