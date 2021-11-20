<template>
  <div class="container">
    <div class="mt-4">
      <form action="" @submit.prevent="submit">
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

            <!-- <ul class="-ml-8" style="list-style-type: none; " >
                <p class="font-bold mb-2">Age</p>
                <li v-for="age in Ages" :key="age">
                    <label>
                        <input max="1" class="" type="radio"  v-bind:value="age.id" v-bind:id="age.id">
                        <span class="ml-2">{{ age.name }}</span>
                    </label>
                </li>
            </ul> -->

            <label for="" class="text-large font-bold">Age</label> <br />
            <input type="radio" required name="age" id="l12" />
            <span class="ml-2">Less than 12</span><br />
            <input type="radio" required name="age" id="b1214" />
            <span class="ml-2">12 - 14 years</span><br />
            <input type="radio" required name="age" id="m14" />
            <span class="ml-2">More than 14 years</span>


          </div>

          <div
            class="form-group mt-4 p-4 rounded-lg"
            style="background-color: #8fe58e"
          >

            <!-- <ul class="-ml-8" style="list-style-type: none; " >
                <p class="font-bold mb-2">Gender</p>
                <li v-for="gender in Genders" :key="gender">
                    <label v-bind:for="gender.id">
                        <input @mouseleave="checkRadio"  class="" type="radio"  v-bind:value="gender.id" v-bind:id="gender.id">
                        <span class="ml-2">{{ gender.name }}</span>
                    </label>
                </li>
            </ul> -->
            <label for="" class="text-large font-bold">Gender</label> <br />
            <input type="radio" required name="gender" id="male" />
            <span class="ml-2">Male</span><br />
            <input type="radio" required name="gender" id="female" />
            <span class="ml-2">Female</span><br />
          </div>

          <div
            class="form-group mt-4 p-4 rounded-lg"
            style="background-color: #8fe58e"
          >
            <!-- <ul class="-ml-8" style="list-style-type: none; " >
                <p class="font-bold mb-2">Class</p>
                <li v-for="classes in seniorClass" :key="classes">
                    <label v-bind:for="classes.id">
                        <input class="" type="radio" v-bind:value="classes.id" v-bind:id="classes.id">
                        <span class="ml-2">{{ classes.name }}</span>
                    </label>
                </li>
            </ul> -->
            <label for="" class="text-large font-bold">Class</label> <br />
            <input type="radio" required name="class" id="ss1" />
            <span class="ml-2">SS1</span><br />
            <input type="radio" required name="class" id="ss2" />
            <span class="ml-2">SS2</span><br />
            <input type="radio" required name="class" id="ss3" />
            <span class="ml-2">SS3</span><br />

          </div>

          <div
            class="form-group mt-4 p-4 rounded-lg"
            style="background-color: #8fe58e"
          >

            <!-- <ul class="-ml-8" style="list-style-type: none; " >
                <p class="font-bold mb-2">Do you have access to information technology?</p>
                <li v-for="access in accessIt" :key="access">
                    <label v-bind:for="access.id">
                        <input class="" type="radio" v-bind:value="access.id" v-bind:id="access.id">
                        <span class="ml-2">{{ access.name }}</span>
                    </label>
                </li>
            </ul> -->

            <label for="" class="text-large font-bold"
              >Do you have access to information technology?</label
            >
            <br />
            <input type="radio" required name="access" id="yes" />
            <span class="ml-2">Yes</span><br />
            <input type="radio" required name="access" id="no" />
            <span class="ml-2">No</span><br />
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
                    <label v-bind:for="device.id">
                        <input class="" type="checkbox" v-model="device.checked" v-bind:value="device.id" v-bind:id="device.id">
                        <span class="ml-2">{{ device.name }}</span>
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
            type="submit"
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

          <button v-show="submitButton"
            class="btn ml-4"
            style="background-color: #8fe58e"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import {required} from 'vuelidate/lib/validators'
import SecondQuestionaire from "@/components/SecondQuestionaire";
export default {
  components: {
    SecondQuestionaire,
  },
  data() {
    return {
      showSecond: false,
      showFirst: true,
      submitButton: false,
      Ages:[
        {
            "id":"l12",
            "name": "Less than 12"
        },
        {
        "id":"b1214",
        "name": "12 - 14 years"
        },
        {
        "id":"m14",
        "name": "More than 14 years"
        }
      ],
      Genders:[
        {
            "id": "male",
            "name": "Male"
        },
        {
            "id": "female",
            "name": "Female"
        },
      ],
      accessIt:[
        {   "id":"yes",
            "name": "Yes"
        },
        {   "id":"no",
            "name": "No"
        },
      ],
      seniorClass:[
        {
            "id" : "ss1",
            "name": "SS1"
        },
        {
            "id" : "ss2",
            "name": "SS2"
        },
        {
            "id" : "ss3",
            "name": "SS3"
        },
      ],
      devices:[
          
        {
        "id": "computer",
        "name":"Computer",
        "checked":true
        },
        {
        "id": "television",
        "name":"Television",
        "checked":false
        },
        {
        "id": "mobilePhone",
        "name":"Mobile Phone",
        "checked":false
        },
        {
        "id": "videoGame",
        "name":"Video Game",
        "checked":false
        },
          
      ]

    };
  },
  validations:{},
  methods: {
    submit() {
      console.log("Pass");
    },
    display() {
      this.showSecond = !this.showSecond;
      this.showFirst = !this.showFirst;
      this.submitButton = !this.submitButton;
    },
  },
};
</script>
<style scoped>
#divf {
  background-color: #8fe58e;
}
</style>