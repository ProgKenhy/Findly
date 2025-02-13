sudo rm -rf android/ ios/ #Delete Android and ios folders first...
react-native eject
react-native upgrade //rebuilds android/ios folders
react-native link
react-native run-android &2> /dev/null
cd ~/Library/Android/sdk # Change this if it's not where you sdk is.
dir=$(pwd)
cd -
echo "sdk.dir=$dir" > android/local.properties
mkdir android/app/src/main/assets
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
react-native run-android
