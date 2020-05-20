#!/bin/bash

# make Virtual Enviroment
python3 -m venv venv
# Activate the Vitual Environment
source venv/bin/activate
# Update pip
pip install --upgrade pip
# install dependencies for backend
pip install requirements.txt
# Install frontend dependencies
npm install
# cd into rebelemail(management folder for the project)
cd rebelemail
# start the server
python manage.oy runserver
# open the project in browser
open http://127.0.0.1:8000/
