n = int(input())
students = [[input(), float(input())] for _ in range(n)]

students.sort(key=lambda x: x[1])

second_lowest_grade = sorted(set([student[1] for student in students]))[1]

second_lowest_students = [student[0] for student in students if student[1] == second_lowest_grade]

second_lowest_students.sort()

for student in second_lowest_students:
    print(student)
