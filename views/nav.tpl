<nav class="menu">
  <ul class="tabs">
    <li class="tmenu" id="profile-li"><a \\
%if source == 'intern':
href="#profile"\\
% else:
href="/?activetab=profile"\\
%end
class="tab-profile"><i>B</i>Accueil</a></li>
    <li class="tmenu" id="modalities-li"><a \\
%if source == 'intern':
href="#modalities"\\
% else:
href="/?activetab=modalities"\\
%end
><i>o</i>Modalités d’un Coaching</a></li>
    <li class="tmenu" id="values-li"><a \\
%if source == 'intern':
href="#values"\\
% else:
href="/?activetab=values"\\
%end
><i>p</i>Mes Valeurs</a></li>
    <li class="tmenu" id="aboutme-li"><a \\
%if source == 'intern':
href="#aboutme"\\
% else:
href="/?activetab=aboutme"\\
%end
><i>`</i>Qui suis-je?</a></li>
    <li class="tmenu" id="contact-li"><a \\
%if source == 'intern':
href="#contact"\\
% else:
href="/?activetab=contact"\\
%end
><i>&#x21;</i>Contact</a></li>
  </ul>
  <a class="prev" id="menu-prev" href="#">&#xe073;</a>
  <a class="next" id="menu-next" href="#">&#xe076;</a>
</nav>
