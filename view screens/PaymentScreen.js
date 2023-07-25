import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const PaymentScreen = () => {
  const [isQRScanning, setIsQRScanning] = useState(false);
  const [scannedQRData, setScannedQRData] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.OS === 'android' && !isReactNativePermissionsAvailable()) {
      console.warn(
        'react-native-permissions is not available on Android. QR scanning may not work properly.'
      );
    }
  }, []);

  const isReactNativePermissionsAvailable = () => {
    try {
      require('react-native-permissions');
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleScanSuccess = (e) => {
    setIsQRScanning(false);
    setScannedQRData(e.data);
  };

  const startQRScanning = () => {
    setIsQRScanning(true);
    setScannedQRData('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Gateway</Text>
      </View>
      {isQRScanning ? (
        <QRCodeScanner
          onRead={handleScanSuccess}
          topViewStyle={styles.qrScannerTopView}
          bottomViewStyle={styles.qrScannerBottomView}
          cameraStyle={styles.qrScannerCamera}
        />
      ) : (
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Payment Gateway</Text>
          {scannedQRData ? (
            <Text style={styles.scannedData}>Scanned Data: {scannedQRData}</Text>
          ) : (
            <TouchableOpacity style={styles.scanButton} onPress={startQRScanning}>
              <Text style={styles.scanButtonText}>Scan QR Code</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  qrScannerTopView: {
    flex: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  qrScannerBottomView: {
    flex: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  qrScannerCamera: {
    height: 400,
    width: 300,
    alignSelf: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scannedData: {
    fontSize: 18,
    marginTop: 20,
  },
  scanButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  scanButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
