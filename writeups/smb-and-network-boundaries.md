---
layout: default
title: Local SMB Servers and Lateral Movement
permalink: /writeups/smb-and-network-boundaries.html
---

[All writeups]({{ '/writeups.html' | relative_url }})

SMB is commonly used to share files and printers on a local network. A share can be useful, but it also creates a place where permissions and account security matter: people and devices should only have the access they need.

## Think about boundaries

If one device or account is compromised, broad access to other shared resources can make the impact larger. Separate networks, careful share permissions, and individual accounts help limit how far a problem can spread.

## Practical administration

Review which shares are enabled, remove access that is no longer needed, keep systems updated, and monitor relevant security logs. Turn off file sharing where it is not required, especially on networks you do not trust.
