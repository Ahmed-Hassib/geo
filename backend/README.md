# backend 

in this file you must following this steps to create the environment that help you to run the app
  - open terminal this path and run this command 
    - 'python -m venv venv'
 
  - run this command to activate the environment 
    - 'source venv/Scripts/activate'
 
  - install django by this command 
    - 'pip install django'
 
  - install django rest framework by this command 
    - 'pip install djangorestframework'
  
  - if you use any frontend framework and facing a Cros-Origin Resources Sharing run this command
    - 'pip install django-cors-headers'
    
    - then gro to settings.py locate the MIDDLEWARE list and add the following line to it:
      MIDDLEWARE = [
        \# Other middleware classes...
        'corsheaders.middleware.CorsMiddleware',
        \# Other middleware classes...
      ]
      
      Make sure to place the 'corsheaders.middleware.CorsMiddleware' line after the 'django.middleware.common.CommonMiddleware' entry. 