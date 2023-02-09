import { email, password, textField, phone } from "../fieldsValidattion";
import * as Yup from "yup";

// *********** Set up the validation form object for form validation. ********* //

// Login form Validation
const loginFormValidate = Yup.object({
    email,
    password: password({ reqMesg: "Password is Required" }),
});

// Get In Touch form Validation
const getInTouchFormValidate = Yup.object({
    fullName:textField({}),
    email,
    phoneNo:phone,
    aboutProject:textField({}),

});

export {
    loginFormValidate,
    getInTouchFormValidate
}
