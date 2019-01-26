import pdb
from bs4 import BeautifulSoup
import requests
import json

url = "https://medium.com/@yegg/mental-models-i-find-repeatedly-useful-936f1cc405d"

r = requests.get(url)


soup = BeautifulSoup(r.content, 'html.parser')

titles = soup.find_all('a', class_="markup--anchor markup--li-anchor")

l = list(map(lambda t: t.string,titles))
# print(l)

descriptions = soup.find_all('li', class_="graf graf--li graf-after--h4")

# d= list(map(lambda t: t.text, descriptions))

# print(descriptions[0].find_all('a')[0].get('href'))

# pairs = {de.split("\u200a", 1)[0]:de.split("\u200a", 1)[1] for de in d}

pss = []
for des in descriptions:
    # print(des)
    t = des.text
    name = t.split("\u200a", 1)[0]
    description = t.split("\u200a", 1)[1]
    hr = des.find_all('a')[0].get('href') if des.find_all('a') else ""
    print("hrrrrrrrrrrrrr", hr)
    pss.append({
        "name": name,
        "description": description[1:],
        "links": hr
    })

# ps = []
# for key in pairs.keys():
#     ps.append({
#         "name": key,
#         "description": pairs[key]
#     })

print(json.dumps(pss))
with open('pairs.json', 'w') as f:
    f.write(json.dumps(pss))
# with open('oas.html', 'wb') as f:
#     f.write(str([t.text for t in titles][:5]).encode('utf-8'))

# pdb.set_trace()
