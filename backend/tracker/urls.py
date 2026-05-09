from django.urls import path
from .views import ActivityDeleteView, ActivityListView,SummaryView

urlpatterns = [
    path('activities/',ActivityListView.as_view()),
    path('summary/',SummaryView.as_view()),
    path('activities/<int:pk>/', ActivityDeleteView.as_view()),
]