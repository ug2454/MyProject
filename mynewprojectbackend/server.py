from flask import Flask, request
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
    :return:
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


@app.route('/sendData', methods=["POST"])
def hello():
    """
    send form data to server
    :return:
    """
    data = request.data
    result = json.loads(data.decode('utf8'))
    # insert={}
    # for insert in result:
    #     insert["firstName"]=''

    print(result)
    conn = database()
    cursor = conn.cursor(buffered=True)

    def handleQuotes(s):
        return '"' + s + '"'

    query = '''
    INSERT INTO USER(firstName,lastName,email,password) VALUES (''' + handleQuotes(
        result["firstName"]) + ''',''' + handleQuotes(result["lastName"]) + ''',''' + handleQuotes(
        result["email"]) + ''',''' + \
            handleQuotes(result["password"])+''')
    '''
    print(query)
    data=cursor.execute(query)
    conn.commit()
    conn.close()
    return result


if __name__ == "__main__":
    app.run(debug=True, threaded=True)
