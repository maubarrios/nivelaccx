basic.forever(function () {
    if (-5 <= input.acceleration(Dimension.X) && input.acceleration(Dimension.X) <= 5) {
        basic.showIcon(IconNames.Yes)
    } else {
        if (-5 < input.acceleration(Dimension.X)) {
            basic.showArrow(ArrowNames.West)
        } else {
            if (input.acceleration(Dimension.X) < 5) {
                basic.showArrow(ArrowNames.East)
            }
        }
    }
})
