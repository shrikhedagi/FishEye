class LightBox 
{
    constructor(slides) 
    {
        this.slides = slides;
        this.currentIndex = 0;
        this.lightBox = document.querySelector('#lightbox');
        this.load();      
    }

    show()
    {
        let mediaSlide = this.slides[this.currentIndex];
        this.lightBox.innerHTML = mediaSlide.renderLightBox();
        document.querySelector('.fa-times').classList.add('closeBtn');
        this.lightBox.style.display ="flex";
    }

     // Lightbox carousel next and previous controls event handling
    listenForMoves()
    {

        let next = document.querySelector('.lightBox__next-arrow .fa-angle-right');
        let previous = document.querySelector('.lightBox__previous-arrow .fa-angle-left');
  
        document.addEventListener("keydown", (event) => 
        {
            if(event.keyCode == 39) 
            {
                this.nextMedia();
                this.show();
            }
        });
  
        document.addEventListener("keydown", (event) => 
        {
            if(event.keyCode == 37) {
                this.previousMedia();
                this.show();
            }
        });

        next.addEventListener('click', () =>
        {
            this.nextMedia();
            this.show();
        });

        previous.addEventListener('click', () =>
        {
            this.previousMedia();
            this.show();
      });
  
    }

    listenForClose()
    {
        document.querySelector('.lightBox__close').addEventListener('click', () =>
        {
            this.lightBox.style.display = "none";
        });
    }

    nextMedia()
    {
        if (this.currentIndex >= this.slides.length -1)
        {
            this.currentIndex = 0;
        }else{
            this.currentIndex++;
        }
        this.load();
    }

    previousMedia()
    {
        if (this.currentIndex <= 0)
        {
            this.currentIndex = this.slides.length -1;
        }else{
            this.currentIndex--;
        }
        this.load();
    }

    // Launch lightbox
    load()
    {
        this.show();
        this.listenForMoves();
        this.listenForClose();
        this.escape();
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