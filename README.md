
![logo](logo.png)

## ne-native-rc
网易金融前端`基于react-native的组件`

## 功能
- react-native主流组件
- 基于react-native-cli开发

## 前提
- react > 16.0.0
- react-native > 0.50.0
- xcode 9
- ios version >= 10

## 安装
npm install ne-native-rc

## 示例

## 使用方法
待完善，可参考web端组件[https://github.com/NE-LOAD-FED/NE-Component](https://github.com/NE-LOAD-FED/NE-Component)

## 模拟器运行
```bash
git clone https://github.com/NE-LOAN-FED/NE-Native-Component 
cd NE-Native-Component && npm install
npm run ios
```

## 注意
- 目前仅对ios模拟器和客户端进行支持
- 如果需要编译到ios手机上，需要在Xcode-Build Settings中设置成自己的Signing
- 打包ipa，需要将Product->Scheme->Edit Schema中，切换Buid Configuration 为 Release ,开发模式下仍保持Debug

>>>>>>> develop
