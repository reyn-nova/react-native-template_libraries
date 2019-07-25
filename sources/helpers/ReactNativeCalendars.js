export function GetDaysArray(start, end) {
    let startTime = (new Date(start)).getTime()
    let endTime   = (new Date(end)).getTime()

    let sortedStart = new Date(startTime <= endTime ? start : end)
    let sortedEnd   = new Date(startTime >= endTime ? start : end)

    let daysArray = []

    for(date = sortedStart; date <= sortedEnd; date.setDate(date.getDate() + 1)) {
        daysArray.push(new Date(date))
    }

    return daysArray
}

export function GetDaysState(previousState, newSelectedDay, markInColor) {
    let nextState = {
        daysArray: [],
        daysObject: {},
    }

    if(!(previousState.daysArray.length == 1 && previousState.daysArray[0] == newSelectedDay.dateString)) {
        let daysArrayState = (previousState.daysArray.length == 2 ? [] : previousState.daysArray).concat(newSelectedDay.dateString)

        let daysArray = daysArrayState.length == 2 ?
                            GetDaysArray(daysArrayState[0], daysArrayState[1]).map((v)=>"/" + v.toISOString().slice(0,10)).join("").split("/")
                            :
                            daysArrayState

        let newDaysObject = {}

        for(let i = 0; i < daysArray.length; i++) {
            daysArray.forEach((day, index) => {
                newDaysObject = {
                    ...newDaysObject,
                    [day]: {
                        color: markInColor,
                        endingDay: index == daysArray.length - 1,
                        marked: true,
                        selected: true,
                        startingDay: (daysArrayState.length == 2 && index == 1) || index == 0
                    }
                }
            })
        }

        nextState = {
            daysArray: daysArrayState,
            daysObject: newDaysObject,
        }
    }

    return nextState
}