from django.contrib import admin
from .models import Student
from .models import LoginHist
from .models import Class
from .models import Course
from .models import Material

# Register your models here.
models_list = [Student, LoginHist, Class, Course, Material]
admin.site.register(models_list)