#def display():
 #   print("welcome")
#display()
#x=int(input("enter 1st no. "))
#y=int(input("enter 2nd no. "))
#def add():
#    z=x+y
#    print("Sum =",z)
#add()
#def sub():
   
 #  z=x-y
 #  print("difference=",z)
#sub()
#def multiply():
 #   z=x*y
  #  print("Product=",z)
  #  multiply()
   # def div():
   #     z=x/y
   #     print("division=",z)
   #div()


#def reverse(n):
 #  rev=0
  #  while(n>0):
   #     r=n%10
    #    rev=rev*10+r
     #   n=n//10
    #return rev
#n=int(input("Enter the number "))
#m=reverse(n)
#print(m)

def large(a,b,c):
    if(a>b and a>c):
        return a
    else:
        if(b>c):
            return b
        else:
            if(c>a):
                return c
a=int(input("Enter the number "))
b=int(input("Enter the number "))
c=int(input("Enter the number "))
print(large(a,b,c))    