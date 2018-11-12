#myfile=open("Hello.txt","w")
#myfile.write("ICTA Calicut")
#myfile.close()
#print("File generated")

myfile=open("Hello.txt","r")
s=myfile.read()
print(s)
myfile.close()
