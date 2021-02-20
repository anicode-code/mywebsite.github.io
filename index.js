function display(statements) {
    document.getElementById('message').innerHTML = statements;
}

function abs(number) {
    if(number < 0)
        number*=-1
    return number;
}

function prime(num) {
    c1 = 0;
    for(let i = 1; i <= num; i++)
        if(num%i == 0)
            c1++;
    return c1==2;
}

function prime1(num1_str, num2_str) {
    s = "";
    c = 0;
    num1 = parseInt(num1_str);
    num2 = parseInt(num2_str);
    if(num1 == num2) {
        if(prime(num1))
            display(num1+" is a prime number.");
        else
            display(num1+" is not a prime number.");
    }
    else if(abs(num1-num2) == 1) {
        if(prime(num1)&&prime(num2)) {
            display("Both "+num1+" and "+num2+" are prime numbers.");
        }
        else{
            if(!(prime(num1)||prime(num2))) {
                display("Neither "+num1+" nor "+num2+" is prime.")
            }
            else if(prime(num1)&&!prime(num2)){
                display(num1+" is prime but "+num2+" is not prime.");
            }
            else
                display(num1+" is not prime but "+num2+" is prime.");
        }
    }
    else if(num1 > num2) {
        console.log();
        for(let i = num1; i >= num2; i--) {
            if(prime(i)) {
                c++;
                if(c==1)
                    s+=i;
                else
                    s+=", "+i;
            }
        }
        if(c>0) {
            if(c>1)
                display("Prime numbers between "+num1+" and "+num2+" :\n"+s);
            else
                display("The only prime number between "+num1+" and "+num2+" is "+s);
        }
        else
            display("There is no prime number between "+num1+" and "+num2);
    }
    else {
        for(let i = num1; i <= num2; i++) {
            if(prime(i)) {
                c++;
                if(c==1)
                    s+=i;
                else
                    s+=", "+i;
            }
        }
        if(c>0) {
            if(c>1)
                display("Prime numbers between "+num1+" and "+num2+" :\n"+s);
            else
                display("The only prime number between "+num1+" and "+num2+" is "+s);
        }
        else
            display("There is no prime number between "+num1+" and "+num2);
    }

}

function choice() {
    ch = prompt("Enter 1 to check for a number to be prime.\nEnter 2 to print the prime numbers according to your inputed range.")
    if(ch == 1||ch == 2) {
        if(ch == 1) {
            ch_check_prime = prompt("Enter a number to be checked for being prime :");
            if(prime(ch_check_prime)) 
                display(ch_check_prime+" is a prime number.")
            else
                display(ch_check_prime+" is not a prime number.")
        }
        else {
            ch_range1 = prompt("Enter the first number for the prime numbers range :");
            ch_range2 = prompt("Enter the second number for the prime numbers range :");
            prime1(ch_range1, ch_range2);
        }
    }
    else {
        alert("Please enter 1 or 2 as a choice.");
        choice();
    }
}

choice();
console.log("Total number of prime numbers : "+c)