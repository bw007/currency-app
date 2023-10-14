const { createApp, ref } = Vue;

const app = createApp({
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/")
      .then((res) => {
        this.msg = res
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

app.mount("#app");

