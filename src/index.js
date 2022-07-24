const { createApp } = Vue;

createApp({
  data() {
    return {
      users: [
        {
          img: "Steve-Vassallo_Thumbnail.jpg",
          about:
            "#120 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Steve Vassallo, General Partner",
          text: "In Episode #120, we explore reinventing a well-established venture capital firm. We’re joined by Steve Vassallo, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.",
        },
        {
          img: "Adam-Nash_thumbnail.jpg",
          about:
            "#121 Foundation Capital: Reinventing a 29 Year Old Venture Capital Firm | Adam Nash, General Partner",
          text: "In Episode #121, we explore reinventing a well-established venture capital firm. We’re joined by Adam Nash, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.",
        },
        {
          img: "Adrian-Aoun_thumbnail.jpg",
          about:
            "#122 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Adrian Aoun, General Partner",
          text: "In Episode #120, we explore reinventing a well-established venture capital firm. We’re joined by Adrian Aoun, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.",
        },
        {
          img: "Andrew-Carter_Thumbnail.jpg",
          about:
            "#123 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Andrew Carter, General Partner",
          text: "In Episode #123, we explore reinventing a well-established venture capital firm. We’re joined by Andrew Carter, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.",
        },
        {
          img: "Michael-Brandt_Thumbnail.jpg",
          about:
            "#124 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Michael Brandt, General Partner",
          text: "In Episode #124, we explore reinventing a well-established venture capital firm. We’re joined by Michael Brandt, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.",
        },
      ],
      contents: [
        {
          title: "Listen Now",
          name: "Outliers Podcast",
          desc: "Every week, I sit down with someone in the Top 1% of their field to decode what they've mastered and what they've learned along the way.",
          btnName: "Explore Episode",
          images: [
            "ds-home-1.jpg",
            "ds-home-11.jpg",
            "ds-home-2.jpg",
            "ds-home-4.jpg",
            "ds-home-3.jpg",
            "ds-home-12.jpg",
          ],
        },
        {
          title: "Subscribe Now",
          name: "Friday 5 Email",
          desc: "Every Friday, I share five things I've been reading, using, and loving—including articles, biohacks, gadgets, and more.",
          btnName: "Subscribe Now",
          images: [
            "ds-home-1.jpg",
            "ds-home-2.jpg",
            "ds-home-3.jpg",
            "ds-home-4.jpg",
            "ds-home-11.jpg",
            "ds-home-12.jpg",
          ],
        },
      ],
      footerMenu: [
        {
          name: "Explorer",
          menu: ["Most Popular", "Most Recent", "Topics & Tags", "Friday Five"],
        },
        {
          name: "Outliers",
          menu: ["Episodes", "Subscribe Now", "About the Show", "Sponsors"],
        },
        {
          name: "Articles",
          menu: ["Show Note", "Transcripts", "Essays", "Snippets"],
        },
        {
          name: "More",
          menu: ["About Daniel", "Business Card", "Newsroom", "Contact"],
        },
      ],
    };
  },
}).mount("#app");

$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.querySelector(".nav-menu");
  document.getElementById("btn-toggle").addEventListener("click", function () {
    navMenu.classList.toggle("d-none");
  });
});
