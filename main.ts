input.onButtonPressed(Button.A, function () {
    radio.sendString("up")
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Up)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("down")
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
})
Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
radio.setGroup(255)
