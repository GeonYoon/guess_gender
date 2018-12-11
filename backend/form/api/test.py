from django.urls import reverse
from rest_framework.reverse import reverse as api_reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model

# User = get_user_model()

class UserAPITestCase(APITestCase): #Unittest
    # specific setup(environment) that you want to have to do your tests
    # def setUp(self):
        # user = User.objects.create(username='gun', email='ssy01013@naver.com')
        # user.set_password('django1234')
        # user.save()
        
    def test_machine_learning(self):
        url = api_reverse('api-form:form')
        data = {
            'about1' : 'C, Java and Android Programmer with a very small knowledge in web development. Amateur Hacker. Engineering student for now. Huge fan of Batman.',
            'about2' : 'Java on being platform independent.'
        }
        response = self.client.post(url, data, format='json')
        # if I do dir(response), I can see all of the attribute that I can do (reverse engineering)
        print("hi")
        print(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
