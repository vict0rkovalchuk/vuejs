<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
    <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>
    <!-- <ActiveGoals v-if="selectedComponent === 'ActiveGoals'"/> -->
    <!-- <ManageGoals v-if="selectedComponent === 'ManageGoals'"/> -->
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: { 
    TheHeader,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'ActiveGoals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>