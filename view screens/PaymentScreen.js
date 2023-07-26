import React, {Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { CardField, createToken, confirmPayment } from '@stripe/stripe-react-native';
import ButtonComp from '../Components/ButtonComp';
import createPaymentIntent from '../apis/stripeAspis';

const PaymentScreen = () => {
  const [cardInfo, setCartInfo] = useState(null)

  const fetchCardDetail = (cardDetails) => {
    if (cardDetail.completed) {
      setCartInfo(cardDetails)
    } else {
      setCardInfo(null)
    }
  }

  const onDone = async () => {

  }

  return (
    <View style={style.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <CardField postalCodeEnabled={false} placeholders={{
            number: '4242 4242 4242 4242'
          }}

          cardStyle={{
            backgroundColor: '#FFFFFFF',
            textColor: '#000000',
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30,
          }}
          onCardChange={(cardDetails) => {
            fetchCardDetail(cardDetails)
          }}
          onFocus={(focusedField) => {
            console.log('focusField', focusedField);
          }}
          />

          <ButtonComp onPress={onDone} disabled={!cardInfo} 
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PaymentScreen;