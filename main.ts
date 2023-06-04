let KPS = 0
input.onGesture(Gesture.Shake, function () {
    KPS = randint(1, 3)
    if (KPS == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (KPS == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . # #
            . # . # #
            . . # . .
            . # . # #
            # . . # #
            `)
    }
})
