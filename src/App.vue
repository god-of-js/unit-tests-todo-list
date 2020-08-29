<template>
  <div id="app">
    <navbar />
    <div style="width: 40%; margin: auto; padding-top: 50px;">
      <task v-for="(task, index) in tasks" :key="index" :name="task.name" :status="task.status"/>
    </div>
  </div>
</template>
<script>
import navbar from '@/components/nav.vue'
import task from '@/components/task.vue'
export default {
  components: {
    navbar,
    task
  },
  data: () => {
    return {
      tasks: [
        {
          name: 'Build application',
          status: false
        },
        {
          name: 'Write blogpost',
          status: true
        },
        {
          name: 'Test application',
          status: true
        },
        {
          name: 'Go Home',
          status: false
        },
        {
          name: 'Sleep',
          status: true
        },
        {
          name: 'Eat',
          status: false
        },
        {
          name: 'Have your bath',
          status: false
        }
      ]
    }
  },
  mounted(){
    this.$on('event', result => {
      alert(result)
    })
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
