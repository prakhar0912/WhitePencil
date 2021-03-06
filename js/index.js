import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import { Cursor } from "./Cursor";
import { Nav } from "./Nav";
import { slidesData } from "./slidesData";
import { Frame } from "./Frame";
import { Video } from "./Video"
import { Preloader } from "./Preloader"


let mobileAndTabletCheck = () => {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

let mobileDevice = mobileAndTabletCheck()

const container = document.getElementById("app");
const cursor = new Cursor(document.querySelector(".cursor"), mobileDevice);

const slides = new Slides(slidesData, {
  onTitleClickStart: () => {
    showcase.titleClickStart()
    frame.hideProj()
    frame.hideLogo()
    cursor.remove()
    // frame.hideNextPrev()
    frame.hideHint()
    videos.hideVideo()
    showcase.inTab = true
  },
  onTitleClickEnd: () => {
    cursor.add()
    frame.showLogo()
    frame.showProj()
    // frame.showNextPrev()
    frame.showHint()
    videos.showVideo()
    showcase.inTab = false
    showcase.titleClickEnd()
  },
});


const frame = new Frame({
  nextSection: (direction, touch) => {
    if (direction === 'down') {
      if (touch) {
        showcase.inTransition = true
        showcase.startMoveToSection(showcase.part, showcase.part + 1)
      }
      else {
        showcase.inTransition = true
        showcase.startMoveToSection(showcase.part, showcase.part + 1)
        cursor.blowUp()
      }
    }
    else if (direction === 'up') {
      if (touch) {
        showcase.endMoveToSection(showcase.part, showcase.part + 1)
      }
      else {
        showcase.endMoveToSection(showcase.part, showcase.part + 1)
        cursor.blowDown()
      }
    }
  },
  prevSection: (direction, touch) => {
    if (direction === 'down') {
      if (touch) {
        showcase.inTransition = true
        showcase.startMoveToSection(showcase.part, showcase.part - 1)
      }
      else {
        showcase.inTransition = true
        showcase.startMoveToSection(showcase.part, showcase.part - 1)
        cursor.blowUp()
      }
    }
    else if (direction === 'up') {
      if (touch) {
        showcase.endMoveToSection(showcase.part, showcase.part - 1)
      }
      else {
        showcase.endMoveToSection(showcase.part, showcase.part - 1)
        cursor.blowDown()
      }
    }
  },
  moveToSection: (index) => {
    showcase.startMoveToSection(showcase.part, index)
  }
}, mobileDevice, slidesData[1].length)

const videos = new Video(slidesData)

const preloader = new Preloader({
  loaded: () => {
    cursor.add()
  }
})

const showcase = new Showcase(slidesData, {
  updatePre: (part, total) => {
    preloader.update(part, total)
  },
  killHint: () => {
    // if (showcase.part === 1) {
    //   cursor.killHint()
    // }
    setTimeout(() => {
      frame.killBlow()
      // cursor.killHint()
    }, 1000)
  },
  cursorRender: () => {
    if (!mobileDevice) {
      cursor.render()
    }
  },
  hideDesc: () => {
    slides.hideDesc()
  },
  onPart3: (spec) => {
    frame.hideHint()
    slides.showPart3(spec)
    frame.showScroll()
  },
  onHidePart3: () => {
    frame.showHint()
    slides.hidePart3()
    frame.hideScroll()
  },
  showTriangle: () => {
    cursor.showTriangle()
  },
  hideTriangle: () => {
    cursor.hideTriangle()
  },
  onActiveIndexChange: (part,activeIndex) => {
    slides.onActiveIndexChange(activeIndex);
    videos.changePartSection(part, activeIndex)
  },
  onIndexChange: index => {
    frame.updateProj(index)
    slides.onMove(index);
  },
  onZoomOutStart: ({ activeIndex }) => {
    // cursor.enter();
    slides.appear();
    videos.hideVideo()
  },
  onClickStart: ({ activeIndex }) => {
    // cursor.enter();
    slides.disperse(activeIndex)
  },
  onClickEnd: ({ activeIndex }) => {
    // cursor.leave();
    slides.disperse(activeIndex)
    showcase.inTab = false
  },
  onZoomOutFinish: ({ activeIndex }) => { },
  onFullscreenStart: ({ activeIndex }) => {
    // cursor.leave();
    slides.disperse(activeIndex);
    videos.showVideo()
  },
  onFullscreenFinish: ({ activeIndex }) => { },
  startTransitionPage: (from, to) => {
    slides.startTransitionParts(from, to)
    videos.hideVideo()
  },
  endTransitionPage: (from, to) => {
    slides.endTransitionParts(from, to)
    videos.showVideo()
  },
  updatePart: (index, section) => {
    nav.updatePart(index)
    frame.updatePart(index)
    cursor.updateHint(index)
    videos.changePartSection(index, section)
  },
  blowUp: () => {
    cursor.blowUp()
  },
  blowDown: () => {
    cursor.blowDown()
  }
});


const nav = new Nav({
  onSectionSelected: (index, spec) => {
    showcase.inTransition = true
    if(spec){
      showcase.startMoveToSection(showcase.part, index, true)
    }
    else{
      showcase.startMoveToSection(showcase.part, index)
    }
  },
  onHidePart3: () => {
    slides.hidePart3()
  },
  scrollToContact: () => {
    slides.scrollToContact()
  }
})

showcase.mount(container);
slides.mount(document.body);
showcase.render();

window.addEventListener("resize", function () {
  showcase.onResize();
  frame.onResize()
});

window.addEventListener("mousemove", function (ev) {
  showcase.onMouseMove(ev);
});


if (mobileDevice) {
  let nice = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${nice}px`);
  window.addEventListener("resize", function () {
    nice = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${nice}px`);
  }, false);
}