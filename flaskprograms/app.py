from flask import Flask,render_template,request

app=Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/send',methods=['GET','POST'])
def send():
    if(request.method=='POST'):
        getname=request.form['name']
        
        getmail=request.form['email']
        
        getmob=request.form['mobile']
        
        getsub=request.form['sub']
        
        return render_template('result.html',newname=getname,newmail=getmail,newmob=getmob,newsub=getsub)
if(__name__=='__main__'):
    app.run(debug=True)