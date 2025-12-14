def rozszerzony_euklides(a, b):
    if a == 0:
        return b, 0, 1
    else:
        nwd, x1, y1 = rozszerzony_euklides(b % a, a)
        x = y1 - (b // a) * x1
        y = x1
        return nwd, x, y


def generuj_klucze():
    from random import choice
    liczby_pierwsze = [11, 13, 17, 19, 23, 29, 31]
    p = 0
    q = 0
    while p == q:
        p = choice(liczby_pierwsze)
        q = choice(liczby_pierwsze)
        n = p * q
        m = (p-1)*(q-1)
        e = 3
        d = rozszerzony_euklides(e, m)[1]
        while rozszerzony_euklides(e, m)[0] !=1:
            e += 2
        d = rozszerzony_euklides(e, m)[1] % m
    return (e, n), (d, n)


def szyfrowanie_RSA(tekst, klucz_publiczny):
    e, n = klucz_publiczny
    szyfr = []
    for znak in tekst:
        szyfr.append((ord(znak) ** e) % n)
    return szyfr

def odszyfrowywanie_RSA(szyfrogram, klucz_prywatny):
    d, n = klucz_prywatny
    tekst = ""
    for kod in szyfrogram:
        tekst += chr((kod**d) % n)
    return tekst

return (e, n), (d, n)
klucz_publiczny, klucz_prywatny = generuj_klucze()
d, n = klucz_prywatny
e, n = klucz_publiczny

wiadomosc_jawna = "TO JEST TAJNA WIADOMOSC"
zaszyfrowana_wiadomosc = szyfrowanie_RSA(wiadomosc_jawna, klucz_publiczny)

wiadomosc_odszyfrowana = odszyfrowywanie_RSA(zaszyfrowana_wiadomosc, klucz_prywatny)
print(wiadomosc_odszyfrowana)


