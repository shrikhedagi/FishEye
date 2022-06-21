class LightBox 
{
    slides = [];
    currentIndex = 0;

    constructor(slides, index) 
    {
        this.slides = slides;
        this.currentIndex = index;
        this.lightBox = document.querySelector('#lightbox');
        this.loadLightBox();      
    }

    listenForClose()
    {
        document.querySelector('.lightBox__close').addEventListener('click', () =>
        {
            this.lightBox.style.display = "none";
        });
    }

    listenForNext()
    {
        document.querySelector('.lightBox__next-arrow .fa-angle-right').addEventListener('click', () =>
        {
            this.nextMedia();
        });
    }

    listenForPrevious()
    {
        document.querySelector('.lightBox__previous-arrow .fa-angle-left').addEventListener('click', () =>
        {
            this.previousMedia();
      });
    }

    // Launch lightbox
    loadLightBox()
    {
        this.showLightBox();
        this.listenForPrevious();
        this.listenForNext();
        this.listenForClose();
        this.escapeLightBox();
    }

    nextMedia()
    {
        if (this.currentIndex === this.slides.length -1)
        {
            this.currentIndex = 0;
        }else{
            this.currentIndex++;
        }
        this.loadLightBox();
    }

    previousMedia()
    {
        if (this.currentIndex === 0)
        {
            this.currentIndex = this.slides.length -1;
        }else{
            this.currentIndex--;
        }
        this.loadLightBox();
    }

    showLightBox()
    {
        let media = this.slides[this.currentIndex];
        this.lightBox.innerHTML = media.renderLightBox();
        document.querySelector('.fa-times').classList.add('.closeBtn');
        this.lightBox.style.display ="flex";
        document.querySelector('.lightBox__next-arrow .fa-angle-right').focus();
    }

    // Close on Keydown "escape"
    escapeLightBox()
    {
        document.addEventListener('keydown', (event) =>
        {
            if (event.key === "Escape")
            {
                this.lightBox.style.display = "none";
            }
        })
    }
}

export default LightBox;