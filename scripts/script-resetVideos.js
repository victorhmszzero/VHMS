function resetVideos() {
  slides.forEach((slide, index) => {
    const iframe = slide.querySelector("iframe");
    if (iframe) {
      if (index === currentIndex) {
        iframe.src = iframeUrls[index];
      } else {
        iframe.src = "";
      }
    }
  });
}
