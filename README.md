# ExampleReactNativeApp

Example Application for React Native

## Process of beginning work on React Native project

1. Navigate to project directory
2. `code .`
3. `npm start`
4. Open Android Studio -> AVD Manager -> Select Device
5. Start up the iOS & Android simulators on Metro Bundler
6. Code!

## Setting Up Expo (for Mac)

Note: Depending on the administrative level, might need to add `sudo` in front of some of these commands

To install the necessary packages:
`npm install -g expo-cli`

To start a fresh new project:
`expo init <Name of Project>`

To run the project (first navigate to project directory):
This command will open the Metro Bundler
`npm start`

Other commands (you can also do all of these commands through the Metro Bundler):

```
npm run android
npm run ios
npm run web
```

## Setting Up Simulator (for Mac)

### iOS Simulator

Simply install Xcode
Note: when first time installing, go to 'Preferences' -> 'Locations' and make sure that you have the latest Command Line Tools
Then you can open simulator through XCode or by running the commands above (it will be automatic for a Mac device)

To open developer menu within the simulator:
⌘ + d
if above does not work:
ctrl + d and then ⌘ + d

### Android Device

Install Android Studio
Configuration requirements: https://docs.expo.dev/workflow/android-studio-emulator/
After installation & configuration are complete, navigate to the Android Studio GUI and select AVD Manager
Then select necessary device

To open developer menu within the simulator:
⌘ + m

## Text Editor (for Mac)

Visual Studio Code Extensions:

```
React Native Tools (Recommended)
React-Native/React/Redux snippets for es6/es7 (Recommended)
Prettier - code formatter (optional)
Material Icon Theme (optional)
```

Then if we have all the above extensions, enable 'Format On Save' Feature in VSCode
