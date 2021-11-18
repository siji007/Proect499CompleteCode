<template>
    <div class="container">
        <div class="mt-4">
            <form action="" @submit.prevent="submit">
                <div v-show="!show">
                <div class="mt-4">
                    <button class="btn btn-dark btn-sm"><p>Section 1 of 2</p></button>
                </div>

                <div class="rounded-lg">
                    <h1 class="mt-4">A STUDY INTO THE NEGATIVE INFLUENCE OF INFORMATION TECHNOLOGY ON CHILD EDUCATION (A CASE STUDY OF SECONDARY SCHOOLS IN ILORIN SOUTH)</h1>
                    <p class="mt-4">
                        I am OLAIFA OLUWASIJIBOMI IBUKUNOLU, matric number 17/52HA082, a student of the university of Ilorin. This questionnaire is meant to elicit information on the negative influence of information technology on child education. This is mainly for research purposes and your responses will be treated with utmost confidentiality.
                    </p>
                </div>

                <div class="form-group p-4 rounded-lg" style="background-color:#8FE58E;">
                    <label for="" class="text-large font-bold">Age</label> <br>
                    <input type="radio" required name="age" id="l12"> <span class="ml-2">Less than 12</span><br>
                    <input type="radio" required name="age" id="b1214"> <span class="ml-2">12 - 14 years</span><br>
                    <input type="radio" required name="age" id="b1214"> <span class="ml-2">More than 14 years</span>
                </div>

                <div class="form-group mt-4 p-4 rounded-lg" style="background-color:#8FE58E;">
                    <label for="" class="text-large font-bold">Gender</label> <br>
                    <input type="radio" required name="gender" id="male"> <span class="ml-2">Male</span><br>
                    <input type="radio" required name="gender" id="female"> <span class="ml-2">Female</span><br>
                </div>

                <div class="form-group mt-4 p-4 rounded-lg" style="background-color:#8FE58E;">
                    <label for="" class="text-large font-bold">Class</label> <br>
                    <input type="radio" required name="class" id="ss1"> <span class="ml-2">SS1</span><br>
                    <input type="radio" required name="class" id="ss2"> <span class="ml-2">SS2</span><br>
                    <input type="radio" required name="class" id="ss2"> <span class="ml-2">SS3</span><br>
                </div>

                <div class="form-group mt-4 p-4 rounded-lg" style="background-color:#8FE58E;">
                    <label for="" class="text-large font-bold">Do you have access to information technology?</label> <br>
                    <input type="radio" required name="access" id="yes"> <span class="ml-2">Yes</span><br>
                    <input type="radio" required name="access" id="no"> <span class="ml-2">No</span><br>
                    
                </div>
                <div id="divf" class="form-group mt-4  p-4 rounded-lg pb-8" style="background-color:#8FE58E;">
                    <label for="" class="text-large font-bold">If Yes, what method accessing information technology?</label> <br>
                    <input type="radio" required name="method" id="television"> <span class="ml-2">Television</span><br>
                    <input type="radio" required name="method" id="ss2"> <span class="ml-2">Mobile phone</span><br>
                    <input type="radio" required name="method" id="ss2"> <span class="ml-2">Computer</span><br>
                    <input type="radio" required name="method" id="ss2"> <span class="ml-2">Video game</span><br>
                </div>
                <div class="mt-4">
                    <!-- <router-link  to="/section_2" tag="button"> -->
                    <button type="submit" class="btn" @click="show =!show" style="background-color:#8FE58E;">Next</button>
                    <!-- </router-link> -->
                </div>
                </div>

                <div v-show="show">
                    <SecondQuestionaire/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import SecondQuestionaire from '@/components/SecondQuestionaire'
export default {
    components:{
        SecondQuestionaire.
    },
    

    data(){
    //    const show
       
    return{
        show:false
        };
    },
    methods:{
        submit(){
            console.log('Pass');
        }
        // check(){
        //     if(show == false){
        //         return !show
        //     }
        // }
    }
}
</script>
<style scoped>
#divf{
    background-color: #8FE58E;
}
</style>