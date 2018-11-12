i=int(input("Enter the number "))
n=i
print(i)
r=0
rev=0
while(i>0):
 r=i%10
 rev=(rev*10)+r
 i=i//10
if(n==rev):
    print("palindrome")
else:
    print("not a palindrome")
   

