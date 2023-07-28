import { useState } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-root-toast";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { Paystack } from "react-native-paystack-webview";

export default function App() {
  const [pay, setPay] = useState(false);
  const [billingDetail, setBillingDetail] = useState({
    billingName: "Nicole Sabetian",
    billingEmail: "nic@example.com",
    billingMobile: "0630808051",
    amount: "ZAR 236852.96",
  });

  const handleOnchange = (text, input) => {
    setBillingDetail((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleSubmit = () => {
    if (
      billingDetail.billingName &&
      billingDetail.billingEmail &&
      billingDetail.billingMobile &&
      billingDetail.amount
    ) {
      // Ensure the amount is a valid number
      const numericAmount = parseFloat(billingDetail.amount);
      if (!isNaN(numericAmount)) {
        setBillingDetail((prevState) => ({ ...prevState, amount: numericAmount }));
        setPay(true);
      } else {
        Toast.show("Amount must be a valid number", {
          duration: Toast.durations.LONG,
        });
      }
    } else {
      Toast.show("Fill in all fields", {
        duration: Toast.durations.LONG,
      });
    }
  };

  return (
    <RootSiblingParent>
      <ScrollView>
        <View style={styles.appBar}>
          <Text style={styles.appBarTitle}>Payment</Text>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            placeholder="Billing Name"
            onChangeText={(text) => handleOnchange(text, "billingName")}
            value={billingDetail?.billingName}
          />
          <TextInput
            style={styles.input}
            placeholder="Billing Email"
            onChangeText={(text) => handleOnchange(text, "billingEmail")}
            value={billingDetail?.billingEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Billing Mobile"
            onChangeText={(text) => handleOnchange(text, "billingMobile")}
            value={billingDetail?.billingMobile}
          />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            onChangeText={(text) => handleOnchange(text, "amount")}
            value={billingDetail?.amount}
          />

          <Button
            title="Pay Now"
            color="black"
            accessibilityLabel="pay now"
            onPress={handleSubmit}
          />

          {pay && (
            <View style={{ flex: 1 }}>
              <Paystack
                paystackKey="pk_test_a89824b69250c3370695a7ca91dcb740d152060e"
                amount={billingDetail.amount}
                currency="ZAR"
                billingEmail={billingDetail.billingEmail}
                billingMobile={billingDetail.billingMobile}
                activityIndicatorColor="green"
                onCancel={(e) => {
                  // handle response here
                  Toast.show("Transaction Cancelled!!", {
                    duration: Toast.durations.LONG,
                  });
                }}
                onSuccess={(response) => {
                  // handle response here

                  const responseObject = response["transactionRef"]["message"];
                  if (responseObject === "Approved") {
                    Toast.show("Transaction Approved!!", {
                      duration: Toast.durations.LONG,
                    });
                  }
                }}
                autoStart={pay}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#fff",
    height: 95,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#841584",
  },
  body: {
    padding: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    marginTop: 15,
  },
});