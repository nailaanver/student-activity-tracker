from django.urls import path
from .views import ActivityListView,SummaryView

urlpatterns = [
    path('activities/',ActivityListView.as_view()),
    path('summary/',SummaryView.as_view()),
]