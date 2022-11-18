from rest_framework import fields, serializers
from backend.models import Student
from backend.models import LoginHist
from backend.models import Class
from backend.models import Course
from backend.models import Material
from backend.models import Enrollment

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('student_id',
                  'name',
                  'email',
                  'face_images')

class LoginHistSerializer(serializers.ModelSerializer):
    class Meta: 
        model = LoginHist
        fields = ('login_time',
                  'logout_time',
                  'student_id',
                  'time_stayed')

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('course_code',
                  'course_name',
                  'lecturer',
                  'information',)

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ('course_id',
                  'date',
                  'classroom',
                  'start_time',
                  'duration',
                  'message',
                  'zoom_link')

class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = ('course_id',
                 'note_id',
                 'note_title',
                 'note_type',
                 'note_link')

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = ('student_id',
                  'course_id',)
