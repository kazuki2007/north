let 方角 = 0
basic.forever(function () {
    方角 = input.compassHeading()
    if (方角 < 23) {
        basic.showArrow(ArrowNames.North)
    } else if (方角 < 68) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (方角 < 113) {
        basic.showArrow(ArrowNames.West)
    } else if (方角 < 158) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (方角 < 203) {
        basic.showArrow(ArrowNames.South)
    } else if (方角 < 248) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (方角 < 293) {
        basic.showArrow(ArrowNames.East)
    } else if (方角 < 338) {
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
