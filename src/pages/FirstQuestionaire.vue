<template>
  <div class="container">
    <div class="mt-4">
      <form action="" @submit.prevent="onSubmit">
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
            <ul class="-ml-8" style="list-style-type: none; " >
                <p class="font-bold mb-2">Input email address</p>
                <li >
                    <label>
                        <input
                        style="border:none;focus:none;" 
                        v-model="email"  @blur="$v.email.$touch()" name=""  class="rounded-full p-2 border border-success" type="email" >
                        <!-- <span class="ml-2"></span> -->
                        <p class="p-1 text-danger font-serif" v-if="!$v.email.email"><i class=""></i>Please enter a valid email</p>
                        <p class="p-1 text-danger font-serif" v-if="!$v.email.required"><i class=""></i>Email is required</p>
                    </label>
                </li>
                
            </ul>
          </div>

          <div
            class="form-group p-4 rounded-lg"
            style="background-color: #8fe58e"
          >
            <ul class="-ml-8" style="list-style-type: none; " >
                <p class="font-bold mb-2">Age</p>
                <li v-for="age in Ages" :key="age">
                    <label>
                        <input v-model="ageRef"  @input="$v.ageRef.$touch()" name="age" max="1" class="" type="radio"  v-bind:value="age.id" v-bind:id="age.id">
                        <span class="ml-2">{{ age.title }}</span>
                    </label>
                </li>
                <p class="text-danger font-serif" v-if="!$v.ageRef.required">Please select a option</p>
            </ul>

            <!-- <label for="" class="text-large font-bold">Age</label> <br />
            <input type="radio" required name="age" id="l12" />
            <span class="ml-2">Less than 12</span><br />
            <input type="radio" required name="age" id="b1214" />
            <span class="ml-2">12 - 14 years</span><br />
            <input type="radio" required name="age" id="m14" />
            <span class="ml-2">More than 14 years</span> -->

          </div>

          <div
            class="form-group mt-4 p-4 rounded-lg"
            style="background-color: #8fe58e"
          >
            <ul class="-ml-8" style="list-style-type: none; " >
                <p class="font-bold mb-2">Gender</p>
                <li v-for="gender in Genders" :key="gender">
                    <label v-bind:for="gender.id">
                        <input v-model="genderRef"  @input="$v.genderRef.$touch()" name="gender" class="" type="radio"  v-bind:value="gender.id" v-bind:id="gender.id">
                        <span class="ml-2">{{ gender.title }}</span>
                    </label>
                </li>
                <p class="text-danger font-serif" v-if="!$v.genderRef.required">Please select a option</p>
            </ul>
            <!-- <label for="" class="text-large font-bold">Gender</label> <br />
            <input type="radio" required name="gender" id="male" />
            <span class="ml-2">Male</span><br />
            <input type="radio" required name="gender" id="female" />
            <span class="ml-2">Female</span><br /> -->

          </div>
          <div
            class="form-group mt-4 p-4 rounded-lg"
            style="background-color: #8fe58e"
          >
            <ul class="-ml-8" style="list-style-type: none; " >
              <p class="font-bold mb-2">Class</p>
              <li v-for="classes in seniorClass" :key="classes">
                  <label v-bind:for="classes.id">
                    <input v-model="classRef" @input="$v.classRef.$touch()" class="" name="class" type="radio" v-bind:value="classes.id" v-bind:id="classes.id">
                    <span class="ml-2">{{ classes.title }}</span>
                  </label>
              </li>
            </ul>
            <p class="text-danger font-serif" v-if="!$v.classRef.required">Please select a option</p>
            <!-- <label for="" class="text-large font-bold">Class</label> <br />
            <input type="radio" required name="class" id="ss1" />
            <span class="ml-2">SS1</span><br />
            <input type="radio" required name="class" id="ss2" />
            <span class="ml-2">SS2</span><br />
            <input type="radio" required name="class" id="ss3" />
            <span class="ml-2">SS3</span><br /> -->

          </div>

          <div
            class="form-group mt-4 p-4 rounded-lg"
            style="background-color: #8fe58e"
          >
            <ul class="-ml-8" style="list-style-type: none; " >
                <p class="font-bold mb-2">Do you have access to information technology?</p>
                <li v-for="access in AccessIt" :key="access">
                    <div class="input" :class="{invalid: $v.accessItYnRef.$error}">
                    <label v-bind:for="access.id">
                        <input v-model="accessItYnRef" @input="$v.accessItYnRef.$touch()" class="" name="access" type="radio" v-bind:value="access.id" v-bind:id="access.id">
                        <span class="ml-2">{{ access.title }}</span>
                    </label>
                    </div>
                </li>
                <p class="text-danger font-serif" v-if="!$v.accessItYnRef.required">Please select a option</p>
            </ul>
            <!-- <label for="" class="text-large font-bold"
              >Do you have access to information technology?</label
            >
            <br />
            <input type="radio" required name="access" id="yes" />
            <span class="ml-2">Yes</span><br />
            <input type="radio" required name="access" id="no" />
            <span class="ml-2">No</span><br /> -->
          </div>
          <div
            id="divf"
            class="form-group mt-4 p-4 rounded-lg pb-8"
            style="background-color: #8fe58e"
          >
            <!-- <label for="" class="text-large font-bold"
              >If Yes, what method accessing information technology?</label
            >
            <br />
            <input type="radio" required name="method" id="television" />
            <span  class="ml-2">Television</span><br />
            <input type="radio" required name="method" id="mobilePhone" />
            <span class="ml-2">Mobile phone</span><br />
            <input type="radio" required name="method" id="computer" />
            <span class="ml-2">Computer</span><br />
            <input type="radio" required name="method" id="videoGame" />
            <span class="ml-2">Video game</span><br /> -->
            <ul class="-ml-8" style="list-style-type: none; " >
                <p class="font-bold mb-2">If Yes, what method accessing information technology?</p>
                <li v-for="device in devices" :key="device">
                  <div>
                    <label v-bind:for="device.id">

                      <input class=""  type="checkbox" v-model="device.checked" v-bind:value="device.id" v-bind:id="device.id">
                      <span class="ml-2">{{ device.title }}</span>

                      <!-- <input class="" @input="$v.devicesRef.$touch()"  type="checkbox" v-model="devicesRef" v-bind:value="device.id" v-bind:id="device.id">
                      <span class="ml-2">{{ device.title }}</span> -->
                      
                    </label>
                    </div>
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
            :disabled="$v.$invalid"
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

        <router-link to="/success_page">
          <button v-show="submitButton"
            class="btn ml-4"
            id="submitt"
            type="submit"
            :disabled="$v.$invalid"
            style="background-color: #8fe58e"
            
          >
            Submit
          </button>
          </router-link>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {firstQuestionMixin} from '../firstQuestion'
// import {required} from 'vuelidate/lib/validators'
import SecondQuestionaire from "@/pages/SecondQuestionaire";
export default {
  mixins: [firstQuestionMixin],
  components: {
    SecondQuestionaire,
  },
  methods:{
  //  onSubmit() {
  //       if (!this.$v.$invalid) {
  //         const user = {
  //           email: this.email,
  //           //there could be a lot of props
  //         };

  //         console.log(user);

  //         this.email = '';
  //       }
  //     }
    },
}

</script>
<style scoped>
#divf {
  background-color: #8fe58e;
}
/* .input.invalid label {
    color: red;
} */
/* .input.invalid input {
    border: 1px solid red;
} */
</style>
