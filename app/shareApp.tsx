import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Share } from 'react-native';

const ShareApp = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this amazing app: https://example.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('App shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error while sharing:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share This App</Text>
      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShareApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  shareButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
