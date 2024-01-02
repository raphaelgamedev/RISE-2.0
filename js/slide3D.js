/*======================================= slide 3D =======================================*/
class SlideStories
{
    constructor(id)
    {/*propriedade*/
    this.slide3d = document.querySelector(`[data-slide3d="${id}"]`);   
    this.active = 0;
    this.init();
    
    }
    
    /*metodo pra tivar o slide*/
    activeSlide(index)
    {
        this.active = index;
        
        this.items.forEach((item) => item.classList.remove('active'));
        this.items[index].classList.add('active');
        
        this.thumbItems.forEach((item) => item.classList.remove('active'));
        this.thumbItems[index].classList.add('active');

        this.autoSlide();

        
    }

    /*botoes*/

    prev()
    {
        if(this.active > 0)
        {
            this.activeSlide(this.active - 1);
        
        }else{
            this.activeSlide(this.items.length -1);
        }    
    }
    
    next()
    {
        if(this.active < this.items.length -1)
        {
            this.activeSlide(this.active + 1);
        }else{
            this.activeSlide(0)
        }
        
    }

    addNavigation()
    {
        const nextBtn = this.slide3d.querySelector('.slide-next');
        const prevBtn = this.slide3d.querySelector('.slide-prev');
        nextBtn.addEventListener('click', this.next);
        prevBtn.addEventListener('click', this.prev);
    }

    addThumbItems()
    {
        this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
        this.thumbItems = Array.from(this.thumb.children);
    }


    autoSlide()
    {
        clearTimeout(this.timeout);
        this.timeout = setTimeout (this.next, 10000);
    }

    init()
    { 
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.items = this.slide3d.querySelectorAll('.slide-items > *');
        this.thumb =  this.slide3d.querySelector('.slide3d-thumb');
        this.addThumbItems();
        this.activeSlide(0);
        this.addNavigation();
    }

}

new SlideStories('slide3d')
