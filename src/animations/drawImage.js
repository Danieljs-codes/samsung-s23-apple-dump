export const drawImage = (canvas, currentFrame, frameCount) => {
     return new Promise((resolve) => {
          const html = document.documentElement;
          const context = canvas.getContext("2d");

          const img = new Image();
          img.src = currentFrame(2);
          img.onload = function () {
               const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
               const imgWidth = img.width * scale;
               const imgHeight = img.height * scale;
               const x = (canvas.width - imgWidth) / 2;
               const y = (canvas.height - imgHeight) / 2;
               context.clearRect(0, 0, canvas.width, canvas.height);
               context.drawImage(img, x, y, imgWidth, imgHeight);
          };

          const preloadImages = () => {
               for (let i = 2; i < frameCount; i++) {
                    const img = new Image();
                    img.src = currentFrame(i);
               }
          };

          const wrap = canvas.parentNode.parentNode;
          window.addEventListener("scroll", () => {
               const scrollTop = html.scrollTop - wrap.offsetTop;
               const maxScrollTop = wrap.scrollHeight - window.innerHeight;
               const scrollFraction = scrollTop / maxScrollTop;
               const percent = Math.floor(scrollFraction * 100);
               resolve();
               const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
               if (frameIndex > 0) {
                    requestAnimationFrame(() => updateImage(frameIndex + 1));
               }
          });

          const updateImage = (index) => {
               img.src = currentFrame(index);
               img.onload = () => {
                    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
                    const imgWidth = img.width * scale;
                    const imgHeight = img.height * scale;
                    const x = (canvas.width - imgWidth) / 2;
                    const y = (canvas.height - imgHeight) / 2;
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(img, x, y, imgWidth, imgHeight);
               };
          };

          preloadImages();
     });
};
