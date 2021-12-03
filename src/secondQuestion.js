import {required} from 'vuelidate/lib/validators'
export const secondQuestions = {
    data(){
        return{
            attendPhysicalClassRef:'',
            readPhysicalBooksRef:'',
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
                    "id": "ae",
                    "title": "Agree"
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
                    "id": "ae",
                    "title": "Agree"
                },
            ],

            
        }
    },
    validations:{
    
    readPhysicalBooksRef:{
        required:required
    },
    attendPhysicalClassRef:{
        required: required
    }
    
  },
    methods:{
        submit(){
            console.log('Done');
        },
        
    }
}

