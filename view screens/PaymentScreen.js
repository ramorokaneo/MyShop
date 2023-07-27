import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Modal, TouchableOpacity } from 'react-native';
import { CardField } from '@stripe/stripe-react-native';
import ButtonComp from '../Components/ButtonComp';
import createPaymentIntent from '../apis/stripeAspis';
import paypalApi from '../apis/paypalApi';
import WebView from 'react-native-webview';
import { URLSearchParams } from 'react-native-url-polyfill';

import PayPal from 'react-native-paypal-wrapper';

const PaymentScreen = () => {
  const [cardInfo, setCardInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [paypalUrl, setPaypalUrl] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const fetchCardDetail = (cardDetails) => {
    if (cardDetails?.completed) {
      setCardInfo(cardDetails);
    } else {
      setCardInfo(null);
    }
  };

  const onDone = async () => {
    let apiData = {
      amount: 500,
      currency: 'ZAR',
    };

    try {
      const res = await createPaymentIntent(apiData);
      console.log('Payment intent created successfully...!!!', res);

      if (res?.data?.paymentIntent) {
        let confirmPaymentIntent = await confirmPayment(res?.data?.paymentIntent, {
          paymentMethodType: 'Card',
        });
        console.log('confirmPaymentIntent res++++', confirmPaymentIntent);
        alert('Payment successfully...!!!');
      }
    } catch (error) {
      console.log('Error raised during payment intent', error);
    }
  };

  const onPressPaypal = async () => {
    setLoading(true);
    try {
      const payment = {
        clientId: 'AfdW2FgdXPCidqvY3p9WrMWxWBu0vzep2-rDXX9bmLtctpbwGzv7yEHleqCl_bUr-ZlknvmbU7-zZDQL', 
        environment: PayPal.SANDBOX,
        intent: PayPal.INTENT.SALE,
        price: '17112.29', 
        currency: 'ZAR', 
        description: 'Payment for Your Product',
      };

      const paymentResponse = await PayPal.paymentRequest(payment);

      if (paymentResponse?.response?.state === 'approved') {
        alert('Payment successful...!!!');
      } else {
        alert('Payment canceled or failed...!!!');
      }

      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  const onUrlChange = (webviewState) => {
    console.log('webviewStatewebviewState', webviewState);
    if (webviewState.url.includes('https://example.com/cancel')) {
      clearPaypalState();
      return;
    }
    if (webviewState.url.includes('https://example.com/return')) {
      const urlValues = new URLSearchParams(webviewState.url);
      console.log('my urls value', urlValues);
      const token = urlValues.get('token');
      if (!!token) {
        paymentSuccess(token);
      }
    }
  };

  const paymentSuccess = async (id) => {
    try {
      const res = await paypalApi.capturePayment(id, accessToken);
      console.log('capturePayment res++++', res);
      alert('Payment successful...!!!');
      clearPaypalState();
    } catch (error) {
      console.log('error raised in payment capture', error);
    }
  };

  const clearPaypalState = () => {
    setPaypalUrl(null);
    setAccessToken(null);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={{
              width: '100%',
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={(cardDetails) => {
              fetchCardDetail(cardDetails);
            }}
            onFocus={(focusedField) => {
              console.log('focusField', focusedField);
            }}
          />

          <ButtonComp
            onPress={onDone}
            disabled={!cardInfo}
            btnStyle={{ backgroundColor: '#0f4fa3', marginVertical: 16 }}
            text="Pay with Card"
            isLoading={isLoading}
          />

          <ButtonComp
            onPress={onPressPaypal}
            btnStyle={{ backgroundColor: '#0070BA', marginVertical: 16 }}
            text="Pay with PayPal"
            isLoading={isLoading}
          />

          <Modal visible={!!paypalUrl}>
            <TouchableOpacity onPress={clearPaypalState} style={{ margin: 24 }}>
              <Text>Closed</Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <WebView source={{ uri: paypalUrl }} onNavigationStateChange={onUrlChange} />
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PaymentScreen;
