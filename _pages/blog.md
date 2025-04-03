---
layout: default
permalink: /Opportunities/
title: Opportunities
nav: true
nav_order: 4
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<h2> Opportunities </h2>
  <p>We are continuously looking for talented Master's, Doctoral students, and Postdoctoral researchers, as well as motivated undergraduate researchers/interns. </p>

<h2> Graduate Students </h2>
  <p> We are looking for Doctoral and Master's students with backgrounds in Mechanical, Electronics, Biomedical Engineering, Computer and Material Science, and Physics who are interested in developing the next generation of medical robots, novel actuation/sensing methods, and medical imaging systems.  </p>

  <p>You can apply to the funded positions listed below. Or you can apply with a provocative research idea related to medical robotic systems, and we can explore alternative funding options together. Please send your motivation letter, CV, transcripts, and selected publications via email.   </p>

<h2> Postdoctoral Researchers </h2>
  <p>We welcome postdoctoral researchers who want to deepen their experience in medical robotic research. Currently, we do not have funding for postdoctoral researchers, but we could support them in their fellowship and grant applications. </p>

<h2> Undergraduate Researchers/Interns </h2>
  <p>We welcome undergraduate from METU and other universities in Mechanical, Electronics, Mechatronics, Biomedical Engineering, Computur and Material Science, and Physics departments to join our project. Please send your motivation letter, CV, transcripts, and selected publications via email.   </p>

  <p>Bachelor's students who want to apply Tübitak 2209-A project support on medical robotic systems could contact us with their projects. We do not provide salary/scholarship or accomodation for interns. However, we could support your applications to Tübitak 2247-C  </p>

<h2> Open positions </h2>
  <div class="post">

    <ul class="post-list">

      {% if page.pagination.enabled %}
        {% assign postlist = paginator.posts %}
      {% else %}
        {% assign postlist = site.posts %}
      {% endif %}

      {% for post in postlist %}
        {% if post.external_source == blank %}
          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        {% else %}
          {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
        {% endif %}
        {% assign year = post.date | date: "%Y" %}
        {% assign tags = post.tags | join: "" %}
        {% assign categories = post.categories | join: "" %}

        <li>

        {% if post.thumbnail %}

        <div class="row">
            <div class="col-sm-9">
        {% endif %}
                <h3>
                  {% if post.redirect == blank %}
                    <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                  {% elsif post.redirect contains '://' %}
                    <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
                    <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  {% else %}
                    <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
                  {% endif %}
                </h3>
              <p>{{ post.description }} ( {{ post.funding}} )</p>
              <p class="post-meta"> Announced : {{ post.date | date: '%B %d, %Y' }} </p>
              <p class="post-meta"> Deadline : {{ post.deadline | date: '%B %d, %Y' }}</p>

        {% if post.thumbnail %}
          </div>
            <div class="col-sm-3">
              <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
            </div>
          </div>
        {% endif %}
      </li>
      {% endfor %}
    </ul>

    {% if page.pagination.enabled %}
    {% include pagination.liquid %}
    {% endif %}
  </div>

<h2> Potential Funding Options </h2>
  <p> For Doctoral and Master's students (* for international students) </p>
  <ul>
    <li> 
        <a href="https://tubitak.gov.tr/tr/burslar/lisansustu/egitim-burs-programlari/2210-yurt-ici-yuksek-lisans-burs-programlari">
        Tübitak 2210 MSc Scholarship</a>  </li>
    <li> 
        <a href="https://tubitak.gov.tr/tr/burslar/lisansustu/egitim-burs-programlari/2211-yurt-ici-doktora-burs-programlari">
        Tübitak 2211 National PhD Scholarship</a>  
    <li> 
        <a href="https://tubitak.gov.tr/tr/burslar/lisansustu/uluslararasi-burslar/2216c-tuba-tubitak-ozbekistan-aziz-sancar-arastirma-burs-programi">
        Tübitak 2216C TÜBA-TÜBİTAK Özbekistan Aziz Sancar Research Scholarship Program *</a> 
  </ul> 
  <p> For Postdoctoral resaerchers </p>
  <ul>
    <li> More information will be available </li>
  </ul> 
  <p> For Undergraduates </p>
  <ul>
    <li> 
      <a href="https://tubitak.gov.tr/tr/burslar/lisans-onlisans/burs-programlari/2247-c-stajyer-arastirmaci-burs-programi-star">
      Tübitak 2247-C Star Internship Scholarship</a> 
    <li> 
      <a href="https://tubitak.gov.tr/en/scholarships/lisans-onlisans/destek-programlari/2209-research-project-support-programme-undergraduate-students"> 
      2209-A Undergraduate project support</a> </li>
  </ul> 
