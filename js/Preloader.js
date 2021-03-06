import gsap from "gsap"

class Preloader{
    constructor(options){
        this.options = options
        this.preloaderContainer = document.querySelector('.preloader')
        this.imgs = this.preloaderContainer.querySelector('div')
        this.line = this.preloaderContainer.querySelector('.loader-line')
        this.showPreloader()
    }

    showPreloader(){
        gsap.to(this.preloaderContainer, {
            opacity: 1, duration: 0.8
        })
    }

    removePreloader(){
        let tl = gsap.timeline()
        tl.to(this.imgs, {
            opacity: 0, scale: 0.4
        })
        tl.to(this.preloaderContainer, {
            opacity: 0, duration: 0.8, delay: 0.6, onComplete: () => {
                gsap.set(this.preloaderContainer, {
                    pointerEvents: 'none',
                    display: 'none'
                })
            }
        })
    }

    update(part, total){
        if(this.loaderAnime){
            this.loaderAnime.kill()
        }
        if(part > 4){
            part = 4
        }
        total = 4
        this.loaderAnime = gsap.to(this.line, {
            width: `${part*100/total}%`, duration: 1.5, ease: 'Power4.out', onComplete: () => {
                if(part === total){
                    console.log('done')
                    this.removePreloader()
                    this.options.loaded()
                }
            }
        })
    }

}

export { Preloader }