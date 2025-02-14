

// import React, { useState } from "react";
// import { View, Text, TextInput, ScrollView, StyleSheet, Alert } from "react-native";
// import { Button } from "react-native-paper";
// import RNPickerSelect from "react-native-picker-select";
// import DecorativeCircles from "../components/common/DecorativeCircles";

// const FertilizerScreen = () => {
//   const [soilType, setSoilType] = useState("Clayey");
//   const [cropType, setCropType] = useState("Wheat");
//   const [values, setValues] = useState({
//     temperature: "",
//     humidity: "",
//     moisture: "",
//     nitrogen: "",
//     potassium: "",
//     phosphorous: "",
//   });

//   const soilTypes = ["Clayey", "Sandy", "Loamy", "Peaty", "Chalky", "Silty"];
//   const cropTypes = ["Wheat", "Rice", "Maize", "Barley", "Soybean", "Cotton"];

//   const handleChange = (name, value) => {
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = () => {
//     Alert.alert("Form Submitted", JSON.stringify({ soilType, cropType, ...values }, null, 2));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <DecorativeCircles/>
//       <Text style={styles.title}>Good Fertilizer for Your Crop</Text>
//       <Text style={styles.subtitle}>Please select a Language (Default: English)</Text>

//       {/* Language Selection */}
//       {/* <View style={styles.languageContainer}>
//         <Button mode="contained" onPress={() => {}} style={styles.langButton}>ENGLISH</Button>
//         <Button mode="contained" onPress={() => {}} style={styles.langButton}>HINDI</Button>
//         <Button mode="contained" onPress={() => {}} style={styles.langButton}>SPANISH</Button>
//       </View> */}

//       {/* Soil Type Dropdown */}
//       <Text style={styles.label}>Select a Soil Type</Text>
//       <RNPickerSelect
//         onValueChange={(value) => setSoilType(value)}
//         items={soilTypes.map((item) => ({ label: item, value: item }))}
//         value={soilType}
//         style={pickerSelectStyles}
//       />

//       {/* Crop Type Dropdown */}
//       <Text style={styles.label}>Select a Crop Type</Text>
//       <RNPickerSelect
//         onValueChange={(value) => setCropType(value)}
//         items={cropTypes.map((item) => ({ label: item, value: item }))}
//         value={cropType}
//         style={pickerSelectStyles}
//       />

//       {/* Input Fields */}
//       {["temperature", "humidity", "moisture", "nitrogen", "potassium", "phosphorous"].map((field) => (
//         <View key={field}>
//           <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)} value</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} value`}
//             value={values[field]}
//             onChangeText={(value) => handleChange(field, value)}
//           />
//         </View>
//       ))}

//       {/* Submit Button */}
//       <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
//         FERTILIZER RECOMMENDATION
//       </Button>
//     </ScrollView>
//   );
// };
// export default FertilizerScreen;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: "bold",
//     color: "#228B22",
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#555",
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   languageContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginBottom: 15,
//   },
//   langButton: {
//     marginHorizontal: 5,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 5,
//   },
//   input: {
//     backgroundColor: "#fff",
//     borderColor: "#28a745",
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   submitButton: {
//     marginTop: 15,
//     backgroundColor: "#1e90ff",
//   },
// });

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: "#28a745",
//     borderRadius: 5,
//     backgroundColor: "#fff",
//     marginBottom: 10,
//   },
//   inputAndroid: {
//     fontSize: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: "#28a745",
//     borderRadius: 5,
//     backgroundColor: "#fff",
//     marginBottom: 10,
//   },
// });



import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { Button } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import DecorativeCircles from "../components/common/DecorativeCircles";

const FertilizerScreen = () => {
  const [Soil_Type, setSoilType] = useState("Clayey");
  const [Crop_Type, setCropType] = useState("Wheat");
  const [values, setValues] = useState({
    Temperature: "",
    Humidity: "",
    Moisture: "",
    Nitrogen: "",
    Potassium: "",
    Phosphorous: "",
  });

  const [recommendedFertilizer, setRecommendedFertilizer] = useState(null);
  const [loading, setLoading] = useState(false);

  const soilTypes = ["Loamy", "Sandy", "Clayey", "Black", "Red"];
  const cropTypes = ["Sugarcane","Cotton","Millets","Paddy","Pulses","Wheat","Tobacco","Barley","Oil seeds","Ground Nuts","Maize"];
  

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setRecommendedFertilizer(null); // Clear previous results

    try {
      const response = await fetch("http://10.0.2.2:4000/fertilizer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Temperature: values.Temperature,
          Humidity: values.Humidity,
          Moisture: values.Moisture,
          Nitrogen: values.Nitrogen,
          Potassium: values.Potassium,
          Phosphorous: values.Phosphorous,
          Soil_Type: Soil_Type,
          Crop_Type: Crop_Type,
        }),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setRecommendedFertilizer(data.recommendation);
      } else {
        setRecommendedFertilizer("No recommendation found. Please check inputs.");
      }
    } catch (error) {
      setRecommendedFertilizer("Error fetching recommendation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DecorativeCircles/>
      <Text style={styles.title}>Good Fertilizer for Your Crop</Text>

      {/* Soil Type Dropdown */}
      <Text style={styles.label}>Select a Soil Type</Text>
      <RNPickerSelect
        onValueChange={(value) => setSoilType(value)}
        items={soilTypes.map((item) => ({ label: item, value: item }))}
        value={Soil_Type}
        style={pickerSelectStyles}
      />

      {/* Crop Type Dropdown */}
      <Text style={styles.label}>Select a Crop Type</Text>
      <RNPickerSelect
        onValueChange={(value) => setCropType(value)}
        items={cropTypes.map((item) => ({ label: item, value: item }))}
        value={Crop_Type}
        style={pickerSelectStyles}
      />

      {/* Input Fields */}
      {["Temperature", "Humidity", "Moisture", "Nitrogen", "Potassium", "Phosphorous"].map((field) => (
        <View key={field}>
          <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)} value</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} value`}
            value={values[field]}
            onChangeText={(value) => handleChange(field, value)}
          />
        </View>
      ))}

{loading && <ActivityIndicator size="large" color="#1e90ff" style={{ marginTop: 15 }} />}

{/* Recommended Fertilizer Output */}
{recommendedFertilizer && (
  <View style={styles.resultContainer}>
    <Text style={styles.resultText}>Recommended Fertilizer:</Text>
    <Text style={styles.resultValue}>" {recommendedFertilizer} "</Text>
  </View>
)}

      {/* Submit Button */}
      <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
        GET FERTILIZER RECOMMENDATION
      </Button>

      {/* Loader */}
      {/* {loading && <ActivityIndicator size="large" color="#1e90ff" style={{ marginTop: 15 }} />} */}

      {/* Recommended Fertilizer Output */}
      {/* {recommendedFertilizer && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Recommended Fertilizer:</Text>
          <Text style={styles.resultValue}>{recommendedFertilizer}</Text>
        </View>
      )} */}
    </ScrollView>
  );
};

export default FertilizerScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#228B22",
    textAlign: "center",
    marginBottom:15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#28a745",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 15,
    backgroundColor: "#1e90ff",
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#dff0d8",
    borderRadius: 5,
  },
  resultText: {
    fontSize: 20,
    textAlign:'center',
    // fontWeight: "bold",
    color: "gray",
  },
  resultValue: {
    fontSize: 18,
    color:"green",
    textAlign:'center',
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#28a745",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    // paddingVertical: 1,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#28a745",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
});
