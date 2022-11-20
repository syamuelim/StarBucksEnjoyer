#from django.conf.urls import url
from django.urls.resolvers import URLPattern
from backend import views
from backend.views import CreateStudentView
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.app, name='home'),
    path('create-student/', CreateStudentView.as_view()),
    path('student/', views.StudentAPI),
    path('student/<int:pk>/', views.StudentAPI),
    path('login_hist/', views.LoginHistoryAPI),
    path('login_hist/<int:pk>/', views.LoginHistoryAPI),
    path('course/', views.CourseAPI),
    path('course/<pk>/', views.CourseAPI),
    path('class/', views.ClassAPI),
    path('class/<pk>/', views.ClassAPI),
    path('material/', views.MaterialAPI),
    path('material/<pk>/', views.MaterialAPI),
    path('enrollment/', views.EnrollmentAPI),
    path('enrollment/<pk>/', views.EnrollmentAPI),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)