<html dir="ltr" lang="en-US" xmlns="http://www.w3.org/1999/xhtml" class="csstransforms csstransforms3d csstransitions">
  <head>
  % include('head.tpl', title=title)
  </head>
  <body>
  <!-- Container -->
  <section id="container">
    <!-- Header -->
    % include('header.tpl')
    <!-- /Header -->

    <!-- Content -->
    <section id="content">

     	<!-- Menu -->
      % include('nav.tpl')
      <!-- /Menu -->

    {{ !base }}

 </section>
    <!-- /Content -->

    <!-- Footer -->
    % include('footer.tpl')
    <!-- /Footer -->

  </section>
  <!-- /Container -->
</body>
</html>