<template>
    <div class="container">
        <div class="mt-4">
            <button class="btn btn-dark btn-sm"><p>Section 2 of 2</p></button>
        </div>
        <div class="p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
            <p class="text-2xl">A STUDY INTO THE NEGATIVE INFLUENCE OF INFORMATION TECHNOLOGY ON CHILD EDUCATION (A CASE STUDY OF SECONDARY SCHOOLS IN ILORIN SOUTH)</p>
        </div>

        <div class="p-4 mt-4 rounded-t-lg" style="background-color:#8FE58E;">
            <p class="text-2xl">NEGATIVE INFLUENCE OF INFORMATION TECHNOLOGY ON LEVEL OF CHILD EDUCATION</p>
        </div>
        <div class="rounded-b-lg" style="background-color:#8FE58E;">
            <p class="px-4 pb-4">
                Please respond to each of the following statements what most represents your agreement or disagreement to the items.    
            </p>
        </div>

        <div class=" mt-4">
            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Get distracted in class when they bring their phones to class</p>
                    <li v-for="distracted in GetDistractedWithPhones" :key="distracted">
                        <label>
                            <input v-model="question5" v-bind:value="distracted.id" @input="$v.question5.$touch()" class="" name="question5" id="question5" type="radio" >
                            <span class="ml-2">{{ distracted.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question5.required">Please select a option</p>
                </ul>
            </div>

            
            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Get distracted by information technology media after school</p>
                    <li v-for="distractedByIt in GetDistractedByItAfterSchool" :key="distractedByIt">
                        <label>
                            <input v-model="question6" v-bind:value="distractedByIt.id" @input="$v.question6.$touch()" class="" name="question6" id="question6" type="radio" >
                            <span class="ml-2">{{ distractedByIt.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question6.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Visit game centers or play games more than reading their books.</p>
                    <li v-for="play in PlayGames" :key="play">
                        <label>
                            <input v-model="question7" v-bind:value="play.id" @input="$v.question7.$touch()" class="" name="question7" id="question7" type="radio" >
                            <span class="ml-2">{{ play.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question7.required">Please select a option</p>
                </ul>
            </div>
            

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are more active on social media than their academics.</p>
                    <li v-for="social in SocialMedia" :key="social">
                        <label>
                            <input v-model="question8" v-bind:value="social.id" @input="$v.question8.$touch()" class="" name="question8" id="question8" type="radio" >
                            <span class="ml-2">{{ social.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question8.required">Please select a option</p>
                </ul>
            </div>
            

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are exposed to pornographic information which affects their academics negatively.</p>
                    <li v-for="pgraphic in Pornographic" :key="pgraphic">
                        <label>
                            <input v-model="question9" v-bind:value="pgraphic.id" @input="$v.question9.$touch()" class="" name="question9" id="question9" type="radio" >
                            <span class="ml-2">{{ pgraphic.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question9.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are addicted to television after schools hours.</p>
                    <li v-for="addictedt in AddictedToTelevesion" :key="addictedt">
                        <label>
                            <input v-model="question10" v-bind:value="addictedt.id" @input="$v.question10.$touch()" class="" name="question10" id="question10" type="radio" >
                            <span class="ml-2">{{ addictedt.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question10.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Use mobile phones for examination malpractice.</p>
                    <li v-for="phone in PhoneExamMalpractices" :key="phone">
                        <label>
                            <input v-model="question11" v-bind:value="phone.id" @input="$v.question11.$touch()" class="" name="question11" id="question11" type="radio" >
                            <span class="ml-2">{{ phone.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question11.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are distracted by other mobile or computer features when attending online classes.</p>
                    <li v-for="cfeatures in DistractedComputerFeatures" :key="cfeatures">
                        <label>
                            <input v-model="question12" v-bind:value="cfeatures.id" @input="$v.question12.$touch()" class="" name="question12" id="question12" type="radio" >
                            <span class="ml-2">{{ cfeatures.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question12.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are addicted to movies or shows on their devices.</p>
                    <li v-for="cfeatures in AddictedToMovies" :key="cfeatures">
                        <label>
                            <input v-model="question13" v-bind:value="cfeatures.id" @input="$v.question13.$touch()" class="" name="question13" id="question13" type="radio" >
                            <span class="ml-2">{{ cfeatures.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question13.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are distracted by listening to music in class.</p>
                    <li v-for="movies in DistractedByMovies" :key="movies">
                        <label>
                            <input v-model="question14" v-bind:value="movies.id" @input="$v.question14.$touch()" class="" name="question14" id="question14" type="radio" >
                            <span class="ml-2">{{ movies.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question14.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are distracted by listening to music in class.</p>
                    <li v-for="unecessaryinfo in DownloadUnecessaryInfo" :key="unecessaryinfo">
                        <label>
                            <input v-model="question15" v-bind:value="unecessaryinfo.id" @input="$v.question15.$touch()" class="" name="question15" id="question15" type="radio" >
                            <span class="ml-2">{{ unecessaryinfo.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question15.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are exposed to moral corruption through the internet</p>
                    <li v-for="moral in MoralCorruption" :key="moral">
                        <label>
                            <input v-model="question16" v-bind:value="moral.id" @input="$v.question16.$touch()" class="" name="question16" id="question16" type="radio" >
                            <span class="ml-2">{{ moral.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question16.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are exposed to gambling through technology and affects their education.</p>
                    <li v-for="gamble in Gambling" :key="gamble">
                        <label>
                            <input v-model="question17" v-bind:value="gamble.id" @input="$v.question17.$touch()" class="" name="question17" id="question17" type="radio" >
                            <span class="ml-2">{{ gamble.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question17.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are exposed to internet scam which affects their education.</p>
                    <li v-for="scam in InternetScam" :key="scam">
                        <label>
                            <input v-model="question18" v-bind:value="scam.id" @input="$v.question18.$touch()" class="" name="question18" id="question18" type="radio" >
                            <span class="ml-2">{{ scam.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question18.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Have become lazy in their academics since they get most information online.</p>
                    <li v-for="lazy in LazyInAcademics" :key="lazy">
                        <label>
                            <input v-model="question19" v-bind:value="lazy.id" @input="$v.question19.$touch()" class="" name="question19" id="question19" type="radio" >
                            <span class="ml-2">{{ lazy.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question19.required">Please select a option</p>
                </ul>
            </div>
            
            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are misguided academically due to wrong information online.</p>
                    <li v-for="misguide in MisguidedAcademically" :key="misguide">
                        <label>
                            <input v-model="question20" v-bind:value="misguide.id" @input="$v.question20.$touch()" class="" name="question20" id="question20" type="radio" >
                            <span class="ml-2">{{ misguide.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question20.required">Please select a option</p>
                </ul>
            </div>
            
            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Lose the habit to write due to excessive use of laptops and mobile phones.</p>
                    <li v-for="excessive in ExcessiveUseOfLaptops" :key="excessive">
                        <label>
                            <input v-model="question21" v-bind:value="excessive.id" @input="$v.question21.$touch()" class="" name="question21" id="question21" type="radio" >
                            <span class="ml-2">{{ excessive.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question21.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are more likely to loose their data on laptops or mobile phones than having physical books.</p>
                    <li v-for="losedata in LoseDataOnLaptop" :key="losedata">
                        <label>
                            <input v-model="question22" v-bind:value="losedata.id" @input="$v.question22.$touch()" class="" name="question22" id="question22" type="radio" >
                            <span class="ml-2">{{ losedata.title }}</span>
                        </label>
                    </li>
                    <p class="text-danger" v-if="!$v.question22.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are more serious in attending physical classes than online classes.</p>
                    <li v-for="attend in AttendPhysicalClass" :key="attend">
                        <div class="input" :class="{invalid: $v.question23.$error}">
                        <label v-bind:for="attend.id">
                            <input v-model="question23" @input="$v.question23.$touch()" class="" name="question23" type="radio" v-bind:value="attend.id" >
                            <span class="ml-2">{{ attend.title }}</span>
                        </label>
                        </div>
                    </li>
                    <p class="text-danger" v-if="!$v.question23.required">Please select a option</p>
                </ul>
            </div>

            <div class="form-group p-4 mt-4 rounded-lg" style="background-color:#8FE58E;">
                <ul class="-ml-8" style="list-style-type: none; " >
                    <p class="font-bold mb-2">Are you motivated to read physical books than reading from electronic devices.</p>
                    <li v-for="read in ReadPhysicalBooks" :key="read">
                        <div class="input" :class="{invalid: $v.question24.$error}">
                        <label v-bind:for="read.id">
                            <input v-model="question24" @input="$v.question24.$touch()" class="" name="question24" type="radio" v-bind:value="read.id" v-bind:id="read.id">
                            <span class="ml-2">{{ read.title }}</span>
                        </label>
                        </div>
                    </li>
                    <p class="text-danger" v-if="!$v.question24.required">Please select a option</p>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
// import {required} from 'vuelidate/lib/validators'
import {secondQuestions} from '../secondQuestion'
export default {
   mixins: [secondQuestions]
}
</script>
