
// import { Platform } from 'react-native';

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import RNPickerSelect from 'react-native-picker-select';
// import DecorativeCircles from '../components/common/DecorativeCircles'


// const appointmentTypes = [
//   { label: 'General Checkup', value: 'general' },
//   { label: 'Dental Consultation', value: 'dental' },
//   { label: 'Eye Checkup', value: 'eye' },
//   { label: 'Physiotherapy', value: 'physio' },
// ];

// const OrderScreen = () => {
//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showTimePicker, setShowTimePicker] = useState(false);
//   const [appointmentType, setAppointmentType] = useState(null);

//   const handleConfirm = () => {
//     if (!appointmentType) {
//       Alert.alert('Error', 'Please select an appointment type.');
//       return;
//     }
//     Alert.alert(
//       'Appointment Confirmed',
//       `Your appointment is scheduled on ${date.toDateString()} at ${time.toLocaleTimeString()} for ${appointmentType}.`
//     );
//   };

//   return (
//     <View>

//       <View style={styles.container}>
//         <DecorativeCircles />
//         <Text style={styles.header}>Book an Appointment</Text>

//         {/* Date Picker */}
//         <Text style={styles.label}>Select Date</Text>
//         <TouchableOpacity style={styles.inputBox} onPress={() => setShowDatePicker(true)}>
//           <Text style={styles.inputText}>{date.toDateString()}</Text>
//         </TouchableOpacity>
//         {showDatePicker && (
//           <DateTimePicker
//             value={date}
//             mode="date"
//             display="default"
//             onChange={(event, selectedDate) => {
//               setShowDatePicker(false);
//               if (selectedDate) setDate(selectedDate);
//             }}
//           />
//         )}

//         {/* Time Picker */}
//         <Text style={styles.label}>Select Time</Text>
//         <TouchableOpacity style={styles.inputBox} onPress={() => setShowTimePicker(true)}>
//           <Text style={styles.inputText}>{time.toLocaleTimeString()}</Text>
//         </TouchableOpacity>
//         {showTimePicker && (
//           <DateTimePicker
//             value={time}
//             mode="time"
//             display="default"
//             onChange={(event, selectedTime) => {
//               setShowTimePicker(false);
//               if (selectedTime) setTime(selectedTime);
//             }}
//           />
//         )}

//         {/* Appointment Type Picker */}
//         <Text style={styles.label}>Select Appointment Type</Text>
//         <RNPickerSelect
//           onValueChange={(value) => setAppointmentType(value)}
//           items={appointmentTypes}
//           style={pickerSelectStyles}
//           placeholder={{ label: 'Select an appointment type...', value: null }}
//         />

//         {/* Confirm Button */}
//         <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
//           <Text style={styles.confirmButtonText}>Confirm Appointment</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default OrderScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#162D5C',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#162D5C',
//     marginBottom: 5,
//   },
//   inputBox: {
//     padding: 12,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 10,
//   },
//   inputText: {
//     fontSize: 16,
//     color: 'black',
//   },
//   confirmButton: {
//     marginTop: 20,
//     backgroundColor: '#162D5C',
//     paddingVertical: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   confirmButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// const pickerSelectStyles = {
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     color: 'black',
//     marginBottom: 10,
//   },
//   inputAndroid: {
//     fontSize: 16,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     color: 'black',
//     marginBottom: 10,
//   },
// };



// import React, { useState } from 'react';
// import { 
//   View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView, Platform, SafeAreaView 
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import RNPickerSelect from 'react-native-picker-select';
// import DecorativeCircles from '../components/common/DecorativeCircles';

// const appointmentTypes = [
//   { label: 'General Checkup', value: 'general' },
//   { label: 'Dental Consultation', value: 'dental' },
//   { label: 'Eye Checkup', value: 'eye' },
//   { label: 'Physiotherapy', value: 'physio' },
// ];

// const OrderScreen = () => {
//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showTimePicker, setShowTimePicker] = useState(false);
//   const [appointmentType, setAppointmentType] = useState(null);

//   const handleConfirm = () => {
//     if (!appointmentType) {
//       Alert.alert('Error', 'Please select an appointment type.');
//       return;
//     }
//     Alert.alert(
//       'Appointment Confirmed',
//       `Your appointment is scheduled on ${date.toDateString()} at ${time.toLocaleTimeString()} for ${appointmentType}.`
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <DecorativeCircles />
//         <View style={styles.container}>
//           <Text style={styles.header}>Book an Appointment</Text>

