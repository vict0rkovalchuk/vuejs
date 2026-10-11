<template>
  <div class="container">
    <ListData />
  </div>
  <div class="container">
    <div class="block"></div>
    <button>Animate</button>
  </div>
  <div class="container">
    <transition 
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paragraphIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <transition name="modal">
    <base-modal @close="hideDialog" v-if="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
  </transition>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
import ListData from './components/ListData.vue';

export default {
  components: {
    ListData
  },
  data() {
    return { 
      dialogIsVisible: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true
    },
    hideUsers() {
      this.usersAreVisible = false
    },
    beforeEnter(el){
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;

      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.1;
        round++;

        if(round > 10) {
          done();
          clearInterval(this.enterInterval);
        }
      }, 20);
    },
    afterEnter() {
      console.log('afterEnter');
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      let round = 1;

      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.1;
        round++;

        if(round > 10) {
          done();
          clearInterval(this.leaveInterval);
        }
      }, 20);
    },
    afterLeave() {
      console.log('afterLeave');
    },
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.modal-enter-active {
  animation: modal .3s ease-out;
}

.modal-leave-active {
  animation: modal .3s ease-out reverse;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.fade-button-enter-active {
  transition: all .3s ease-out;
}

.fade-button-leave-active {
  transition: all .3s ease-in;
}

@keyframes modal {
  0% {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>