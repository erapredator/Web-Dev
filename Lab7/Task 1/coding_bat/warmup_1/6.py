def missing_char(str, n):
  for i in range(len(str)):
    if i!= n:
      print(str[i], end="")
  return ""
str = input()
n = int(input())
print(missing_char(str, n))

