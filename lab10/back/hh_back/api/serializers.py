from rest_framework import serializers
from .models import Company, Vacancy
from django.db import models
class CompanySer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=255)
    description = serializers.CharField(default="")
    city = serializers.CharField(max_length=255)
    address = serializers.CharField(default="")
class CompanyModSer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id','name','description','city','address')





class VacancySer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=255)
    description = serializers.CharField(default="")
    salary = serializers.FloatField(default=0)
    # Instead of company itself it will contain id(primary key) of that element, os because of it I've gotten
    # numbers on the front side
    # company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())
    company = CompanySer()
class VacancyModSer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id','name','description','salary','company')