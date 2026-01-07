const platform = (process.env.DEVICE_ID ?? 'android')

export const androidCaps = {
        "platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "Android Device",
        "appium:udid": platform,
        "appium:appPackage": "com.distelsa.maxgt",
        "appium:appActivity": ".MainActivity",
        "appium:noReset": false
}