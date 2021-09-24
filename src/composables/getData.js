import { ref } from "@vue/reactivity";

const getData = () => {
  const gists = ref([]);
  const error = ref(null);
  const loader = ref(false);

  const load = async (page) => {
    loader.value = true;
    try {
      let data = await fetch(
        `https://api.github.com/gists/public?page=${page}&per_page=30`
      );
      if (!data.ok) {
        throw Error("no data available");
      }
      gists.value = await data.json();
      loader.value = false;
      console.log(gists);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
      loader.value = false;
    }
  };

  return { gists, error, load, loader };
};

export default getData;
