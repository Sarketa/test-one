<template>
  <div v-if="!loader">
    <div
      v-for="lg in gists"
      :key="lg.id"
      :class="{ pressed: lg.truncated }"
      @click="lg.truncated = !lg.truncated"
    >
      <div class="single">
        <div class="thumbnail">
          <img :src="lg.owner.avatar_url" />
        </div>
        <div class="info">
          <span>{{
            (lg.filename = Object.keys(lg.files)
              .toString()
              .slice(0, 50))
          }}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Spiner />
  </div>
  <div id="arrayPagination">
    <span>
      <button @click="load(1)">1</button>
      <button @click="load(2)">2</button>
      <button @click="load(3)">3</button>
    </span>
  </div>
</template>

<script>
import getData from "../composables/getData.js";
import Spiner from "../components/Spiner.vue";

export default {
  components: { Spiner },
  setup() {
    const { gists, error, load, loader } = getData();
    load();
    return { gists, error, load, loader };
  },
};
</script>

<style scoped>
.single {
  display: flex;
  align-items: center;
  padding: 20px 0;
  background: white;
  margin: 0 20px;
  border-bottom: 1px solid #eaeaea;
}
.thumbnail {
  max-width: 74px;
  max-height: 74px;
  overflow: hidden;
  border-radius: 0;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.info {
  margin: 0 16px;
}
.pressed {
  color: #06a9f6;
}
.pressed img {
  opacity: 0.5;
}
.pressed .thumbnail {
  background-color: #303133;
}

#arrayPagination {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: right;
  margin-top: 15px;
}
#arrayPagination:first-child button {
  color: blue;
}
#arrayPagination:last-child span button {
  margin-right: 2px;
  padding: 0 10px;
  font-size: 25px;
  font-weight: 700;
  color: #797c80;
  background: #ffffff;
  border: 1px solid #d6d8da;
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;
}
</style>
