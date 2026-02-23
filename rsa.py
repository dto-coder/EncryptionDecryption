#generate prime numbers
def gen_prime():
     primes = []
     for num in range(2,101):
         if all(num%i!=0 for i in range(2,int(num**0.5)+1)):
            primes.append(num)
     return primes

#choosing prime values
import random
p = random.choice(gen_prime())
print('p =', p)
q = random.choice(gen_prime())
print('q =', q)

#generate key values
from math import gcd
n = p*q
print('n =', n)
phi = (p-1)*(q-1)
print('phi =', phi)
e = random.choice([i for i in range(2,phi) if gcd(i,phi)==1])
print('e =', e)
d = pow(e, -1, phi)
print('d =', d)

#encrypt message
def encrypt(message):
    cipher = [pow(ord(char), e, n) for char in message]
    return cipher

#decrypt message
def decrypt(cipher):
    message = [chr(pow(char, d, n)) for char in cipher]
    return ''.join(message)

#private key
private_key = (d, n)
print('Private Key:', private_key)
#public key
public_key = (e, n)
print('Public Key:', public_key)

#testing
message = "Hello RSA!"
print('Original Message:', message)
cipher = encrypt(message)
print('Encrypted Message: ', *cipher, sep='')
decrypted_message = decrypt(cipher)
print('Decrypted Message:', decrypted_message)