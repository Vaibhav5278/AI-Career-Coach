from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from users1.models import Topic, QuizQuestion


# ---------------- QUIZ HOME ----------------

def quiz_home(request):

    topics = Topic.objects.all()

    return render(request, "quiz_home.html", {
        "topics": topics
    })


# ---------------- START QUIZ ----------------

def start_quiz(request, topic_name):

    questions = QuizQuestion.objects.filter(
        subtopic__topic__name=topic_name
    )[:20]

    return render(request, "quiz.html", {
        "questions": questions,
        "topic": topic_name
    })


# ---------------- RESULT PAGE ----------------

def result(request):

    return render(request, "result.html")


# users1/views.py
from django.shortcuts import render, get_object_or_404
from .models import Topic, SubTopic, QuizQuestion


def subtopics_view(request, topic_id):
    # Get the topic object or 404
    topic = get_object_or_404(Topic, id=topic_id)

    # Get all subtopics for this topic
    subtopics = SubTopic.objects.filter(topic=topic)

    context = {
        'topic': topic,
        'subtopics': subtopics
    }
    return render(request, 'subtopics.html', context)


from django.shortcuts import render, get_object_or_404
from .models import QuizQuestion, SubTopic

def questions_view(request, subtopic_id):

    subtopic = get_object_or_404(SubTopic, id=subtopic_id)
    questions = QuizQuestion.objects.filter(subtopic=subtopic)

    if request.method == "POST":

        score = 0

        for q in questions:
            selected = request.POST.get(str(q.id))

            if selected == q.correct_answer:
                score += 1

        total = questions.count()

        return render(request, "result.html", {
            "score": score,
            "total": total,
            "subtopic": subtopic
        })

    return render(request, "questions.html", {
        "subtopic": subtopic,
        "questions": questions
    })