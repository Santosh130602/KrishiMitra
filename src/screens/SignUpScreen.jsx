// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import DecorativeCircles from "../components/common/DecorativeCircles";

// const SignUpScreen = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   return (
//     <View style={styles.container}>
        
//         <DecorativeCircles/>

//       {/* Sign Up Heading */}
//       <Text style={styles.heading}>Sign Up</Text>

//       {/* Full Name Input */}
//       <Text style={styles.label}>Full name</Text>
//       <TextInput style={[styles.input, { borderColor: "red" }]} placeholder="Full Name" />

//       {/* Email Input */}
//       <Text style={styles.label}>E-mail</Text>
//       <TextInput
//         style={[styles.input, { borderColor: "blue", fontWeight: "bold" }]}
//         placeholder="Email"
//         keyboardType="email-address"
//       />

//       {/* Password Input */}
//       <Text style={styles.label}>Password</Text>
//       <View style={[styles.input, styles.passwordContainer, { borderColor: "green" }]}>
//         <TextInput
//           style={styles.passwordInput}
//           placeholder="Password"
//           secureTextEntry={!passwordVisible}
//         />
//         <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
//           <MaterialCommunityIcons
//             name={passwordVisible ? "eye-off-outline" : "eye-outline"}
//             size={24}
//             color="gray"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Sign Up Button */}
//       <TouchableOpacity style={styles.signUpButton}>
//         <Text style={styles.signUpButtonText}>SIGN UP</Text>
//       </TouchableOpacity>

//       {/* Already have an account? Login */}
//       {/* <Text style={styles.loginText}>
//         Already have an account? <Text style={styles.loginLink}>Login</Text>
//       </Text> */}
//        <Text style={styles.loginText}>
//         Already have an account?{" "}
//         <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//           <Text style={styles.loginLink}>Login</Text>
//         </TouchableOpacity>
//       </Text>

//       {/* Social Login Section */}
//       <View style={styles.socialContainer}>
//         <View style={styles.divider} />
//         <Text style={styles.socialText}>Sign up with</Text>
//         <View style={styles.divider} />
//       </View>

//       <View style={styles.socialButtons}>
//         {/* Facebook Button */}
//         <TouchableOpacity style={[styles.socialButton, { borderColor: "#3b5998" }]}>
//           <FontAwesome name="facebook" size={24} color="#3b5998" />
//           <Text style={styles.socialButtonText}>Facebook</Text>
//         </TouchableOpacity>

//         {/* Google Button */}
//         <TouchableOpacity style={[styles.socialButton, { borderColor: "#db4a39" }]}>
//           <FontAwesome name="google" size={24} color="#db4a39" />
//           <Text style={styles.socialButtonText}>Google</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SignUpScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 24,
//     paddingVertical: 50,
//   },
 
//   heading: {
//     fontSize: 35,
//     fontWeight: "bold",
//     color: "#000",
//     marginBottom: 20,
//   },
//   label: {
//     color: "#777",
//     marginBottom: 5,
//     fontSize: 16,
//   },
//   input: {
//     borderWidth: 2,
//     borderRadius: 10,
//     paddingVertical: 12,
//     paddingHorizontal: 14,
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   passwordContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   passwordInput: {
//     flex: 1,
//     fontSize: 16,
//   },
//   signUpButton: {
//     backgroundColor: "#28a745",
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   signUpButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   loginText: {
//     textAlign: "center",
//     color: "#555",
//     fontSize: 16,
//     marginBottom: 20,
//   },
// //   loginLink: {
// //     color: "#28a745",
// //     fontWeight: "bold",
// //   },
//   loginLink: {
//     textAlign: "center",
//     alignItems:'center',
//     color: "#4CAF50",
//     fontWeight: "bold",
//     textDecorationLine: "underline",
//   },
//   socialContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   divider: {
//     flex: 1,
//     height: 1,
//     backgroundColor: "#ddd",
//   },
//   socialText: {
//     marginHorizontal: 10,
//     color: "#888",
//     fontSize: 16,
//   },
//   socialButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   socialButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 2,
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     width: "48%",
//     justifyContent: "center",
//   },
//   socialButtonText: {
//     marginLeft: 10,
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });



import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import DecorativeCircles from "../components/common/DecorativeCircles";

const SignUpScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation(); // Navigation Hook

  return (
    <View style={styles.container}>
      <DecorativeCircles />

      {/* Sign Up Heading */}
      <Text style={styles.heading}>Sign Up</Text>

      {/* Full Name Input */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} placeholder="Full Name" />

      {/* Email Input */}
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <MaterialCommunityIcons
            name={passwordVisible ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      {/* Already have an account? Login */}
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </Text>

      {/* Social Login Section */}
      <View style={styles.socialContainer}>
        <View style={styles.divider} />
        <Text style={styles.socialText}>Sign up with</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.socialButtons}>
        {/* Facebook Button */}
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <FontAwesome name="facebook" size={24} color="#3b5998" />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>

        {/* Google Button */}
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <FontAwesome name="google" size={24} color="#db4a39" />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 50,
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    color: "#777",
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 16,
    borderColor: "#ccc", // Default border color
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
    borderColor: "#ccc",
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
  },
  signUpButton: {
    backgroundColor: "#28a745",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    color: "#555",
    fontSize: 16,
    marginBottom: 20,
  },
  loginLink: {
    color: "#4CAF50",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  socialText: {
    marginHorizontal: 10,
    color: "#888",
    fontSize: 16,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: "48%",
    justifyContent: "center",
  },
  facebookButton: {
    borderColor: "#3b5998",
  },
  googleButton: {
    borderColor: "#db4a39",
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
