export const drawVideo = (canvas, videoSrc) => {
     const html = document.documentElement;
     const context = canvas.getContext("2d");

     const video = document.createElement("video");
     video.src = videoSrc;
     video.crossOrigin = "anonymous";

     let scale, x, y, w, h;

     const updateVideoDimensions = () => {
          scale = Math.max(canvas.width / video.videoWidth, canvas.height / video.videoHeight);
          w = video.videoWidth * scale;
          h = video.videoHeight * scale;
          x = (canvas.width - w) / 2;
          y = (canvas.height - h) / 2;
     };

     video.addEventListener(
          "loadeddata",
          function () {
               video.currentTime = 0;
               updateVideoDimensions();
          },
          false
     );

     window.addEventListener("resize", () => {
          updateVideoDimensions();
     });

     const resizeObserver = new window.ResizeObserver((entries) => {
          for (let entry of entries) {
               if (entry.target === canvas) {
                    updateVideoDimensions();
               }
          }
     });
     resizeObserver.observe(canvas);

     const wrap = canvas.parentNode.parentNode;
     window.addEventListener("scroll", () => {
          const scrollTop = html.scrollTop - wrap.offsetTop;
          const maxScrollTop = wrap.scrollHeight - window.innerHeight;
          const scrollFraction = scrollTop / maxScrollTop;

          video.currentTime = video.duration * scrollFraction;
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(video, x, y, w, h);
     });
};
