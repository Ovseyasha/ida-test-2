<template>
  <div :class="$style.FormCreate">
    <form
      :class="$style.form"
      @submit.prevent="create"
    >
      <TheAddPhoto
        @changed-img="setImg"
        :class="$style.addPhoto"
      />
      <input
        type="text"
        :class="$style.input"
        v-model="form.name"
        placeholder="Name"
      >
      <input
        type="text"
        :class="$style.input"
        v-model="form.description"
        placeholder="Description"
      >
      <span :class="[$style.inputWrap, $style.input]">
        <input
          type="text"
          :class="$style.inputNum"
          v-model.number="form.rent"
          @keypress="noText($event.target.value)"
          placeholder="Rent price">
        <span :class="$style.after">
          $/h
        </span>
      </span>
      <template v-if="showError">
        <p v-for="(e,i) in errors"
           :key="i"
           :class="$style.error"
        >
          {{e.value}}
        </p>
      </template>
      <button
        type="submit"
        :class="$style.submit"
      >
        Complete
      </button>
    </form>
  </div>
</template>

<script>

  import DataErrors from '@/assets/js/errors'
  export default {
    name: 'ProductFormCreate',

    data() {
      return {
        form: {
          name: '',
          description: '',
          rent: '',
        },
        fileImg: null,
        urlImg: null,
        showError: false,
      };
    },

    computed: {

      errors() {
        const errors = [];

        Object.keys(this.form).map(key => {
          if (this.form[key].length < 1) {
            errors.push({
              code: `empty-${key}`,
              value: DataErrors[`empty-${key}`],
            });
          } else if (this.form[key].length < 5) {
            if (DataErrors[`short-${key}`]) {
              errors.push({
                code: `short-${key}`,
                value: DataErrors[`short-${key}`],
              });
            }
          }

        });
        if (this.urlImg === null) {
          errors.push({
            code: 'photo-not-select',
            value: DataErrors['photo-not-select'],
          });
        }
        return errors;
      },
    },

    methods: {
      create() {
        try {
          if (this.errors.length < 1) {
            this.$store.dispatch('vehicles/create',
              {
                ...this.form,
                preview: this.urlImg,
                image: this.urlImg,
                //  fileImg on server
              });

            this.form.name = '';
            this.form.description = '';
            this.form.rent = '';
            this.fileImg = null;
            this.urlImg = null;
            this.showError = false;

            this.close();
          } else {
            this.showError = true;
          }
        } catch (e) {
          console.log(e);
        }
      },

      setImg(val) {
        this.fileImg = val.file;
        this.urlImg = val.url;
      },

      noText(evt) {
        this.form.rent = evt.replace(/^\D+/g, '');
      },

      close() {
        this.$store.commit('toggleModal');
      },
    },
  };
</script>

<style lang='scss' module>

  .form {
    display: flex;
    flex-direction: column;
  }

  .addPhoto {
    height: 348px;
    width: 100%;
    margin-bottom: 24px;

    @include respond-to(mobile) {
      max-height: 260px;
    }
  }

  .input {
    margin-bottom: 24px;

    @include respond-to(mobile) {
      margin-bottom: 16px;
    }
  }

  .submit {
    margin-top: 16px;
    padding: 21px 0;
    color: $cDarkWhite;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    border-radius: $rInput;
    background: $cLightBlue;

    @include respond-to(mobile) {
      margin-top: 8px;
      margin-bottom: 50px;
    }
  }

  .inputWrap {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .inputNum {
    width: 100%;
    padding-right: 60px;
  }

  .after {
    position: absolute;
    right: 15px;
    z-index: 2;
    padding: 10px;
    font-size: 16px;
    line-height: 14px;
    color: $cGrey2;
  }

  .error {
    color: var(--color-secondary);
  }
</style>
