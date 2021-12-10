<template>
  <div class="container">
    <div class="mt-4">
      <form action="http://127.0.0.1:8000/api/store" @submit.prevent="onSubmit">
        <div v-show="showFirst">
          <div class="mt-4">
            <button class="btn btn-dark btn-sm"><p>Section 1 of 2</p></button>
          </div>

          <div class="rounded-lg">
            <h1 class="mt-4">
              A STUDY INTO THE NEGATIVE INFLUENCE OF INFORMATION TECHNOLOGY ON
              CHILD EDUCATION (A CASE STUDY OF SECONDARY SCHOOLS IN ILORIN
              SOUTH)
            </h1>
            <p class="mt-4 mb-4">
              I am OLAIFA OLUWASIJIBOMI IBUKUNOLU, matric number 17/52HA082, a
              student of the university of Ilorin. This questionnaire is meant
              to elicit information on the negative influence of information
              technology on child education. This is mainly for research
              purposes and your responses will be treated with utmost
              confidentiality.
            </p>
          </div>
          <div
            class="form-group p-4 rounded-lg"
            style="background-color: #8fe58e"
          >
            <ul class="-ml-8" style="list-style-type: none">
              <p class="font-bold mb-2">Input email address</p>
              <li>
                <label>
                  <input
                    style="border: none; focus: none"
                    v-model="email"
                    @blur="$v.email.$touch()"
                    name="email"
                    class="rounded-full p-2 border border-success"
                    type="email"
                    id="email"
                  />
                  <!-- <span class="ml-2"></span> -->
                  <p class="p-1 text-danger font-serif" v-if="!$v.email.email">
                    <i class=""></i>Please enter a valid email
                  </p>
                  <p
                    class="p-1 text-danger font-serif"
                    v-if="!$v.email.required"
                  >
                    <i class=""></i>Email is required
                  </p>
                </label>
              </li>
            </ul>
          </div>

          <div
            class="form-group p-4 rounded-lg"
            style="background-color: #8fe58e"
          >
            <ul class="-ml-8" style="list-style-type: none">
              <p class="font-bold mb-2">Age</p>
              <li v-for="myage in Ages" :key="myage.id">
                <label>
                  <input
                    v-model="age"
                    @input="$v.age.$touch()"
                    name="age"  
                    max="1"
                    class=""
                    type="radio"
                    v-bind:value="myage.id"
                    id="age"
                  />
                  <span class="ml-2">{{ myage.title }}</span>
                </label>
              </li>
              <p class="text-danger font-serif" v-if="!$v.age.required">
                Please select a option
              </p>
            </ul>
          </div>

          <div
            class="form-group mt-4 p-4 rounded-lg"
            style="background-color: #8fe58e"
          >
            <ul class="-ml-8" style="list-style-type: none">
              <p class="font-bold mb-2">Gender</p>
              <li v-for="gend in Genders" :key="gend.id">
                <label v-bind:for="gender.id">
                  <input
                    v-model="gender"
                    @input="$v.gender.$touch()"
                    name="gender"
                    class=""
                    type="radio"
                    v-bind:value="gend.id"
                    id="gender"
                  />
                  <span class="ml-2">{{ gend.title }}</span>
                </label>
              </li>
              <p class="text-danger font-serif" v-if="!$v.gender.required">
                Please select a option
              </p>
            </ul>
          </div>

          <div
            class="form-group p-4 rounded-lg"
            style="background-color: #8fe58e"
          >
            <ul class="-ml-8" style="list-style-type: none">
              <p class="font-bold mb-2">Class</p>
              <li v-for="classes in SeniorClass" :key="classes.id">
                <label>
                  <input
                    v-model="clas"
                    @input="$v.clas.$touch()"
                    name="classes"  
                    max="1"
                    class=""
                    type="radio"
                    v-bind:value="classes.id"
                    id="classes"
                  />
                  <span class="ml-2">{{ classes.title }}</span>
                </label>
              </li>
              <p class="text-danger font-serif" v-if="!$v.clas.required">
                Please select a option
              </p>
            </ul>
          </div>

          <div
            class="form-group p-4 rounded-lg"
            style="background-color: #8fe58e"
          >
            <ul class="-ml-8" style="list-style-type: none">
              <p class="font-bold mb-2">Location</p>
              <li v-for="locate in Location" :key="locate.id">
                <label>
                  <input
                    v-model="location"
                    @input="$v.location.$touch()"
                    name="location"  
                    max="1"
                    class=""
                    type="radio"
                    v-bind:value="locate.id"
                    id="location"
                  />
                  <span class="ml-2">{{ locate.title }}</span>
                </label>
              </li>
              <p class="text-danger font-serif" v-if="!$v.location.required">
                Please select a option
              </p>
            </ul>
          </div>


          <div
            class="form-group mt-4 p-4 rounded-lg"
            style="background-color: #8fe58e"
          >
            <ul class="-ml-8" style="list-style-type: none">
              <p class="font-bold mb-2">
                Do you have access to information technology?
              </p>
              <li v-for="access in AccessIt" :key="access.id">
                <div
                  class="input"
                  :class="{ invalid: $v.question1.$error }"
                >
                  <label v-bind:for="access.id">
                    <input
                      v-model="question1"
                      @input="$v.question1.$touch()"
                      class=""
                      name="question1"
                      type="radio"
                      v-bind:value="access.id"
                      v-bind:id="access.id"
                    />
                    <span class="ml-2">{{ access.title }}</span>
                  </label>
                </div>
              </li>
              <p
                class="text-danger font-serif"
                v-if="!$v.question1.required"
              >
                Please select a option
              </p>
            </ul>
          </div>
          <div
            id="divf"
            class="form-group mt-4 p-4 rounded-lg pb-8"
            style="background-color: #8fe58e"
          >
  
            <ul class="-ml-8" style="list-style-type: none">
              <p class="font-bold mb-2">
                If Yes, what method accessing information technology?
              </p>
              <li v-for="device in devices" :key="device.id">
                <label v-bind:for="device.id">
                  <input
                    class=""
                    type="checkbox"
                    v-model="device.checked"
                    name="question2[]"
                    v-bind:value="device.id"
                    v-bind:id="device.id"
                  />
                  <span class="ml-2">{{ device.title }}</span>
                  <!-- <input class="" @input="$v.devicesRef.$touch()"  type="checkbox" v-model="devicesRef" v-bind:value="device.id" v-bind:id="device.id">
                      <span class="ml-2">{{ device.title }}</span> -->
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div v-show="showSecond">
          <SecondQuestionaire />
        </div>

        <div class="mt-4 mb-4">
          <button
            id="next"
            
            class="btn"
            @click="display"
            v-show="showFirst"
            style="background-color: #8fe58e"
          >
            Next
          </button>

          <button
            type="button"
            @click="display"
            v-show="showSecond"
            class="btn btn-light"
          >
            Back
          </button>

          <!-- <router-link to="/success_page"> -->
          <button
            v-show="submitButton"
            class="btn ml-4"
            id="submitt"
            type="submit"
            
            style="background-color: #8fe58e"
          >
            Submit
          </button>
          <!-- </router-link> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { firstQuestionMixin } from "../firstQuestion";
