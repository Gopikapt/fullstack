a=int(input("Enter the number"))
n=a
r=0
def rev():
    rev=0
    while(a>0):
        r=a%10
        rev=rev*10+r
        a=a//10
    return rev
    if (n==rev):
        print("Palindrome")
    else:
        print("Not a Palindrome")     
