1) sudo gem install cocoapods
2) в папке ios ввести pod install
3) дальше запускаю npm run ios
4) для андроида - скачать expo client , запустить эекспо web, просканировать qr code, клиент на телефоне запустится автоматически

### debug (https://docs.expo.io/workflow/debugging/)
- iOS Device: Shake the device a little bit, or touch 3 fingers to the screen.
- iOS Simulator: Hit Ctrl-Cmd-Z on a Mac in the emulator to simulate the shake gesture, or press Cmd+D.
- Android Device: Shake the device vertically a little bit, or run adb shell input keyevent 82 in your terminal window if your device is connected via USB.
- Android Emulator: Either hit Cmd+M, or run adb shell input keyevent 82 in your terminal window.
