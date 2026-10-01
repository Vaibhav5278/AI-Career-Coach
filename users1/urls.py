from django.urls import path
from users1 import views
urlpatterns = [
path('quiz/', views.quiz_home, name='quiz_home'),
path('quiz/<str:topic>/', views.start_quiz, name='start_quiz'),
    path('topic/<int:topic_id>/subtopics/', views.subtopics_view, name='subtopics'),
    path('quiz/<int:subtopic_id>/questions/', views.questions_view, name='questions'),

]