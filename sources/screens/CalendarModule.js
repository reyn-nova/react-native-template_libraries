import React from 'react'
import {
    ScrollView,
} from 'react-native'

import {
    Calendar,
} from 'react-native-calendars'

import {
    GetDaysState,
} from '../helpers/ReactNativeCalendars'

export default class CalendarModule extends React.Component {
    static navigationOptions = {
        title: "Calendar",
    }

    state = {
        daysArray: [],
        daysObject: {},
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle = {{
                    padding: 20,
                }}
                style = {{
                    backgroundColor: "white",
                    flex: 1,
                }}
            >
                <Calendar
                    markedDates = {this.state.daysObject}
                    markingType = "period"
                    onDayLongPress = {(day) => {console.log('selected day', day)}}
                    onDayPress = {(day) => {
                        let newState = GetDaysState({daysArray: this.state.daysArray, daysObject: this.state.daysObject}, day, "orange")

                        this.setState({
                            daysArray: newState.daysArray,
                            daysObject: newState.daysObject,
                        })
                    }}
                    onMonthChange = {(month) => {console.log('month changed', month)}}
                    onPressArrowLeft = {substractMonth => substractMonth()}
                    onPressArrowRight = {addMonth => addMonth()}
                    theme = {{
                        'stylesheet.day.period': {
                            base: {
                                overflow: 'hidden',
                                height: 34,
                                alignItems: 'center',
                                width: 38,
                            }
                        },
                        calendarBackground: "white",
                        textSectionTitleColor: "gray",
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: "orange",
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: "orange",
                        monthTextColor: "black",
                        indicatorColor: 'blue',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}
                />
            </ScrollView>
        )
    }
}