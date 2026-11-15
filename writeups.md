---
layout: default
title: Technical Writeups
permalink: /writeups.html
---

[Home]({{ '/' | relative_url }}) · [Work]({{ '/work.html' | relative_url }})

## Notes and explainers

I write about technical topics in plain language. Search by title or subject, or choose a writeup to read more.

<label for="writeup-search">Search writeups</label>
<input id="writeup-search" type="search" placeholder="Try cookies, home networks, or SMB" autocomplete="off" data-search-input>
<p data-result-count aria-live="polite"></p>

<ul data-search-list>
  <li data-search-item>
    <a href="{{ '/writeups/session-cookies.html' | relative_url }}"><strong>Why Session Cookies Defeat MFA</strong></a>
    <p>How a signed-in session works, why it matters after MFA, and ways to protect it.</p>
    <p>Authentication · Web security</p>
  </li>
  <li data-search-item>
    <a href="{{ '/writeups/home-network-phishing.html' | relative_url }}"><strong>Why Home Networks Get Phished, Not Port-Scanned</strong></a>
    <p>Why social engineering is a common risk for home users, and practical steps to reduce it.</p>
    <p>Home networks · Phishing</p>
  </li>
  <li data-search-item>
    <a href="{{ '/writeups/smb-and-network-boundaries.html' | relative_url }}"><strong>Local SMB Servers and Lateral Movement</strong></a>
    <p>How local file sharing can affect nearby systems and what sensible boundaries look like.</p>
    <p>SMB · Networks</p>
  </li>
</ul>
<p data-search-empty hidden>No writeups match that search. Try another title or topic.</p>

<script src="{{ '/js/main.js' | relative_url }}"></script>