//           {/* Date Picker */}
//           <Text style={styles.label}>Select Date</Text>
//           <TouchableOpacity style={styles.inputBox} onPress={() => setShowDatePicker(true)}>
//             <Text style={styles.inputText}>{date.toDateString()}</Text>
//           </TouchableOpacity>
//           {showDatePicker && (
//             <DateTimePicker
//               value={date}
//               mode="date"
//               display="default"
//               onChange={(event, selectedDate) => {
//                 setShowDatePicker(false);
//                 if (selectedDate) setDate(selectedDate);
//               }}
//             />
//           )}

//           {/* Time Picker */}
//           <Text style={styles.label}>Select Time</Text>
//           <TouchableOpacity style={styles.inputBox} onPress={() => setShowTimePicker(true)}>
//             <Text style={styles.inputText}>{time.toLocaleTimeString()}</Text>
//           </TouchableOpacity>
//           {showTimePicker && (
//             <DateTimePicker
//               value={time}
//               mode="time"
//               display="default"
//               onChange={(event, selectedTime) => {
//                 setShowTimePicker(false);
//                 if (selectedTime) setTime(selectedTime);
//               }}
//             />
//           )}

//           {/* Appointment Type Picker */}
//           <Text style={styles.label}>Select Appointment Type</Text>
//           <RNPickerSelect
//             onValueChange={(value) => setAppointmentType(value)}
//             items={appointmentTypes}
//             style={pickerSelectStyles}
//             placeholder={{ label: 'Select an appointment type...', value: null }}
//           />

//           {/* Confirm Button */}
//           <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
//             <Text style={styles.confirmButtonText}>Confirm Appointment</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default OrderScreen;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
//   scrollView: {
//     flexGrow: 1,
//     padding: 20,
//   },
//   container: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#162D5C',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#162D5C',
//     marginBottom: 5,
//   },
//   inputBox: {
//     padding: 12,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 15,
//   },
//   inputText: {
//     fontSize: 16,
//     color: 'black',
//   },
//   confirmButton: {
//     marginTop: 20,
//     backgroundColor: '#162D5C',
//     paddingVertical: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   confirmButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// const pickerSelectStyles = {
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     color: 'black',
//     marginBottom: 10,
//   },
//   inputAndroid: {
//     fontSize: 16,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     color: 'black',
//     marginBottom: 10,
//   },
// };



import React, { useState } from 'react';
import { 
  View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView, SafeAreaView 
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import DecorativeCircles from '../components/common/DecorativeCircles';

const appointmentTypes = [
  { label: 'General Checkup', value: 'general' },
  { label: 'Dental Consultation', value: 'dental' },
  { label: 'Eye Checkup', value: 'eye' },
  { label: 'Physiotherapy', value: 'physio' },
];

const OrderScreen = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [appointmentType, setAppointmentType] = useState(null);

  const handleConfirm = () => {
    if (!appointmentType) {
      Alert.alert('Error', 'Please select an appointment type.');
      return;
    }
    Alert.alert(
      'Appointment Confirmed',
      `Your appointment is scheduled on ${date.toDateString()} at ${time.toLocaleTimeString()} for ${appointmentType}.`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <DecorativeCircles />
        <View style={styles.container}>
          <Text style={styles.header}>Book an Appointment</Text>

          {/* Date Picker */}
          <Text style={styles.label}>Select Date</Text>
          <TouchableOpacity style={styles.inputBox} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.inputText}>{date.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setDate(selectedDate);
              }}
            />
          )}

          {/* Time Picker */}
          <Text style={styles.label}>Select Time</Text>
          <TouchableOpacity style={styles.inputBox} onPress={() => setShowTimePicker(true)}>
            <Text style={styles.inputText}>{time.toLocaleTimeString()}</Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display="default"
              onChange={(event, selectedTime) => {
                setShowTimePicker(false);
                if (selectedTime) setTime(selectedTime);
              }}
            />
          )}

          {/* Appointment Type Picker */}
          <Text style={styles.label}>Select Appointment Type</Text>
          <RNPickerSelect
            onValueChange={(value) => setAppointmentType(value)}
            items={appointmentTypes}
            style={pickerSelectStyles}
            placeholder={{ label: 'Select an appointment type...', value: null }}
          />

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmButtonText}>Confirm Appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#162D5C',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#162D5C',
    marginBottom: 5,
  },
  inputBox: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  inputText: {
    fontSize: 16,
    color: 'black',
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#162D5C',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    marginBottom: 10,
  },
};
