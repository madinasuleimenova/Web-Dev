from django.http import JsonResponse
from django.views import View

from api.models import Company, Vacancy
from api.serializers import CompanySer, CompanyModSer


class Companies(View):
    def get(self,request):
        companies_objs = Company.objects.all()
        serializer = CompanySer(companies_objs, many=True)

        return JsonResponse(serializer.data, safe=False)


class OneCompany(View):
    def get(self,request,pk):
        try:
            company_object = Company.objects.get(id=pk)
            return JsonResponse(CompanyModSer(company_object).data, safe=False)
        except Company.DoesNotExist:
            return JsonResponse({"error": "Company not found"}, status=404)
class GetCompanyVacancies(View):
    def get(self,request,id):
        try:
            company = Company.objects.get(id=id)
            vacancies_obj = Vacancy.objects.filter(company=company)
            vacancies = [vacancy.to_json() for vacancy in vacancies_obj]

            return JsonResponse(vacancies, safe=False)

        except Company.DoesNotExist:
            return JsonResponse({"error": "Company not found"})
        except Vacancy.DoesNotExist:
            return JsonResponse({"error": "Vacancy not found"})

