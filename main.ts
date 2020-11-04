input.onButtonPressed(Button.A, function () {
    Start = control.millis()
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    Stop = control.millis()
    Display = Stop - Start
    Display = Display / 1000
    basic.showNumber(Display)
})
let Display = 0
let Stop = 0
let Start = 0
Start = 0
Stop = 0
Display = 0
