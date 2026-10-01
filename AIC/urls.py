"""
URL configuration for AIC project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
path('', include('users1.urls')),
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('entry_resume/', views.entry_resume, name='entry_resume'),
    path("resume_preview/", views.resume_preview, name="resume_preview"),
    path('choose_template/', views.choose_template, name='choose_template'),
    path('download-resume-pdf/', views.download_resume_pdf, name='download_resume_pdf'),
    path('download-resume-docx/', views.download_resume_docx, name='download_resume_docx'),
    path('entry_cv/', views.entry_cv, name='entry_cv'),

path('cover_preview/', views.cover_preview, name='cover_preview'),
    path('download_cover_pdf/', views.download_cover_pdf, name='download_cover_pdf'),
    path('download_cover_docx/', views.download_cover_docx, name='download_cover_docx'),
    path('learning_path/', views.learning_path, name='learning_path'),
    path("generate-summary/", views.generate_summary, name="generate_summary"),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
path("generate-education/", views.generate_education),
path("generate-skills/", views.generate_skills),
path("generate-project/", views.generate_project),
path("generate-work/", views.generate_work),

    path('quiz/', views.quiz_home, name='quiz_home'),

    path('quiz/<str:topic_name>/', views.start_quiz, name='start_quiz'),

    path('result/', views.result, name='result'),









]