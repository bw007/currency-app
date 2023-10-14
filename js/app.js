
const { createApp, ref } = Vue;

const app = createApp({
  data() {
    return {
      msg: "Currency App"
    };
  },
  mounted() {
    console.log();
  },
});

app.mount("#app");
