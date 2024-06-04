/* 공통구간 */


/* 다크모드&화이트모드 */
const modeBtn = document.querySelector('.dark-mode-btn');
modeBtn?.addEventListener('click', function () {
  let body = document.querySelector('body');
  if (body instanceof HTMLBodyElement) {
    body.classList.toggle('changeColor');
  }
})

/* 전체적인 영역별 스크롤 이벤트 */
//스크롤 시 gnb 안에 영역에 알맞은 a태그에 클래스가 붙어서 ::after width 값이 늘어남
function scrollGnb() {
  const gnbA = document.querySelectorAll('.gnb a');
  for (let i = 0; i < gnbA.length; i++) {
    let sectionId = gnbA[i].getAttribute('href');
    if (sectionId != null) {
      let section = document.querySelector(sectionId)
      if (section instanceof HTMLElement) {
        let sectionViewStart: number = section.offsetTop;
        let sectionViewEnd: number = section.offsetHeight + sectionViewStart;
        if (this.window.scrollY >= sectionViewStart && this.window.scrollY < sectionViewEnd) {
          gnbA[i].classList.add('on');
        } else {
          gnbA[i].classList.remove('on');
        }
      }
    }
  }
}

//각 영역으로 스크롤 시 클래스 붙음
function sectionScrollEvent() {
  let section = document.querySelectorAll('section');
  for (let i = 1; i < section.length; i++) {
    let sectionTop = section[i].offsetTop - 500;
    if (window.scrollY >= sectionTop) {
      section[i].classList.add('on');
    }
  }
}
window.addEventListener('scroll', function () {
  scrollGnb();
  sectionScrollEvent();
})

/* 마우스 움직이는거에 따라 이미지 움직임 */
function backMove(event: MouseEvent, backImg: HTMLDivElement) {
  let mouseIntroX = event.x / 50;
  let mouseIntroY = event.y / 50;
  backImg.style.left = -mouseIntroX + 'px';
  backImg.style.top = -mouseIntroY + 'px';
}

/* header */
let trigger = document.querySelector('.trigger');
trigger?.addEventListener('click', function () {
  let gnb = document.querySelector('.gnb');
  if (trigger instanceof Element && gnb instanceof Element) {
    trigger.classList.toggle('on');
    gnb.classList.toggle('on');
  }
})

/* intro */
window.addEventListener('load', function () {
  const introLeft = document.querySelector('.intro-left');
  const introRight = document.querySelector('.intro-right');
  if (introLeft instanceof HTMLDivElement && introRight instanceof HTMLDivElement) {
    //윈도우 로드되면 intro-left에 클래스 붙음
    introLeft.classList.add('on');
    /* intro-right에 클래스 붙음 */
    introRight.classList.add('on');
  }
})
/* 마우스 움직이는거에 따라 배경 도형 움직임 */
const introbg = document.querySelectorAll('.intro-bg');
const intro = document.querySelector('#intro');
introbg.forEach(function (backImg: HTMLDivElement) {
  intro?.addEventListener('mousemove', function (event: MouseEvent) {
    backMove(event, backImg);
  })
})

/* about */
//about 스크롤 이벤트
const about = document.querySelector('#about');
window.addEventListener('scroll', function () {
  if (about instanceof HTMLElement) {
    let aboutTop = about.offsetTop - 200;
    const aboutIcon = document.querySelector('.about .icon-logo-wrap');
    if (window.scrollY >= aboutTop) {
      aboutIcon?.classList.add('on');
    }
  }
})
/* 마우스 움직이는거에 따라 배경 도형 움직임 */
const aboutBg = document.querySelectorAll('.about-bg');
aboutBg.forEach(function (backImg: HTMLDivElement) {
  about?.addEventListener('mousemove', function (event: MouseEvent) {
    backMove(event, backImg);
  })
})

/* 타이핑 효과 */
const typing = ['코', '드', '를', ' ', '요', '리', '하', '는', ' ', '개', '발', '자', ',', ' ', '이', '규', '남', '입', '니', '다', '.'];
//타이핑 효과를 줄 클래스
const typingBox = document.querySelector('.typing');
if (typingBox instanceof Element) {
  typingBox.innerHTML = '';
}
function typingEvent() {
  if (typingBox instanceof Element) {
    let start = 0;
    let interval = setInterval(function () {
      typingBox.innerHTML += typing[start];
      start++
      if (start >= typing.length) {
        clearInterval(interval);
        setTimeout(() => { typingBox.innerHTML = '' }, 1800);
        setTimeout(typingEvent, 2000);
      }
    }, 100)
  }
}
typingEvent();

/* project */
//스크롤내리면 move포지션이 이동함
let project = document.querySelector('.projects');
let projectMove = document.querySelector('.project-move');
const projectContent = document.querySelectorAll('.project-content-wrap');
if (projectMove instanceof HTMLElement && project instanceof HTMLElement) {
  let projectMoveTop = projectMove.offsetTop;
  //섹션의 높이 = 프로젝트 너비 * 프로젝트 개수 - 프로젝트탑값 - 섹션의 패딩탑 + 프로젝트 사이의 간격
  //반응형에선 안되게 함
  if (document.documentElement.offsetWidth >= 1024) {
    let projectHeight = projectMove.offsetWidth * projectContent.length - projectMoveTop - 80 + 200;
    project.style.height = projectHeight + 'px';
    window.addEventListener('scroll', function () {
      if (projectMove instanceof HTMLElement && project instanceof HTMLElement) {
        let projectTop = project.offsetTop;
        let scrollPosition = window.scrollY - projectTop;
        projectMove.style.left = `-${scrollPosition}px`;
      }
    })
  }
}



