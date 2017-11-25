import React from 'react'
import {
  ActionSheetIOS,
  Share,
  Platform
} from 'react-native'

export default {
  showActionSheetWithOptions (config, callback) {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(config, callback);
    }

  },

  showShareActionSheetWithOptions (config, failureCallback, successCallback) {
    const content = {};
    const options = {};
    content.message = config.message;
    if (config.title) {
      content.title = config.title;
      options.dialogTitle = config.title;
    }
    if (config.url) {
      content.url = config.url;
    }
    if (config.excludedActivityTypes) {
      options.excludedActivityTypes = config.excludedActivityTypes;
    }
    if (config.tintColor) {
      options.tintColor = config.tintColor;
    }
    // promise is not called in Android
    // https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80
    Share.share(content, options).then((result) => {
      if (result.action === Share.sharedAction) {
        if (successCallback) {
          successCallback(true, result.activityType);
        }
      }
      else if (result.action === Share.dismissedAction) {
        if (successCallback) {
          successCallback(false);
        }
      }
    }).catch(error => {
      if (failureCallback) {
        failureCallback(error);
      }
    });
  },
}