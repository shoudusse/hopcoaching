<section id="contact">
  <div id="map"></div>
  <!-- Contact Info -->
  <div class="contact-info">
    <h3 class="main-heading"><span>Contact</span></h3>
    <ul>
      <li id="contact-name-item">Sorina Dumoulin</li>
      <li id="contact-sites-item">
        <p>Lyon:</p>
        <ul id="sites-list">
          <li>69002 Perrache</li>
          <li>69003 La Guillotière</li>
          <li>69006 Charpennes</li>
          <li>69009 Gorge de Loup</li>
        </ul>
      </li>
      <li class="second-part">Email: <span itemprop="email"><a href="mailto:contact@hop-coaching.com">contact@hop-coaching.com</a></span></li>
      <li>Tel: <span itemprop="telephone">+33 6 63 10 44 41</span></li>
      <li>Site Web: <a href="http://hop-coaching.com"><span itemprop="url">hop-coaching.com</span></a></li>
    </ul>
  </div>
  <!-- /Contact Info -->

  <!-- Contact Form -->
  <div class="contact-form">
    <h3 class="main-heading"><span>Pour toute demande d'information, n'hésitez pas à me contacter.</span></h3>

    <div id="contact-status"></div>
    <form action="/contact" method="post" id="contactform">
      <p>
        <label for="name">Nom</label>
        <input type="text" name="name" id="name" class="input">
      </p>

      <p>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" class="input">
      </p>

      <p>
        <label for="message">Votre Message</label>
        <textarea name="message" id="message" cols="88" rows="6" class="textarea"></textarea>
      </p>

      <p>
        <label for="known">Comment avez vous connu Hop Coaching?</label>
        <select id="known" name="known">
          <option value="Choisir">Choisir</option>
          <option value="Moteur de recherche">Moteur de recherche</option>
          <option value="Réseaux sociaux (Facebook, Twitter ...)">Réseaux sociaux (Facebook, Twitter ...)</option>
          <option value="Press">Presse</option>
          <option value="Bouche à oreille">Bouche à oreille</option>
          <option value="Autre">Autre</option>
        </select>
      </p>
      <div class="g-recaptcha" data-sitekey="6Lddi6kUAAAAAI3o3sqnMESIzAr4iGDn2TkLKDPl"></div>
      <input type="submit" name="submit" value="Envoyer votre message" class="button transition">
    </form>
  </div>
  <!-- /Contact Form -->
</section>
