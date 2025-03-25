# # app.py
# from flask import Flask, render_template

# app = Flask(__name__)

# @app.route("/", methods=["GET"])
# def index():
#     return render_template("index.html")

# @app.route("/calculate", methods=["POST"])
# def calculate():
#     # For now, just return the form; client-side handles RMW_Calc
#     return render_template("index.html")

# if __name__ == "__main__":
#     app.run(debug=True)





# app.py
import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    # For now, just return the form; client-side handles calculations
    return render_template("index.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Use Render's PORT or default to 5000
    app.run(host="0.0.0.0", port=port, debug=True)