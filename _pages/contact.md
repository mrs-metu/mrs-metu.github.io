---
layout: page
permalink: /Contact/
title: Contact
description: 
nav: true
nav_order: 5

locations:
- Orta Doğu Teknik Üniversitesi
zoom: 10
---

Contact: Dr. M. Efe Tiryaki\
Email: coming@soon


Mechanical Enginnering\
Middle East Tecnical University\
Ankara,Türkiye


<img src="http://maps.googleapis.com/maps/api/staticmap?{% for location in page.locations %}{% if forloop.first %}center={{location}}&markers=color:blue%7C{{location}}{% else %}&markers=color:blue%7C{{location}}{% endif %}{% endfor %}&zoom={% if page.zoom %}{{page.zoom}}{% else %}13{% endif %}&size=300x200&scale=2&sensor=false&visual_refresh=true" alt="">
