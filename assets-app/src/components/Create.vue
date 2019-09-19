<template>
  <div class="pt-5">
    <form @submit.prevent="create" method="post">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          class="form-control"
          v-model="asset.name"
          v-validate="'required'"
          placeholder="P. Patek"
          :class="{'is-invalid': asset.name && submitted}"
        />
        <div class="invalid-feedback">Please provide asset name</div>
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          class="form-control"
          v-model="asset.category"
          v-validate="'required'"
          placeholder="Wristwatch"
          :class="{'is-invalid': asset.category && submitted}"
        />
        <div class="invalid-feedback">I can't tell if your asset is a car or not, I'm that dumb!</div>
      </div>

      <div class="form-group">
        <label for="amount">Amount #</label>
        <input
          type="number"
          name="amount"
          id="amount"
          class="form-control"
          v-model="asset.amount"
          v-validate="'required'"
          placeholder="#76450"
          :class="{'is-invalid': asset.amount && submitted}"
        />
        <div class="invalid-feedback">Input Amount</div>
      </div>

      <div class="form-group">
        <label for="lost">Lost/Sold?</label>
        <input
          type="radio"
          name="lost"
          id="lost"
          class="form-control"
          v-model="asset.lost"
          v-validate="'required'"
          value="true"
          :class="{'is-invalid': asset.lost && submitted}"
        /> True
        <input
          type="radio"
          name="lost"
          id="lost"
          class="form-control"
          v-model="asset.lost"
          v-validate="'required'"
          value="false"
          :class="{'is-invalid': asset.lost && submitted}"
        /> False
        <div class="invalid-feedback">Pick a side!</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      asset: {
        name: "",
        category: "",
        amount: "",
        lost: ""
      },
      submitted: false
    };
  },
  methods: {
    create: function() {
      this.$validator.validate().then(result => {
        this.submitted = true;
        if (!result) {
          return;
        }
        // console.log("Posting submission");
        axios
          .post(`http://127.0.0.1/api/assets/`, this.asset)
          .then( () => {
            this.$router.push("/");
          });
      });
    }
  }
};
</script>