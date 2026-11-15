---
layout: default
title: Why Session Cookies Defeat MFA
permalink: /writeups/session-cookies.html
---

[All writeups]({{ '/writeups.html' | relative_url }})

Multi-factor authentication helps confirm who is signing in. After that check, a website usually gives the browser a session cookie so it can remember the signed-in state as you move between pages.

## Why the session matters

The cookie represents an already authenticated session. If someone gets access to it, they may be able to use that session without repeating the original password and MFA prompt. MFA is still valuable; it protects the sign-in step, while the session needs protection too.

## Reducing the risk

Websites can limit exposure with secure cookie settings, sensible session lifetimes, and ways to revoke active sessions. Users can help by keeping browsers and devices updated, avoiding untrusted downloads, and signing out of shared devices.
