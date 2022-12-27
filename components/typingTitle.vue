<!--Component which display a title with a typing effect that cycle through the array of strings-->
<template>
  <h1 class="text-5xl text-text-white font-bold relative flex flex-row space-x-1 whitespace-pre-wrap">
    {{ title }}
    <wbr>
    <span ref="typingText"></span>
    <!--    <span ref="typing-text">{{ typingText }}</span>-->
    <!--    <span class="cursor" v-if="displayCursor"></span>-->
  </h1>
</template>

<script>
export default {
  name: "typingTitle",
  props: {
    messages: {
      type: Array,
      required: true,
    },
    speed: {
      type: Number,
      required: false,
      default: 200,
    },
    messageWaitTime: {
      type: Number,
      required: false,
      default: 2000,
    },
    loop: {
      type: Boolean,
      required: false,
      default: true,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    displayCursor: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data: () => {
    return {
      typingText: '',
      currentMessage: 0,
      isDeleting: false,
      completed: false,
    }
  },
  methods: {
    type() {
      const message = this.messages[this.currentMessage];
      if (this.isDeleting) {
        this.deleteText();
        return
      }
      if (this.typingText.length >= message.length) {
        setTimeout(() => {
          this.isDeleting = true;
          setTimeout(this.type, this.speed);
        }, this.messageWaitTime);
        return
      } else {
        this.typingText = message.substring(0, this.typingText.length + 1);
        this.$refs.typingText.textContent = this.typingText;
      }
      setTimeout(this.type, this.speed);
    },
    deleteText() {
      this.typingText = this.typingText.substring(0, this.typingText.length - 1);
      this.$refs.typingText.textContent = this.typingText;
      if (this.typingText.length !== 0) {
        setTimeout(this.deleteText, 80);
        return
      }
      if (this.loop) {
        this.currentMessage = (this.currentMessage + 1) % this.messages.length;
        this.isDeleting = false;
        setTimeout(this.type, this.speed);
      } else {
        this.completed = true;
      }
    },
  },
  mounted() {
    this.type();
  },
}
</script>

<style scoped>
.cursor::after {
  display: block;
  content: '';
  position: absolute;
  width: 4px;
  height: 100%;
  background-color: currentColor;
  animation: cursor 0.6s linear infinite alternate;
  will-change: opacity;
}

@keyframes cursor {
  0%,
  40% {
    opacity: 1;
  }

  60%,
  100% {
    opacity: 0;
  }
}
</style>