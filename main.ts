basic.forever(function () {
    if (-5 <= input.acceleration(Dimension.X) && input.acceleration(Dimension.X) <= 5) {
        basic.showIcon(IconNames.Yes)
    } else if (-5 < input.acceleration(Dimension.X)) {
        basic.clearScreen()
        basic.showArrow(ArrowNames.West)
    } else if (-50 < input.acceleration(Dimension.X)) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . # .
            . # # # #
            . . . # .
            . . . . .
            `)
    } else if (input.acceleration(Dimension.X) < 5) {
        basic.clearScreen()
        basic.showArrow(ArrowNames.East)
    } else if (input.acceleration(Dimension.X) < 50) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # .
            . # . . .
            . . . . .
            `)
    }
})
