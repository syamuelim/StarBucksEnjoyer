from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from backend.models import Student
from backend.serializers import StudentSerializer
from backend.models import LoginHist
from backend.serializers import LoginHistSerializer
from backend.models import Class
from backend.serializers import ClassSerializer
from backend.models import Course
from backend.serializers import CourseSerializer
from backend.models import Material
from backend.serializers import MaterialSerializer
from backend.models import Enrollment
from backend.serializers import EnrollmentSerializer

from django.http import HttpResponse


@csrf_exempt
def StudentAPI(request, pk=0):
    if request.method == 'GET': #read
        student = Student.objects.all()
        student_serializer = StudentSerializer(student, many=True)
        return JsonResponse(student_serializer.data, safe=False) #return info to the browser
    elif request.method == 'POST': #create
        student_data = JSONParser().parse(request)
        student_serializer = StudentSerializer(data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Student Added Successfully", safe=False)
        return JsonResponse("Failed To Add Student", safe=False)
    elif request.method == 'DELETE': #delete
        student = Student.objects.get(student_id=pk)
        student.delete()
        return JsonResponse("Student Was Deleted Successfully", safe=False)

@csrf_exempt
def LoginHistoryAPI(request, pk=0):
    if request.method == 'GET':
        login_history = LoginHist.objects.all()
        login_history_serializer = LoginHistSerializer(login_history, many=True)
        return JsonResponse(login_history_serializer.data, safe=False)
    elif request.method == 'DELETE': #delete
        login_history = LoginHist.objects.get(student_id=pk)
        login_history.delete()
        return JsonResponse("Student's Login History Was Deleted Successfully", safe=False)

@csrf_exempt
def CourseAPI(request, pk=0):
   if request.method == 'GET': #read
        course = Course.objects.all()
        course_serializer = CourseSerializer(course, many=True)
        return JsonResponse(course_serializer.data, safe=False) #return info to the browser
   elif request.method == 'POST': #create
        course_data = JSONParser().parse(request)
        course_serializer = CourseSerializer(data=course_data)
        if course_serializer.is_valid():
            course_serializer.save()
            return JsonResponse("Course Added Successfully", safe=False)
        return JsonResponse("Failed To Add Course", safe=False)
   elif request.method == 'DELETE': #delete
        course = Course.objects.get(course_code=pk)
        course.delete()
        return JsonResponse("Course Was Deleted Successfully", safe=False)

@csrf_exempt
def ClassAPI(request, pk=0):
    if request.method == 'GET': #read
        classes = Class.objects.all()
        classes_serializer = ClassSerializer(classes, many=True)
        return JsonResponse(classes_serializer.data, safe=False) #return info to the browser
    elif request.method == 'POST': #create
        classes_data = JSONParser().parse(request)
        classes_serializer = ClassSerializer(data=classes_data)
        if classes_serializer.is_valid():
            classes_serializer.save()
            return JsonResponse("Class Added Successfully", safe=False)
        return JsonResponse("Failed To Add Class", safe=False)
    elif request.method == 'DELETE': #delete
        classes = Class.objects.get(course_code=pk)
        classes.delete()
        return JsonResponse("Class Was Deleted Successfully", safe=False)

@csrf_exempt
def MaterialAPI(request, pk=0):
    if request.method == 'GET': #read
        material = Material.objects.all()
        material_serializer = MaterialSerializer(material, many=True)
        return JsonResponse(material_serializer.data, safe=False) #return info to the browser
    elif request.method == 'POST': #create
        material_data = JSONParser().parse(request)
        material_serializer = MaterialSerializer(data=material_data)
        if material_serializer.is_valid():
            material_serializer.save()
            return JsonResponse("Material Added Successfully", safe=False)
        return JsonResponse("Failed To Add Material", safe=False)
    elif request.method == 'DELETE': #delete
        material = Material.objects.get(course_code=pk)
        material.delete()
        return JsonResponse("Class Was Deleted Successfully", safe=False)

@csrf_exempt
def EnrollmentAPI(request, pk=0):
    if request.method == 'GET': #read
        enrollment = Enrollment.objects.all()
        enrollment_serializer = EnrollmentSerializer(enrollment, many=True)
        return JsonResponse(enrollment_serializer.data, safe=False) #return info to the browser
    elif request.method == 'POST': #create
        enrollment_data = JSONParser().parse(request)
        enrollment_serializer = EnrollmentSerializer(data=enrollment_data)
        if enrollment_serializer.is_valid():
            enrollment_serializer.save()
            return JsonResponse("Enrollment Added Successfully", safe=False)
        return JsonResponse("Failed To Add Enrollment", safe=False)
    elif request.method == 'DELETE': #delete
        enrollment = Enrollment.objects.get(student_id=pk)
        enrollment.delete()
        return JsonResponse("Enrollment Was Deleted Successfully", safe=False)

def app(request):
    # return HttpResponse('Hello,World')
    return render(request, 'backend/home.html')