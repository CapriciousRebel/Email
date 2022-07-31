# IMPORTANT NOTE:

*This app does not work, it only exists as a reference*

Don't use this app to read your emails from Gmail or any other Email Service provider. <br/>
*This app is NOT Secure.* <br/>
**No security measures were implemented**

### Setup:

- clone the repo, and `cd` into it

#### A three step setup for the Minimialists:
1. give permission to execute setup script: `chmod 500 init.sh`
2. execute the script: `./init.sh`
3. open this link: http://localhost:8000/

#### A more comprehensive setup:

- make virtual env                : `python3 -m venv venv`
- activate virtual env            : `source venv/bin/activate`
- update pip                      : `pip install --upgrade pip`
- install the python dependencies : `pip install -r requirements.txt`
- install the node dependencies   : `npm install`
- cd into rebelemail project      : `cd rebelemail`
- start the server                : `python manage.py runserver`
- open this link                  : http://localhost:8000/


### Figma Diagram for the Architecture used:

[Redux by The Rebel](https://www.figma.com/file/uN9eWw4jM8sx3tpgqAljIk/Redux)


