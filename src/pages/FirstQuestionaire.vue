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
                    v-model="myemail"
                    @blur="$v.myemail.$touch()"
                    name="email"
                    class="rounded-full p-2 border border-success"
                    type="email"
                    id="email"
                  />

                  <p
                    class="p-1 text-danger font-serif"
                    v-if="!$v.myemail.email"
                  >
                    <i class=""></i>Please enter a valid email
                  </p>
                  <p
                    class="p-1 text-danger font-serif"
                    v-if="!$v.myemail.required"
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
                <div class="input" :class="{ invalid: $v.question1.$error }">
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
              <p class="text-danger font-serif" v-if="!$v.question1.required">
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
          <div class="container">
            <div class="mt-4">
              <button class="btn btn-dark btn-sm"><p>Section 2 of 2</p></button>
            </div>
            <div class="p-4 mt-4 rounded-lg" style="background-color: #8fe58e">
              <p class="text-2xl">
                A STUDY INTO THE NEGATIVE INFLUENCE OF INFORMATION TECHNOLOGY ON
                CHILD EDUCATION (A CASE STUDY OF SECONDARY SCHOOLS IN ILORIN
                SOUTH)
              </p>
            </div>

            <div
              class="p-4 mt-4 rounded-t-lg"
              style="background-color: #8fe58e"
            >
              <p class="text-2xl">
                NEGATIVE INFLUENCE OF INFORMATION TECHNOLOGY ON LEVEL OF CHILD
                EDUCATION
              </p>
            </div>
            <div class="rounded-b-lg" style="background-color: #8fe58e">
              <p class="px-4 pb-4">
                Please respond to each of the following statements what most
                represents your agreement or disagreement to the items.
              </p>
            </div>

            <div class="mt-4">
              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Get distracted in class when they bring their phones to
                    class
                  </p>
                  <li
                    v-for="distracted in GetDistractedWithPhones"
                    :key="distracted.id"
                  >
                    <label>
                      <input
                        v-model="question3"
                        v-bind:value="distracted.id"
                        @input="$v.question3.$touch()"
                        class=""
                        name="question3"
                        id="question3"
                        type="radio"
                      />
                      <span class="ml-2">{{ distracted.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question3.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Get distracted by information technology media after school
                  </p>
                  <li
                    v-for="distractedByIt in GetDistractedByItAfterSchool"
                    :key="distractedByIt.id"
                  >
                    <label>
                      <input
                        v-model="question4"
                        v-bind:value="distractedByIt.id"
                        @input="$v.question4.$touch()"
                        class=""
                        name="question4"
                        id="question4"
                        type="radio"
                      />
                      <span class="ml-2">{{ distractedByIt.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question4.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Visit game centers or play games more than reading their
                    books.
                  </p>
                  <li v-for="play in PlayGames" :key="play.id">
                    <label>
                      <input
                        v-model="question5"
                        v-bind:value="play.id"
                        @input="$v.question5.$touch()"
                        class=""
                        name="question5"
                        id="question5"
                        type="radio"
                      />
                      <span class="ml-2">{{ play.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question5.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are more active on social media than their academics.
                  </p>
                  <li v-for="social in SocialMedia" :key="social.id">
                    <label>
                      <input
                        v-model="question6"
                        v-bind:value="social.id"
                        @input="$v.question6.$touch()"
                        class=""
                        name="question6"
                        id="question6"
                        type="radio"
                      />
                      <span class="ml-2">{{ social.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question6.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are exposed to pornographic information which affects their
                    academics negatively.
                  </p>
                  <li v-for="pgraphic in Pornographic" :key="pgraphic.id">
                    <label>
                      <input
                        v-model="question7"
                        v-bind:value="pgraphic.id"
                        @input="$v.question7.$touch()"
                        class=""
                        name="question7"
                        id="question7"
                        type="radio"
                      />
                      <span class="ml-2">{{ pgraphic.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question7.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are addicted to television after schools hours.
                  </p>
                  <li
                    v-for="addictedt in AddictedToTelevesion"
                    :key="addictedt.id"
                  >
                    <label>
                      <input
                        v-model="question8"
                        v-bind:value="addictedt.id"
                        @input="$v.question8.$touch()"
                        class=""
                        name="question8"
                        id="question8"
                        type="radio"
                      />
                      <span class="ml-2">{{ addictedt.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question8.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Use mobile phones for examination malpractice.
                  </p>
                  <li v-for="phone in PhoneExamMalpractices" :key="phone.id">
                    <label>
                      <input
                        v-model="question9"
                        v-bind:value="phone.id"
                        @input="$v.question9.$touch()"
                        class=""
                        name="question9"
                        id="question9"
                        type="radio"
                      />
                      <span class="ml-2">{{ phone.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question9.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are distracted by other mobile or computer features when
                    attending online classes.
                  </p>
                  <li
                    v-for="cfeatures in DistractedComputerFeatures"
                    :key="cfeatures.id"
                  >
                    <label>
                      <input
                        v-model="question10"
                        v-bind:value="cfeatures.id"
                        @input="$v.question10.$touch()"
                        class=""
                        name="question10"
                        id="question10"
                        type="radio"
                      />
                      <span class="ml-2">{{ cfeatures.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question10.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are addicted to movies or shows on their devices.
                  </p>
                  <li
                    v-for="addictedtm in AddictedToMovies"
                    :key="addictedtm.id"
                  >
                    <label>
                      <input
                        v-model="question11"
                        v-bind:value="addictedtm.id"
                        @input="$v.question11.$touch()"
                        class=""
                        name="question11"
                        id="question11"
                        type="radio"
                      />
                      <span class="ml-2">{{ addictedtm.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question11.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are distracted by listening to music in class.
                  </p>
                  <li v-for="movies in DistractedByMovies" :key="movies.id">
                    <label>
                      <input
                        v-model="question12"
                        v-bind:value="movies.id"
                        @input="$v.question12.$touch()"
                        class=""
                        name="question12"
                        id="question12"
                        type="radio"
                      />
                      <span class="ml-2">{{ movies.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question12.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are distracted by listening to music in class.
                  </p>
                  <li
                    v-for="unecessaryinfo in DownloadUnecessaryInfo"
                    :key="unecessaryinfo.id"
                  >
                    <label>
                      <input
                        v-model="question13"
                        v-bind:value="unecessaryinfo.id"
                        @input="$v.question13.$touch()"
                        class=""
                        name="question13"
                        id="question13"
                        type="radio"
                      />
                      <span class="ml-2">{{ unecessaryinfo.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question13.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are exposed to moral corruption through the internet
                  </p>
                  <li v-for="moral in MoralCorruption" :key="moral.id">
                    <label>
                      <input
                        v-model="question14"
                        v-bind:value="moral.id"
                        @input="$v.question14.$touch()"
                        class=""
                        name="question14"
                        id="question14"
                        type="radio"
                      />
                      <span class="ml-2">{{ moral.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question14.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are exposed to gambling through technology and affects their
                    education.
                  </p>
                  <li v-for="gamble in Gambling" :key="gamble.id">
                    <label>
                      <input
                        v-model="question15"
                        v-bind:value="gamble.id"
                        @input="$v.question15.$touch()"
                        class=""
                        name="question15"
                        id="question15"
                        type="radio"
                      />
                      <span class="ml-2">{{ gamble.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question15.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are exposed to internet scam which affects their education.
                  </p>
                  <li v-for="scam in InternetScam" :key="scam.id">
                    <label>
                      <input
                        v-model="question16"
                        v-bind:value="scam.id"
                        @input="$v.question16.$touch()"
                        class=""
                        name="question16"
                        id="question16"
                        type="radio"
                      />
                      <span class="ml-2">{{ scam.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question16.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Have become lazy in their academics since they get most
                    information online.
                  </p>
                  <li v-for="lazy in LazyInAcademics" :key="lazy.id">
                    <label>
                      <input
                        v-model="question17"
                        v-bind:value="lazy.id"
                        @input="$v.question17.$touch()"
                        class=""
                        name="question17"
                        id="question17"
                        type="radio"
                      />
                      <span class="ml-2">{{ lazy.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question17.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are misguided academically due to wrong information online.
                  </p>
                  <li
                    v-for="misguide in MisguidedAcademically"
                    :key="misguide.id"
                  >
                    <label>
                      <input
                        v-model="question18"
                        v-bind:value="misguide.id"
                        @input="$v.question18.$touch()"
                        class=""
                        name="question18"
                        id="question18"
                        type="radio"
                      />
                      <span class="ml-2">{{ misguide.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question18.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Lose the habit to write due to excessive use of laptops and
                    mobile phones.
                  </p>
                  <li
                    v-for="excessive in ExcessiveUseOfLaptops"
                    :key="excessive.id"
                  >
                    <label>
                      <input
                        v-model="question19"
                        v-bind:value="excessive.id"
                        @input="$v.question19.$touch()"
                        class=""
                        name="question19"
                        id="question19"
                        type="radio"
                      />
                      <span class="ml-2">{{ excessive.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question19.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are more likely to loose their data on laptops or mobile
                    phones than having physical books.
                  </p>
                  <li v-for="losedata in LoseDataOnLaptop" :key="losedata.id">
                    <label>
                      <input
                        v-model="question20"
                        v-bind:value="losedata.id"
                        @input="$v.question20.$touch()"
                        class=""
                        name="question20"
                        id="question20"
                        type="radio"
                      />
                      <span class="ml-2">{{ losedata.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question20.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are more serious in attending physical classes than online
                    classes.
                  </p>
                  <li v-for="attend in AttendPhysicalClass" :key="attend.id">
                    <label v-bind:for="attend.id">
                      <input
                        v-model="question21"
                        @input="$v.question21.$touch()"
                        class=""
                        name="question21"
                        id="question21"
                        type="radio"
                        v-bind:value="attend.id"
                      />
                      <span class="ml-2">{{ attend.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question21.required">
                    Please select a option
                  </p>
                </ul>
              </div>

              <div
                class="form-group p-4 mt-4 rounded-lg"
                style="background-color: #8fe58e"
              >
                <ul class="-ml-8" style="list-style-type: none">
                  <p class="font-bold mb-2">
                    Are you motivated to read physical books than reading from
                    electronic devices.
                  </p>
                  <li v-for="read in ReadPhysicalBooks" :key="read.id">
                    <label v-bind:for="read.id">
                      <input
                        v-model="question22"
                        @input="$v.question22.$touch()"
                        class=""
                        name="question22"
                        id="question22"
                        type="radio"
                        v-bind:value="read.id"
                      />
                      <span class="ml-2">{{ read.title }}</span>
                    </label>
                  </li>
                  <p class="text-danger" v-if="!$v.question22.required">
                    Please select a option
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 mb-4">
          <button
            id="next"
            type="button"
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
// import { firstQuestionMixin } from "../firstQuestion";
import { required, email } from "vuelidate/lib/validators";
// import SecondQuestionaire from "@/pages/SecondQuestionaire";
import axios from "axios";

export default {
  data: function () {
    return {
      age: "",
      gender: "",
      clas: "",
      location: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      question9: "",
      question10: "",
      question11: "",
      question12: "",
      question13: "",
      question14: "",
      question15: "",
      question16: "",
      question17: "",
      question18: "",
      question19: "",
      question20: "",
      question21: "",
      question22: "",

      myemail: "",
      showSecond: false,
      showFirst: true,
      submitButton: false,
      Ages: [
        {
          id: "Less than 12",
          title: "Less than 12",
        },
        {
          id: "12 - 14 years",
          title: "12 - 14 years",
        },
        {
          id: "More than 14 years",
          title: "More than 14 years",
        },
      ],
      Genders: [
        {
          id: "Male",
          title: "Male",
        },
        {
          id: "Female",
          title: "Female",
        },
      ],
      AccessIt: [
        {
          id: "Yes",
          title: "Yes",
        },
        {
          id: "No",
          title: "No",
        },
      ],
      SeniorClass: [
        {
          id: "SSS 1",
          title: "SS1",
        },
        {
          id: "SSS 2",
          title: "SS2",
        },
        {
          id: "SSS 3",
          title: "SS3",
        },
      ],
      Location: [
        {
          id: "Rural",
          title: "Rural",
        },
        {
          id: "Urban",
          title: "Urban",
        },
      ],

      devices: [
        {
          id: "Computer",
          title: "Computer",
          checked: true,
        },
        {
          id: "Television",
          title: "Television",
          checked: false,
        },
        {
          id: "Mobile phone",
          title: "Mobile Phone",
          checked: false,
        },
        {
          id: "Video game",
          title: "Video Game",
          checked: false,
        },
      ],

      GetDistractedWithPhones: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      GetDistractedByItAfterSchool: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      PlayGames: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      SocialMedia: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      Pornographic: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      AddictedToTelevesion: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      PhoneExamMalpractices: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      DistractedComputerFeatures: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "trongly Agree",
          title: "Strongly Agree",
        },
      ],

      AddictedToMovies: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      DistractedByMovies: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      DownloadUnecessaryInfo: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      MoralCorruption: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      Gambling: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      InternetScam: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      LazyInAcademics: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      MisguidedAcademically: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      ExcessiveUseOfLaptops: [
        {
          id: "trongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      LoseDataOnLaptop: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      AttendPhysicalClass: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],

      ReadPhysicalBooks: [
        {
          id: "Strongly Disagree",
          title: "Strongly Disagree",
        },
        {
          id: "Disagree",
          title: "Disagree",
        },
        {
          id: "Agree",
          title: "Agree",
        },
        {
          id: "Strongly Agree",
          title: "Strongly Agree",
        },
      ],
    };
  },

  validations: {
    myemail: {
      required,
      email,
    },
    question1: {
      required: required,
    },
    question2: {
      required: required,
    },
    age: {
      required: required,
    },
    gender: {
      required: required,
    },
    clas: {
      required: required,
    },
    location: {
      required: required,
    },
    question3: {
      required: required,
    },
    question4: {
      required: required,
    },
    question5: {
      required: required,
    },
    question6: {
      required: required,
    },
    question7: {
      required: required,
    },
    question8: {
      required: required,
    },
    question9: {
      required: required,
    },
    question10: {
      required: required,
    },
    question11: {
      required: required,
    },
    question12: {
      required: required,
    },
    question13: {
      required: required,
    },
    question14: {
      required: required,
    },
    question15: {
      required: required,
    },
    question16: {
      required: required,
    },
    question17: {
      required: required,
    },
    question18: {
      required: required,
    },
    question19: {
      required: required,
    },
    question20: {
      required: required,
    },
    question21: {
      required: required,
    },
    question22: {
      required: required,
    },
  },

  //   mixins: [firstQuestionMixin],
  // components: {
  //   SecondQuestionaire,
  // },
  methods: {
    display() {
      this.showSecond = !this.showSecond;
      this.showFirst = !this.showFirst;
      this.submitButton = !this.submitButton;
    },
    onSubmit: function () {
      const question2s = document.getElementsByName("question2[]");
      const question2 = [];

      question2s.forEach((element) => {
        if (element.checked) question2.push(element.id);
      });

      const formData = new FormData();
      formData.append("email", this.$data.myemail);
      formData.append("age", this.$data.age);
      formData.append("gender", this.$data.gender);
      formData.append("class", this.$data.clas);
      formData.append("location", this.$data.location);
      formData.append("question1", this.$data.question1);
      formData.append("question2", question2);
      formData.append("question3", this.$data.question3);
      //test
      formData.append("question4", this.$data.question4);
      formData.append("question5", this.$data.question5);
      formData.append("question6", this.$data.question6);
      formData.append("question7", this.$data.question7);
      formData.append("question8", this.$data.question8);
      formData.append("question9", this.$data.question9);
      formData.append("question10", this.$data.question10);
      formData.append("question11", this.$data.question11);
      formData.append("question12", this.$data.question12);
      formData.append("question13", this.$data.question13);
      formData.append("question14", this.$data.question14);
      formData.append("question15", this.$data.question15);
      formData.append("question16", this.$data.question16);
      formData.append("question17", this.$data.question17);
      formData.append("question18", this.$data.question18);
      formData.append("question19", this.$data.question19);
      formData.append("question20", this.$data.question20);
      formData.append("question21", this.$data.question21);
      formData.append("question22", this.$data.question22);

      axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then(() => {
        axios
          .post("http://127.0.0.1:8000/api/store", formData)
          .then((result) => {
            console.log(result);
            alert('Thank you for your response!');
            this.$router.push('/') 
          })
          .catch((err) => {
            console.log(err);
          });
      });

      for (let key of formData.keys()) {
        console.log(key, formData.get(key));
      }
    },
  },

};
</script>
<style scoped>
#divf {
  background-color: #8fe58e;
}
</style>
