<template>
  <div :class="$style.container">
    <img :class="$style.img" v-if="url" :src="url" alt="lol">
    <input
      type="file"
      style="display: none"
      accept="image/*"
      ref="fileInput"
      @change="onfilePicked"
    />
    <button @click="onPickFile" :class="$style.btn" type="button">
      <img src="/img/addPhoto.svg" alt="add Photo">
    </button>
  </div>
</template>

<script>
  export default {
    name: 'AddPhoto',

    data() {
      return {
        url: null,
        file: null,
      };
    },

    methods: {
      onPickFile() {
        this.$refs.fileInput.click();
      },
      onfilePicked(event) {
        const files = event.target.files;
        const fileName = files[0].name;
        if (fileName.lastIndexOf('.') <= 0) {
          return alert('please add a avild file!');
        }
        const fileReader = new FileReader();

        fileReader.onload = (s) => {
          this.url = fileReader.result;
          this.file = files[0];
          this.$emit('changed-img', {file: this.file, url: this.url});
        };
        fileReader.readAsDataURL(files[0]);
      },
    },
  };
</script>

<style lang="scss" module>
  .container {
    position: relative;
    overflow: hidden;
    background: var(--bg-secondary);
    border-radius: $rImg;
    display: flex;
    justify-content: center;
    align-items: center;

    @include xs-block() {
      border-radius: 16px;
    }

    .img {
      max-width: 100%;
      object-fit: cover;
    }

    .btn {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      padding: 12px;
      background: var(--bg);
    }
  }
</style>
