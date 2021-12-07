import {required} from 'vuelidate/lib/validators'
export const secondQuestions = {
    data(){
        return{
            question5 : '',
            question6 : '',
            question7 : '',
            question8 : '',
            question9 : '',
            question10 : '',
            question11: '',
            question12 : '',
            question13 : '',
            question14 : '',
            question15 : '',
            question16 : '',
            question17 : '',
            question18 : '',
            question19 : '',
            question20 : '',
            question21 : '',
            question22 : '',
            question23 : '',
            question24 : '',
            


            GetDistractedWithPhones:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "ae",
                    "title": "Strongly Agree"
                },
            ],

            GetDistractedByItAfterSchool:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            PlayGames:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            SocialMedia:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            Pornographic:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            AddictedToTelevesion:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            PhoneExamMalpractices:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            DistractedComputerFeatures:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            AddictedToMovies:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            DistractedByMovies:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            DownloadUnecessaryInfo:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            MoralCorruption:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            Gambling:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            InternetScam:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            LazyInAcademics:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            MisguidedAcademically:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            ExcessiveUseOfLaptops:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            LoseDataOnLaptop:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            AttendPhysicalClass:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],

            ReadPhysicalBooks:[
                {
                    "id": "sd",
                    "title": "Strongly Disagree"
                },
                {
                    "id": "de",
                    "title": "Disagree"
                },
                {
                    "id": "ae",
                    "title": "Agree"
                },
                {
                    "id": "sa",
                    "title": "Strongly Agree"
                },
            ],
            

            
        }
    },
    validations:{
    question5:{
        required:required
    },
    question6:{
        required:required
    },
    question7:{
        required:required
    },
    question8:{
        required:required
    },
    question9:{
        required:required
    },
    question10:{
        required:required
    },
    question11:{
        required:required
    },
    question12:{
        required:required
    },
    question13:{
        required:required
    },
    question14:{
        required:required
    },
    question15:{
        required:required
    },
    question16:{
        required:required
    },
    question17:{
        required:required
    },
    question18:{
        required:required
    },
    question19:{
        required:required
    },
    question20:{
        required:required
    },
    question21:{
        required:required
    },
    question22:{
        required:required
    },
    question23:{
        required:required
    },
    question24:{
        required:required
    },
    
    // readPhysicalBooksRef:{
    //     required:required
    // },
    // attendPhysicalClassRef:{
    //     required: required
    // }
    
  },
    methods:{
        submit(){
            console.log('Done');
        },
        
    }
}

