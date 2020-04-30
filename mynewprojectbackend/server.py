from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)
CORS(app)

dbConnections = {"user": "root", "password": "uday", "host": "localhost", "db": "mydb"}


def database():
  """
  connect to mysql database
  :return: connection
  """
  connection = None
  try:
    connection = mysql.connector.connect(host=dbConnections["host"], database=dbConnections["db"],
                                         user=dbConnections["user"], password=dbConnections["password"])
    if connection.is_connected():
      print("SUCCESSFULLY CONNECTED TO MYSQL DATABASE")
  except Exception as e:
    print("[EXCEPTION]", e)

  return connection


@app.route('/register', methods=["POST"])
def register():
  """
  send form data to server
  :return: query rows if zero else return json form data
  """
  data = request.data
  result = json.loads(data.decode('utf8'))

  print(result)
  conn = database()
  cursor = conn.cursor(buffered=True)

  def handleQuotes(s):
    '''

    :param s: string
    :return: string surrounding '' to be used in where clause or insert statement
    '''
    return '"' + s + '"'

  querycheckuser = '''
  select * from user where email=''' + handleQuotes(
    result["email"]) + '''
  '''
  cursor.execute(querycheckuser)
  data = len(cursor.fetchall())
  print(data)
  if cursor.rowcount >= 1:
    print("register failed")
    return str(data)  # return length of query rows, logic written at front end
  else:
    query = '''
      INSERT INTO USER(firstName,lastName,email,password) VALUES (''' + handleQuotes(
      result["firstName"]) + ''',''' + handleQuotes(result["lastName"]) + ''',''' + handleQuotes(
      result["email"]) + ''',''' + \
            handleQuotes(result["password"]) + ''')
      '''
    print(query)
    cursor.execute(query)

    conn.commit()
    conn.close()
    return result  # return form json data


@app.route('/login', methods=["POST"])
def login():
  '''
  login data send to server for validation
  :return: response
  '''
  data = request.data
  result = json.loads(data.decode('utf8'))

  print(result)
  conn = database()
  cursor = conn.cursor(buffered=True)

  def handleQuotes(quotes):
    return '"' + quotes + '"'

  query = '''
    select * from user where email=''' + handleQuotes(
    result["email1"]) + '''and password=''' + handleQuotes(result["password1"]) + '''
    '''
  print(query)
  cursor.execute(query)
  res = cursor.fetchone()
  print(jsonify(res))
  if cursor.rowcount != 0:
    print("login successfull")

    return jsonify(res)
  return jsonify(res)  # return response


@app.route('/', methods=["GET"])
def getuserdetails():
  '''
  fetch details from db about users
  :return: json response of user details
  '''
  conn = database()
  cursor = conn.cursor(buffered=True)

  query = '''
    select * from user
    '''
  print(query)
  cursor.execute(query)
  res = cursor.fetchall()

  headerquery = '''select column_name from information_schema.columns where table_name='user' and table_schema='mydb'
  order by ordinal_position
  '''
  cursor.execute(headerquery)
  headerresult = cursor.fetchall()
  headerlist = []
  for h in headerresult:   #to make data in a list
    for x in h:
      headerlist.append(x)
  print(headerlist)

  headerjson = []
  print(res)
  for value in res:   #to make data in json format with headers as column names
    dictn = {}
    for j, columnname in enumerate(headerlist):
      dictn[columnname] = value[j]
    headerjson.append(dictn)

  print(headerjson)
  return jsonify(headerjson)


@app.route('/timetable', methods=["GET"])
def timetabledetails():
  '''
  fetch time table details from db
  :return: response in json format
  '''
  conn = database()
  cursor = conn.cursor(buffered=True)

  query = '''
  select * from timetable
  '''
  print(query)
  cursor.execute(query)
  res = cursor.fetchall()
  headerquery = '''select column_name from information_schema.columns where table_name='timetable' and table_schema='mydb'
    order by ordinal_position
    '''
  cursor.execute(headerquery)
  headerresult = cursor.fetchall()
  headerlist = []
  for h in headerresult:  #to make data in a list
    for x in h:
      headerlist.append(x)
  print(headerlist)

  headerjson = []
  for value in res:   #to make data in json format with headers as column names
    dictn = {}
    for j, column in enumerate(headerlist):
      dictn[column] = value[j]
    headerjson.append(dictn)
  print(headerjson)

  return jsonify(headerjson)


if __name__ == "__main__":
  app.run(debug=True, threaded=True)