// import {required} from 'vuelidate/lib/validators'
import SecondQuestionaire from "@/pages/SecondQuestionaire";
// import axios from 'axios';

export default {
  mixins: [firstQuestionMixin],
  components: {
    SecondQuestionaire,
  },
  methods: {
    onSubmit: function () {
    const formData = new FormData();
    formData.append("email", this.email);
    formData.append("age", this.age);
    formData.append("gender", this.gender);
    formData.append("classes", this.clas);
    // formData.append('',)
    formData.append("location", this.location);
    formData.append("question1", this.question1);
    formData.append("question2", this.question2);
    formData.append("question3", this.question3);
    formData.append("question4", this.question4);
    formData.append("question5", this.question5);
    formData.append("question6", this.question6);
    formData.append("question7", this.question7);
    formData.append("question8", this.question8);
    formData.append("question9", this.question9);
    formData.append("question10", this.question10);
    formData.append("question11", this.question11);
    formData.append("question12", this.question12);
    formData.append("question13", this.question13);
    formData.append("question14", this.question14);
    formData.append("question15", this.question15);
    formData.append("question16", this.question16);
    formData.append("question17", this.question17);
    formData.append("question18", this.question18);
    formData.append("question19", this.question19);
    formData.append("question20", this.question20);
    formData.append("question21", this.question21);
    formData.append("question22", this.question22);
    // axios.post('http://127.0.0.1:8000/api/store').then((result) => {

    //   console.log(result)
    // }).catch((err) => {
    //   console.log(err)
    // });
    // console.log('email').value)
    // console.log(formData);
    // for (let key of formData.keys()) {
    //   console.log(key, formData.get(key))
    // }
    console.log('Anwser:',this.question3);
}
  },
};
</script>
<style scoped>
#divf {
  background-color: #8fe58e;
}
</style>
