<template>
  <div>
    <div class="py-5 section-bubble1">
      <div class="hero is-large">
        <div class="hero-body container">
          <h1 class="title is-0">Our final goal.</h1>
        </div>

        <div class="hero-foot container section">
          <p class="subtitle is-1">
            Letting you create a <strong>cool</strong>,
            <strong>clean</strong> and <strong>easy to manage</strong> blog.
          </p>
        </div>
      </div>
    </div>
    <section class="py-5 section-bubble2">
      <div class="container">
        <Card
          thumbnail="https://i.ibb.co/NC945DG/20200813-003636-0000.png"
          title="Mattia Sinisi"
          author-pic="https://secure.gravatar.com/avatar/b53f8552447f5ef1deefe2d985a5e120"
          username="sinisimattia"
        >
          Sta venendo abbastanza bene!
        </Card>
      </div>
    </section>
    <section class="py-5 section-bubble3">
      <div class="container">
        <Card
          thumbnail="https://i.ibb.co/D98wThr/20200813-003636-0001.png"
          title="Un team dedicato"
        />
      </div>
    </section>
    <section class="py-5 section-bubble4">
      <div class="container">
        <Card title="Loved by bloggers" username="everyone">
          Over 10.000 articles posted <u>every day</u>!
        </Card>
      </div>
    </section>
    <div class="py-5 section-bubble5">
      <div class="hero is-large">
        <div class="hero-body container">
          <h2 class="title is-1">Let's make it together.</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/atoms/Card'

export default {
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
$spacer-height: 20vw;
$section1-bg-color: $white;
$section2-bg-color: $link;
$section3-bg-color: $info;
$section4-bg-color: $dark;
$section5-bg-color: $light;

@mixin bubbles($bubbles-type, $color) {
  @if $bubbles-type == a {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='#{url-friendly-colour($color)}' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
  } @else if $bubbles-type == b {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='#{url-friendly-colour($color)}'/></svg>");
  }
}

@mixin section-bubble-with-colors($bubble-type, $currentcolor, $nextcolor) {
  @extend .section-bubble;
  background-color: $currentcolor;

  &:after {
    background-color: $nextcolor;

    @include bubbles($bubble-type, $currentcolor);
  }
}

@function url-friendly-colour($colour) {
  @return '%23' + str-slice('#{$colour}', 2, -1);
}

section:nth-child(odd) .container > * {
  margin-left: auto;
}

section .container {
  padding: 20px 0;
}

.section-bubble {
  margin-bottom: $spacer-height;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;

    width: 100%;
    height: $spacer-height;
    background-size: 100%;

    transform: translate(0, 100%);
  }
}

.section-bubble1 {
  @include section-bubble-with-colors(
    a,
    $section1-bg-color,
    $section2-bg-color
  );
}

.section-bubble2 {
  @include section-bubble-with-colors(
    b,
    $section2-bg-color,
    $section3-bg-color
  );
}

.section-bubble3 {
  @include section-bubble-with-colors(
    a,
    $section3-bg-color,
    $section4-bg-color
  );
}

.section-bubble4 {
  @include section-bubble-with-colors(
    b,
    $section4-bg-color,
    $section5-bg-color
  );
}

.section-bubble5 {
  background: $section5-bg-color;
}

//$bubbles-a: '<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1185 248"><g fill="#FF8787"><circle cx="76" cy="121.1" r="20"/><circle cx="870" cy="201.1" r="11"/><circle cx="814.5" cy="165.6" r="24.5"/><path d="M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z"/></g></svg>';
//$bubbles-b: '<svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" version="1" viewBox="0 0 1185 248"><path fill="#0012B7" d="M51 200c112 0 87-49 188-59s147 38 220 38 108-22 211-69c102-48 274-9 424 69 38 19 68 37 91 51V0H0v193c15 4 32 7 51 7zm1058-93c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zM371 58a25 25 0 1 1-1 49 25 25 0 0 1 1-49zm-56-22c6 0 11 5 11 11s-5 11-11 11-11-5-11-11 5-11 11-11z"/></svg>';

.section-bubble_type-a {
  @extend .section-bubble;

  &:after {
    //background-image: url('http://localhost:3000/~rinu/rinu/wp-content/themes/siebzehn/static/images/bubbles.svg');
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='red' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
  }
}

.section-bubble_type-b {
  @extend .section-bubble;

  &:after {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='red'/></svg>");
  }
}
</style>
