// Importing necessary components from React Native
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

// Importing external styles
import styles from "../../Practice03/styles/practice03Styles";

// Importing form validation tools
import * as Yup from "yup"; // Yup is used to define and apply form validation rules
import { Formik } from "formik"; // Formik is used to handle form state, validation, and submission
import BouncyCheckBox from "react-native-bouncy-checkbox"; // 3rd party checkbox component with animation

// Custom type for CheckBoxRow props
type Props = {
  label: string;
  isChecked: boolean;
  onPress: () => void;
  fillColor: string;
};

// Reusable component for rendering a label and checkbox
const CheckBoxRow = ({ label, isChecked, onPress, fillColor }: Props) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.heading}>{label}</Text>
      <View style={{ flex: 1 }} />
      <BouncyCheckBox
        style={{ width: 30 }}
        isChecked={isChecked}
        onPress={onPress}
        fillColor={fillColor}
      />
    </View>
  );
};

// Validation schema for password length using Yup
const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .typeError("Password length must be a number")
    .min(8, "Should be min of 8 characters")
    .max(16, "Password should be max 16 digits long")
    .required("This is the Required Field"),
});

// Main functional component
export default function practice03() {
  // Local state to manage password and form options
  const [password, setPassword] = useState(""); // Stores the generated password
  const [isPassGenerated, setIsPassGenerated] = useState(false); // Tracks if password has been generated

  // Options for character types
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  /**
   * Generates password based on selected options and desired length
   */
  const generatePassword = (passwordLength: number) => {
    let characterList = "";

    // Define different character sets
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    // Add selected character sets to the list
    if (upperCase) characterList += upperCaseLetters;
    if (lowerCase) characterList += lowerCaseLetters;
    if (numbers) characterList += digits;
    if (symbols) characterList += specialChars;

    // Create the password from the final list
    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  /**
   * Generates a random password from a given character string
   */
  const createPassword = (charSet: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.floor(Math.random() * charSet.length); // Corrected from Math.round for better randomness
      result += charSet.charAt(charIndex);
    }
    return result;
  };

  /**
   * Resets all form options and password
   */
  const resetPassword = () => {
    setIsPassGenerated(false);
    setPassword("");

    // Reset checkboxes to default
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          {/* Formik handles form state, validation, and submission */}
          <Formik
            initialValues={{ passwordLength: "" }} // Initial values for form fields (Formik state)
            validationSchema={passwordSchema} // Yup schema to validate fields
            onSubmit={(values) => {
              // Called when form is submitted and validation passes
              generatePassword(+values.passwordLength); // '+' converts string to number
            }}
          >
            {({
              values, // Current values of form fields (e.g., values.passwordLength)
              errors, // Validation error messages for fields (if any)
              touched, // Tracks which fields have been "touched" (clicked/focused)
              isValid, // Boolean: true if the form is valid (no errors)
              handleChange, // Function to handle text input change
              handleSubmit, // Function to trigger form validation + onSubmit
              handleReset, // Function to reset the form to initialValues

              /* and other goodies (explained below) */
              setFieldValue, // Manually set value for a field
              setFieldTouched, // Manually mark a field as "touched"
              setValues, // Set all form values at once
              validateForm, // Trigger validation manually
              validateField, // Validate a specific field
              resetForm, // Full reset (form + touched + errors)
              dirty, // Boolean: true if user modified the form
              submitForm, // Alternative to handleSubmit
              setSubmitting, // Set submitting state (e.g., while waiting for API)
              isSubmitting, // Boolean: true if submit is in progress
              status, // Custom status for tracking global form state
              setStatus, // Manually set status
            }) => (
              <>
                {/* UI inside Formik context: gets real-time form state */}

                <View style={[styles.inputWrapper, { gap: 10 }]}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>

                    {/* Show error if the field was touched and has a validation error */}
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>

                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength} // Controlled input tied to Formik
                    onChangeText={handleChange("passwordLength")} // Updates Formik state
                    placeholder="Enter Password"
                    keyboardType="numeric"
                  />
                </View>

                {/* Checkboxes to select password criteria */}
                <CheckBoxRow
                  label="Include Lower Case"
                  isChecked={lowerCase}
                  onPress={() => setLowerCase(!lowerCase)}
                  fillColor="#FF3B30"
                />
                <CheckBoxRow
                  label="Include Upper Case Letter"
                  isChecked={upperCase}
                  onPress={() => setUpperCase(!upperCase)}
                  fillColor="#4cd964"
                />
                <CheckBoxRow
                  label="Include Numbers"
                  isChecked={numbers}
                  onPress={() => setNumbers(!numbers)}
                  fillColor="#FF9500"
                />
                <CheckBoxRow
                  label="Include Symbols"
                  isChecked={symbols}
                  onPress={() => setSymbols(!symbols)}
                  fillColor="#5856D6"
                />

                {/* Action Buttons: Generate & Reset */}
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid} // Disable button if form is invalid
                    onPress={() => {
                      handleSubmit();
                    }} // Triggers validation and then calls onSubmit
                  >
                    <Text style={styles.links}>Generate Password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      handleReset(); // Resets Formik input fields
                      resetPassword(); // Resets custom checkbox state
                    }}
                  >
                    <Text style={styles.links}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          {/* Display Generated Password */}
          {isPassGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.subTitle}>Result:</Text>
              <Text style={styles.description}>Long Press to Copy</Text>
              <Text selectable={true} style={styles.generatedPassword}>
                {password}
              </Text>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

/*
📝 Understanding useState in React Native:
- `useState` allows functional components to have state.
- Example: const [count, setCount] = useState(0);
- You update state using the setter function (setCount), not by direct assignment.

🛠 Swift Equivalent:
let generatePassword: (String) -> Void = { passwordLength in
    print("Generating password with length \(passwordLength)")
}

var passwordInfo: String {
    return "Password must be at least 8 characters."
}

✨ Why Formik + Yup?
- Formik handles form state, input changes, and form submission cleanly.
- Yup helps validate user inputs with custom rules.
  → Together, they make form handling easier, less error-prone, and more scalable.

  
| `Formik`           | Manages form state, input handling, validation, and submission                            |
| `Yup`              | Provides schema-based validation (e.g., min/max values, required fields)                  |
| `useState`         | Lets you create local state in functional components (e.g., storing password, checkboxes) |
| `TouchableOpacity` | Makes views pressable (buttons)                                                           |
| `TextInput`        | User input field                                                                          |
| `BouncyCheckBox`   | A fun animated checkbox for better UX                                                     |


*/
