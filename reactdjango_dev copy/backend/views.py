from django.shortcuts import render
from rest_framework import generics, status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Student
from .serializers import StudentSerializer, CreateStudentSerializer
from .models import LoginHist
from .serializers import LoginHistSerializer
from .models import Class
from .serializers import ClassSerializer
from .models import Course
from .serializers import CourseSerializer
from .models import Material
from .serializers import MaterialSerializer
from .models import Enrollment
from .serializers import EnrollmentSerializer

import random


@csrf_exempt
def StudentAPI(request, pk=0):
    if request.method == 'GET':  # read
        student = Student.objects.all()
        student_serializer = StudentSerializer(student, many=True)
        # return info to the browser
        return JsonResponse(student_serializer.data, safe=False)
    elif request.method == 'POST':  # create
        student_data = JSONParser().parse(request)
        student_serializer = StudentSerializer(data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Student Added Successfully", safe=False)
        return JsonResponse("Failed To Add Student", safe=False)
    elif request.method == 'DELETE':  # delete
        student = Student.objects.get(student_id=pk)
        student.delete()
        return JsonResponse("Student Was Deleted Successfully", safe=False)


@csrf_exempt
def LoginHistoryAPI(request, pk=0):
    if request.method == 'GET':
        login_history = LoginHist.objects.all()
        login_history_serializer = LoginHistSerializer(
            login_history, many=True)
        return JsonResponse(login_history_serializer.data, safe=False)
    elif request.method == 'DELETE':  # delete
        login_history = LoginHist.objects.get(student_id=pk)
        login_history.delete()
        return JsonResponse("Student's Login History Was Deleted Successfully", safe=False)


@csrf_exempt
def CourseAPI(request, pk=0):
    if request.method == 'GET':  # read
        if pk == 0:
            course = Course.objects.all()
            course_serializer = CourseSerializer(course, many=True)
            # return info to the browser
            return JsonResponse(course_serializer.data, safe=False)
        else:
            course = Course.objects.get(course_id=pk)
            course_serializer = CourseSerializer(course, many=False)
            return JsonResponse(course_serializer.data, safe=False)

    elif request.method == 'POST':  # create
        course_data = JSONParser().parse(request)
        course_serializer = CourseSerializer(data=course_data)
        if course_serializer.is_valid():
            course_serializer.save()
            return JsonResponse("Course Added Successfully", safe=False)
        return JsonResponse("Failed To Add Course", safe=False)
    elif request.method == 'DELETE':  # delete
        course = Course.objects.get(course_code=pk)
        course.delete()
        return JsonResponse("Course Was Deleted Successfully", safe=False)


@csrf_exempt
def ClassAPI(request, pk=0):
    if request.method == 'GET':  # read
        if pk == 0:
            classes = Class.objects.all()
            classes_serializer = ClassSerializer(classes, many=True)
            # return info to the browser
            return JsonResponse(classes_serializer.data, safe=False)
        else:
            classes = Class.objects.filter(class_id=pk)
            classes_serializer = ClassSerializer(classes, many=True)
            return JsonResponse(classes_serializer.data, safe=False)
    elif request.method == 'POST':  # create
        classes_data = JSONParser().parse(request)
        classes_serializer = ClassSerializer(data=classes_data)
        if classes_serializer.is_valid():
            classes_serializer.save()
            return JsonResponse("Class Added Successfully", safe=False)
        return JsonResponse("Failed To Add Class", safe=False)
    elif request.method == 'DELETE':  # delete
        classes = Class.objects.get(course_code=pk)
        classes.delete()
        return JsonResponse("Class Was Deleted Successfully", safe=False)


def MaterialAPI(request, pk=0):
    if request.method == 'GET':  # read
        material = Material.objects.all()
        material_serializer = MaterialSerializer(material, many=True)
        # return info to the browser
        return JsonResponse(material_serializer.data, safe=False)
    elif request.method == 'POST':  # create
        material_data = JSONParser().parse(request)
        material_serializer = MaterialSerializer(data=material_data)
        if material_serializer.is_valid():
            material_serializer.save()
            return JsonResponse("Material Added Successfully", safe=False)
        return JsonResponse("Failed To Add Material", safe=False)
    elif request.method == 'DELETE':  # delete
        material = Material.objects.get(course_code=pk)
        material.delete()
        return JsonResponse("Class Was Deleted Successfully", safe=False)


def EnrollmentAPI(request, pk=0):
    if request.method == 'GET':  # read
        if pk == 0:
            enrollment = Enrollment.objects.all()
            enrollment_serializer = EnrollmentSerializer(enrollment, many=True)
            # return info to the browser
            return JsonResponse(enrollment_serializer.data, safe=False)
        else:
            enrollment = Enrollment.objects.filter(student_id=pk)
            enrollment_serializer = EnrollmentSerializer(enrollment, many=True)
            return JsonResponse(enrollment_serializer.data, safe=False)


class CreateStudentView(APIView):
    serializer_class = CreateStudentSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            student_id = random.randrange(0, 1000, 1)
            name = serializer.data.get("name")
            email = serializer.data.get("email")
            print(request.FILES)
            if len(request.FILES) != 0:
                face_images = request.FILES["face_images"]

            student = Student(student_id=student_id, name=name,
                              email=email, face_images=face_images)
            student.save()

            return Response(StudentSerializer(student).data, status=status.HTTP_201_CREATED)

        else:
            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


def app(request):
    # return HttpResponse('Hello,World')
    return render(request, 'backend/home.html')
