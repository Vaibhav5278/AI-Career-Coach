from django.db import models


# ---------------- USER TABLE ----------------
class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, unique=True, null=True)
    password = models.CharField(max_length=200, null=True)
    gender = models.CharField(max_length=200, null=True)
    role = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.username

    class Meta:
        db_table = "users"


# ---------------- TOPIC ----------------
class Topic(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


# ---------------- SUB TOPIC ----------------
class SubTopic(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name




    # ---------------- QUIZ QUESTION ----------------
class QuizQuestion(models.Model):

    subtopic = models.ForeignKey(SubTopic, on_delete=models.CASCADE, null=True, blank=True)

    question = models.CharField(max_length=500)

    option1 = models.CharField(max_length=200)
    option2 = models.CharField(max_length=200)
    option3 = models.CharField(max_length=200)
    option4 = models.CharField(max_length=200)

    correct_answer = models.CharField(max_length=200)

    class Meta:
        db_table = "quiz_questions"   # 🔥 Use existing MySQL table

    def __str__(self):
        return self.question

# ---------------- QUIZ RESULT ----------------
class QuizResult(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    topic = models.CharField(max_length=50)

    score = models.IntegerField()

    total_questions = models.IntegerField()

    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} - {self.topic} - {self.score}"