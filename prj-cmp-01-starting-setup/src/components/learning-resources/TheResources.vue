<template>
  <BaseCard>
    <BaseButton @click="setSelectedTab('StoredResources')" :mode="storedResButtonMode">Stored Resources</BaseButton>
    <BaseButton @click="setSelectedTab('AddResource')"  :mode="AddResButtonMode">Add resource</BaseButton>
  </BaseCard>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'StoredResources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com/'
        }
      ]
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab !== 'StoredResources' && 'flat';
    },
    AddResButtonMode() {
      return this.selectedTab !== 'AddResource' && 'flat';
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: crypto.randomUUID(),
        title,
        description,
        link
      }

      this.storedResources.unshift(newResource);
      this.selectedTab = 'StoredResources';
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  }
}
</script>