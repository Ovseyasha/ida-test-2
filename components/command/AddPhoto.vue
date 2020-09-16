<template>
  <div :class="$style.AddPhoto">
    <div :class="$style.wrapper">
      <img
        :class="$style.img"
        v-if="url"
        :src="url"
        alt="image"
      >
      <input
        type="file"
        style="display: none"
        accept="image/*"
        ref="fileInput"
        @change="onfilePicked"
      />
      <button
        @click="onPickFile"
        :class="$style.btn"
        type="button"
      >
        <svg-icon name="addPhoto" />
      </button>
    </div>
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
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: $rImg;
    background: var(--bg-secondary);

    @include media(mobile){
      border-radius: 16px;
    }
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
</style>
