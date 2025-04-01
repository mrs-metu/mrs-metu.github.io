---
layout: default
permalink: /Opportunities/
title: Opportunities
nav: true
nav_order: 5
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

<h2> Potential Funding Options </h2>
  <p> For Doctoral and Master's students (* for international students) </p>
  <ul>
    <li> Tübitak 2210 MSc Scholarship </li>
    <li> Tübitak 2211 National PhD Scholarship 
    <li> Tübitak 2216C TÜBA-TÜBİTAK Özbekistan Aziz Sancar Research Scholarship Program *
  </ul> 
  <p> For Postdoctoral resaerchers </p>
  <ul>
    <li> More information will be available </li>
  </ul> 
  <p> For Undergraduates </p>
  <ul>
    <li> Tübitak 2247-C Star Internship Scholarship
    <li> 2209-A Undergraduate project support </li>
  </ul> 

<h2> Open positions </h2>
  <div class="post">

    {% assign featured_posts = site.posts | where: "featured", "true" %}
    {% if featured_posts.size > 0 %}
      <br>
      <div class="container featured-posts">
        {% assign is_even = featured_posts.size | modulo: 2 %}
        <div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
          {% for post in featured_posts %}
          <div class="col mb-4">
            <a href="{{ post.url | relative_url }}">
            <div class="card hoverable">
              <div class="row g-0">
                <div class="col-md-12">
                  <div class="card-body">
                    <div class="float-right">
                      <i class="fa-solid fa-thumbtack fa-xs"></i>
                    </div>
                    <h3 class="card-title text-lowercase">{{ post.title }}</h3>
                    <p class="card-text">{{ post.description }}</p>

                          {% if post.external_source == blank %}
                            {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                          {% else %}
                            {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                          {% endif %}
                          {% assign year = post.date | date: "%Y" %}

                          <p class="post-meta">
                            {{ read_time }} min read &nbsp; &middot; &nbsp;
                            <a href="{{ year | prepend: '/blog/' | relative_url }}">
                              <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            {% endfor %}
            </div>
          </div>
          <hr>
    {% endif %}

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
          <p>{{ post.description }}</p>
          <p class="post-meta">
            {{ read_time }} min read &nbsp; &middot; &nbsp;
            {{ post.date | date: '%B %d, %Y' }}
            {% if post.external_source %}
            &nbsp; &middot; &nbsp; {{ post.external_source }}
            {% endif %}
          </p>
          <p class="post-tags">
            <a href="{{ year | prepend: '/blog/' | relative_url }}">
              <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>

              {% if tags != "" %}
              &nbsp; &middot; &nbsp;
                {% for tag in post.tags %}
                <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
                  <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</a>
                  {% unless forloop.last %}
                    &nbsp;
                  {% endunless %}
                  {% endfor %}
              {% endif %}

              {% if categories != "" %}
              &nbsp; &middot; &nbsp;
                {% for category in post.categories %}
                <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
                  <i class="fa-solid fa-tag fa-sm"></i> {{ category }}</a>
                  {% unless forloop.last %}
                    &nbsp;
                  {% endunless %}
                  {% endfor %}
              {% endif %}
        </p>

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


