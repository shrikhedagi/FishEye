class LightBox 
{
    slides = [];
    currentIndex = 0;

    constructor(slides, index) 
    {
        this.slides = slides;
        this.currentIndex = index;
        this.load();      
    }

    listenForClose()
    {
        document.querySelector('.lightBox__close').addEventListener('click', () =>
        {
            document.querySelector('#lightbox').style.display = "none";
        });
    }

    listenForNext()
    {
        document.querySelector('.lightBox__next-arrow').addEventListener('click', () =>
        {
            this.next;
        });
    }

    listenForPrevious()
    {
        document.querySelector('.lightBox__previous-arrow').addEventListener('click', () =>
        {
            this.previous();
      });
    }

    // Launch lightbox
    load()
    {
        this.showLightBox();
        //this.listenForPrevious();
        //this.listenForNext();
        //this.listenForClose();
        //this.escape();
    }

    next()
    {
        if (this.currentIndex === this.slides.length -1)
        {
            this.currentIndex = 0;
        }else{
            this.currentIndex++;
        }
        this.load();
    }

    previous()
    {
        if (this.currentIndex === this.slides.length -1)
        {
            this.currentIndex = 0;
        }else{
            this.currentIndex--;
        }
        this.load();
    }

    showLightBox()
    {
        let media = this.slides[this.currentIndex];
        document.querySelector("#lightbox").innerHTML = media.renderLightBox();
        document.querySelector('.fa-times').classList.add('.lightbox__close');
        document.querySelector("#lightbox").style.display ="flex";
    }

    escape()
    {
        document.addEventListener('keydown', (event) =>
        {
            if (event.key === "Escape")
            {
                document.querySelector('#lightbox').style.display = "none";
            }
        })
    }
}

export default LightBox;