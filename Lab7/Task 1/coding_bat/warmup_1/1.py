def sleep_in(weekday, vacation):
    if not weekday or vacation:
        return True
    return False

weekday_input = input().strip().lower()
vacation_input = input().strip().lower()

weekday = weekday_input == "true"
vacation = vacation_input == "true"

print(sleep_in(weekday, vacation))
