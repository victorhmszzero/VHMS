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

    // biome-ignore lint/complexity/noForEach: <explanation>
  document.querySelectorAll('.video-container').forEach(container => {
    const thumbnail = container.querySelector('.thumbnail');
    const iframe = container.querySelector('.video-url');

    iframe.style.display = 'none'; 
    thumbnail.style.display = 'block'; 
  });

}






function clickVideos() {
  
    // biome-ignore lint/complexity/noForEach: <explanation>
  document.querySelectorAll('.video-container').forEach(container => {
    const thumbnail = container.querySelector('.thumbnail');
    const iframe = container.querySelector('.video-url');

    thumbnail.addEventListener('click', () => {
      thumbnail.style.display = 'none'; 
      iframe.style.display = 'block'; 
    });

    closeButton.addEventListener('click', () => {
      iframe.style.display = 'none';
      thumbnail.style.display = 'block'; 
    });
  });
  
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
  clickVideos();
});
