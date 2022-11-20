from django.db import models

class Student(models.Model):
    student_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    face_images = models.ImageField() 

class LoginHist(models.Model):
    login_time = models.DateTimeField(primary_key=True)
    logout_time = models.DateTimeField()
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    time_stayed = models.CharField(max_length=100)

class Course(models.Model):
    course_id = models.AutoField(primary_key=True)
    course_code = models.CharField( max_length=100)
    course_name = models.CharField(max_length=100)
    lecturer = models.CharField(max_length=100)
    information = models.TextField()

class Class(models.Model):
    class_id = models.IntegerField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    date = models.DateField(primary_key=True)
    classroom = models.CharField(max_length=100)
    start_time = models.TimeField()
    duration = models.FloatField()
    message = models.TextField()
    zoom_link = models.CharField(max_length=100)

class Material(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    note_id = models.CharField(primary_key=True, max_length=100)
    note_title = models.CharField(max_length=100)
    note_type = models.CharField(max_length=100)
    note_link = models.CharField(max_length=100)

class Enrollment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)