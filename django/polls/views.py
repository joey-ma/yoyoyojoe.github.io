from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic

from django.db.models import F
from .models import Choice, Question

#* Version 2: use Django’s generic views instead
class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'


#! Version 1
# ### Without shortcut
# from django.http import Http404
# from django.http import HttpResponse, HttpResponseRedirect
# from django.template import loader
# from django.urls import reverse

# ### With shortcut: render()
# from django.shortcuts import get_object_or_404, render

# from django.db.models import F
# from .models import Choice, Question

# # Create your views here.

# ###* Hard-coded index view (example for testing only)
# # def index(request):
# #   latest_question_list = Question.objects.order_by('-pub_date')[:5]
# #   output = ', '.join([q.question_text for q in latest_question_list])
# #   return HttpResponse(output)

# ###* Without shortcut: render() (loading the index.html template)
# # def index(request):
# #   latest_question_list = Question.objects.order_by('-pub_date')[:5]
# #   template = loader.get_template('polls/index.html')
# #   context = {
# #       'latest_question_list': latest_question_list,
# #   }
# #   return HttpResponse(template.render(context, request))

# ###* With shortcut (loading the index.html template)
# def index(request):
#   latest_question_list = Question.objects.order_by('-pub_date')[:5]
#   context = {'latest_question_list': latest_question_list}
#   return render(request, 'polls/index.html', context)

# ###* Hard-coded detail view (example for testing only)
# # def detail(request, question_id):
# #   return HttpResponse("You're looking at question %s." % question_id)

# ###* Without shortcut (loading the detail.html template)
# ###* The view raises the Http404 exception if a question with the requested ID doesn’t exist.
# # def detail(request, question_id):
# #   try:
# #     question = Question.objects.get(pk=question_id)
# #   except Question.DoesNotExist:
# #     raise Http404("Question does not exist")
# #   return render(request, 'polls/detail.html', {'question': question})

# ###* With shortcut: render() (loading the detail.html template)
# ###* The get_object_or_404() function takes a Django model as its first argument and an arbitrary number of keyword arguments, which it passes to the get() function of the model’s manager. It raises Http404 if the object doesn’t exist.
# def detail(request, question_id):
#   question = get_object_or_404(Question, pk=question_id)
#   return render(request, 'polls/detail.html', {'question': question})

# ###* Hard-coded results view (example for testing only)
# # def results(request, question_id):
# #   response = "You're looking at the results of question %s."
# #   return HttpResponse(response % question_id)

# ###* Without shortcut (loading the results.html template)
# def results(request, question_id):
#   question = get_object_or_404(Question, pk=question_id)
#   return render(request, 'polls/results.html', {'question': question})

# ###* Hard-coded vote view (example for testing only)
# # def vote(request, question_id):
# #   return HttpResponse("You're voting on question %s." % question_id)

###* Without shortcut (loading the detail.html template)
def vote(request, question_id):
  question = get_object_or_404(Question, pk=question_id)
  try:
    selected_choice = question.choice_set.get(pk=request.POST['choice'])
  except (KeyError, Choice.DoesNotExist):
    # Redisplay the question voting form.
    return render(request, 'polls/detail.html', {
      'question': question,
      'error_message': "You didn't select a choice.",
    })
  else:
    # selected_choice.votes += 1
    selected_choice.votes = F('votes') + 1
    # ? although this looks like a normal Python assignment of value to an instance attribute, it is in fact a SQL construct describing an operation on the database.
    #* F() therefore can offer performance advantages by:
    #* - getting the database, rather than Python, to do work 
    #* - reducing the number of queries some operations requireAnother #* - having the database - rather than Python - update a field’s value avoids a race condition.
    #! If two Python threads execute the code in the first example above, one thread could retrieve, increment, and save a field’s value after the other has retrieved it from the database. The value that the second thread saves will be based on the original value; the work of the first thread will be lost. 
    # If the database is responsible for updating the field, the process is more robust: it will only ever update the field based on the value of the field in the database when the save() or update() is executed, rather than based on its value when the instance was retrieved.

    selected_choice.save()
    # Always return an HttpResponseRedirect after successfully dealing
    # with POST data. This prevents data from being posted twice if a
    # user hits the Back button.
    return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))