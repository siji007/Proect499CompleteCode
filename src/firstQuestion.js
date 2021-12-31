import { required, email } from 'vuelidate/lib/validators'
export const firstQuestionMixin = {
  data() {
    return {
      question1: '',
      question2: '',
      age: '',
      gender: '',
      clas: '',
      location: '',
      email: null,
      showSecond: false,
      showFirst: true,
      submitButton: false,
      Ages: [
        {
          "id": "Less than 12",
          "title": "Less than 12"
        },
        {
          "id": "12 - 14 years",
          "title": "12 - 14 years"
        },
        {
          "id": "More than 14 years",
          "title": "More than 14 years"
        }
      ],
      Genders: [
        {
          "id": "Male",
          "title": "Male"
        },
        {
          "id": "Female",
          "title": "Female"
        },
      ],
      AccessIt: [
        {
          "id": "Yes",
          "title": "Yes"
        },
        {
          "id": "No",
          "title": "No"
        },
      ],
      SeniorClass: [
        {
          "id": "SSS 1",
          "title": "SS1"
        },
        {
          "id": "SSS 2",
          "title": "SS2"
        },
        {
          "id": "SSS 3",
          "title": "SS3"
        },
      ],
      Location : [
        {
          "id": "Rural",
          "title": "Rural"
        },
        {
          "id": "Urban",
          "title": "Urban"
        },
      ],

      devices: [

        {
          "id": "Computer",
          "title": "Computer",
          "checked": true
        },
        {
          "id": "Television",
          "title": "Television",
          "checked": false
        },
        {
          "id": "Mobile phone",
          "title": "Mobile Phone",
          "checked": false
        },
        {
          "id": "Video game",
          "title": "Video Game",
          "checked": false
        },

      ]

    };
  },
  validations: {
    email: {
      required, email
    },
    question1: {
      required: required
    },
    question2: {
      required: required
    },
    age: {
      required: required
    },
    gender: {
      required: required
    },
    clas: {
      required: required
    },
    location:{
      required: required
    }
  
  },
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
}
