import { required, email } from 'vuelidate/lib/validators'
export const firstQuestionMixin = {
  data() {
    return {
      question4: '',
      age: '',
      gender: '',
      clas: '',

      // devicesRef: '',  
      email: null,
      showSecond: false,
      showFirst: true,
      submitButton: false,
      Ages: [
        {
          "id": "l12",
          "title": "Less than 12"
        },
        {
          "id": "b1214",
          "title": "12 - 14 years"
        },
        {
          "id": "m14",
          "title": "More than 14 years"
        }
      ],
      Genders: [
        {
          "id": "male",
          "title": "Male"
        },
        {
          "id": "female",
          "title": "Female"
        },
      ],
      AccessIt: [
        {
          "id": "yes",
          "title": "Yes"
        },
        {
          "id": "no",
          "title": "No"
        },
      ],
      seniorClas: [
        {
          "id": "ss1",
          "title": "SS1"
        },
        {
          "id": "ss2",
          "title": "SS2"
        },
        {
          "id": "ss3",
          "title": "SS3"
        },
      ],
      devices: [

        {
          "id": "computer",
          "title": "Computer",
          "checked": true
        },
        {
          "id": "television",
          "title": "Television",
          "checked": false
        },
        {
          "id": "mobilePhone",
          "title": "Mobile Phone",
          "checked": false
        },
        {
          "id": "videoGame",
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
    question4: {
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
    // devicesRef:{
    //   required:required
    // }
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
