a = 21;

b = a * 2;

console.log(b);

/* Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You’ll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.

After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

Finally, check the amount against your bank account balance to see if you can afford it or not.

You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,” as well as a variable for your “bank account balance.”

You should define functions for calculating the tax and for formatting the price with a “$” and rounding to two decimal places.*/

const threshold = 200;
const tax = 0.08;
const phone_price = 99.99;
const acc = 9.9;
 
var bank_balance = 303.9;
var  amount = 0;

function calculatetax(amont)
{
    return amount = amount+tax;
}

function formate(amount)
{
    return ('$'+ amount);
}

while(amount<bank_balance)
    {
        //buy a new phone
        amount = amount + phone_price;

        if(threshold<bank_balance)
            {
                amount=amount+acc;
            }

        amount = amount+calculatetax(amount);

        console.log("you purchase : "+ formate(amount));

        bank_balance=bank_balance-amount;

        if(amount>bank_balance)
            {
                console.log("you can't purchase ")
            }
    }

    