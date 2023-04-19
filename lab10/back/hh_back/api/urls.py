from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.Companies.as_view()),
    path('companies/<int:pk>/', views.OneCompany.as_view()),
    path('companies/<int:id>/vacancies/', views.GetCompanyVacancies.as_view()),
    path('vacancies/', views.vacancies),
    path('vacancies/<int:id>/', views.vacancy),
    path('vacancies/top_ten/', views.get_top_ten_vacancies)
]
