import React from 'react';
import WebView from 'react-native-webview';

const NativePackage = () => {
  return <WebView source={{uri: 'https://www.google.com/'}} />;
};

export default NativePackage;
