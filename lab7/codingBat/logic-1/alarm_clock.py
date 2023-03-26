def alarm_clock(day, vacation):
  if(vacation and (day != 0 and day != 6)):
    return "10:00"
  elif(vacation and (day == 0 or day == 6)):
    return "off"
  elif(not vacation and (day != 0 and day != 6)):
    return "7:00"
  elif(not vacation and (day == 0 or day == 6)):
    return "10:00"