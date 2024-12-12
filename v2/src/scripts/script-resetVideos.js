function resetVideos() {
  const slides = document.querySelectorAll(".slide");

  // biome-ignore lint/complexity/noForEach: <explanation>
  slides.forEach((slide) => {
    const iframe = slide.querySelector("iframe");
    if (iframe) {
      const src = iframe.src;
      iframe.src = '';
      iframe.src = src;
    }
  });
}
