joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendNumber(10)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(12)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendNumber(11)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
    joystickbit.Vibration_Motor(100)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendNumber(9)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendNumber(8)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(7)
})
joystickbit.initJoystickBit()
radio.setGroup(562)
basic.forever(function () {
	
})
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        radio.sendNumber(0)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        radio.sendNumber(1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendNumber(2)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendNumber(3)
    }
})
