from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from assets import views


app_name = 'api'
urlpatterns = [
    path("assets/", views.AssetListView.as_view(), name="own_list"),
    path("assets/<int:pk>/", views.AssetDetailView.as_view(), name="asset_detail"),
]
