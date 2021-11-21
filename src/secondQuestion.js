import {required} from 'vuelidate/lib/validators'
export const secondQuestions = {
    data(){
        return{
            readPhysicalBooksError:'',
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
            ]
        }
    },
    validations:{
    
    readPhysicalBooksError:{
        required:required
    },
    
  },
    methods:{
        submit(){
            console.log('Done');
        },
        
    }
}

