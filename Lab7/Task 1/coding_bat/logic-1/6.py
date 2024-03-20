def alarm_clock(day, vacation):
    if vacation:
        if day == 0 or day == 6:  # Weekend
            return 'off'
        else:  # Weekday
            return '10:00'
    else:
        if day == 0 or day == 6:  # Weekend
            return '10:00'
        else:  # Weekday
            return '7:00'