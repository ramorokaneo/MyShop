import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useApplePay, ApplePayButtonType, ApplePayButtonStyle } from 'react-native-apple-pay';
import { GooglePayButton, useGooglePay } from 'react-native-google-pay';

const PaymentScreen = () => {
  const { canMakePayments: canMakeApplePayPayments, requestPayment: requestApplePayPayment } = useApplePay();
  const { canMakePayments: canMakeGooglePayPayments, requestPayment: requestGooglePayPayment } = useGooglePay();

  const handleApplePay = async () => {
    if (!canMakeApplePayPayments) {
      console.log('Apple Pay is not supported on this device.');
      return;
    }

    try {
      const paymentData = await requestApplePayPayment({
        merchantIdentifier: 'your_merchant_identifier',
        supportedNetworks: ['visa', 'mastercard', 'amex'],
        countryCode: 'US',
        currencyCode: 'USD',
        paymentSummaryItems: [
          { label: 'Total Amount', amount: '10.00' }, // Replace with your actual total amount
        ],
      });

      // Process the payment data on your server and complete the transaction
      console.log('Apple Pay Payment Data:', paymentData);
    } catch (error) {
      console.log('Apple Pay Error:', error.message);
    }
  };

  const handleGooglePay = async () => {
    if (!canMakeGooglePayPayments) {
      console.log('Google Pay is not supported on this device.');
      return;
    }

    try {
      const paymentData = await requestGooglePayPayment({
        totalPrice: '10.00', // Replace with your actual total amount
        currencyCode: 'USD',
        countryCode: 'US',
        allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
      });

      // Process the payment data on your server and complete the transaction
      console.log('Google Pay Payment Data:', paymentData);
    } catch (error) {
      console.log('Google Pay Error:', error.message);
    }
  };

  return (
    <View>
      {canMakeApplePayPayments && (
        <TouchableOpacity onPress={handleApplePay}>
          <ApplePayButton
            type={ApplePayButtonType.PLAIN}
            style={ApplePayButtonStyle.BLACK}
          />
        </TouchableOpacity>
      )}
      {canMakeGooglePayPayments && (
        <TouchableOpacity onPress={handleGooglePay}>
          <GooglePayButton
            style={{ width: 200, height: 60 }} // Customize button style
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PaymentScreen;
