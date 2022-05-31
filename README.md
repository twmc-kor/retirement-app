<div align="center" width="100%">
  <h1>🌸 꽃길레터 🌸</h1>
  <span>이미지를 클릭하면 페이지로 이동합니다 ☻</span>
  <div>
    <a href="https://letter.ggotgil.com">
      <img width="210" alt="스크린샷 2022-05-10 오후 3 33 52" src="https://user-images.githubusercontent.com/58814562/167563622-d009300e-31aa-4261-9590-a8323ae81ffd.png">
    </a>
  </div>
  
  <div align="row">
    <img width="300" alt="전체움짤" src="https://user-images.githubusercontent.com/58814562/167546977-0f5d14d2-429c-44a5-84c1-4a031a3c1040.gif">
    <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
    <img width="300" alt="후기움짤" src="https://user-images.githubusercontent.com/58814562/167548244-74d4ab84-411d-43a8-8cd6-b265426075a8.gif">    
  </div>
</div>
<br />

> 30년 넘는 교직생활을 끝마치시고 은퇴를 하시는 아버지를 위해서 가족들과 지인들이 응원의 편지를 작성할 수 있는 페이지를 만들었습니다.

2021년 12월, `트리꾸미기` 라는 이름의 페이지가 sns에서 입소문을 타고 퍼진 적이 있었습니다.<br />
내 이름을 딴 트리에 친구가 편지를 작성해주면 오너먼트 디자인으로 트리에 달리는 형식의 페이지였습니다.<br />
1년 전부터 아버지의 은퇴식을 기념할 수 있는 페이지에 대해 고민하고 있던 찰나, 기존에 기획했던 프로젝트는 사용성이 떨어질 수 있겠단 판단 하에<br />
`트리꾸미기`를 모티브로 하여 `꽃길레터`를 기획하게 되었습니다.
## 🌼 Project Stack & Tools
- react
- typescript
- react-router-dom
- styled-components
- swiper
- firebase
- slack
- figma
- Google analytics
## 🌼 Problem solving
여러가지 문제들을 해결했던 과정들을 [블로그](https://velog.io/@eassy/%EA%BD%83%EA%B8%B8%EB%A0%88%ED%84%B0-%EC%9E%91%EC%97%85%EA%B8%B0)에 정리해보려 합니다.<br />

## 🌼 Pages
> 간단한 css 작업의 경우, 시간이 널널하지 않은 문제로 디자이너가 이미지로 작업해준 것을 사용했습니다.
### index page
> 링크 진입 시 첫 페이지
<img width="375" alt="스크린샷 2022-05-04 오후 3 15 01" src="https://user-images.githubusercontent.com/58814562/166635498-0ec03252-ccf9-4a56-9af7-bd8dc9566d77.png">

### onBoarding page
> 꽃길레터 사용법을 간단하게 보여주는 페이지<br />
<br />
3초간격으로 자동으로 넘어가는 튜토리얼 형식으로, swiper를 사용하였습니다.<br />
<img width="375" alt="스크린샷 2022-05-04 오후 3 34 08" src="https://user-images.githubusercontent.com/58814562/167546533-0f957847-b5c8-4ee6-b8a5-9033636887a2.gif">

### class-room page
> 전달된 편지의 현황을 보여주는, 교실을 모티브로 한 페이지
- 전달되기까지 남은 시간을 countdown으로 표시하였습니다.
- 사용자가 편지 작성 후 저장하면 선택한 캐릭터와 함께 정렬됩니다.
- 타인이 작성한 편지는 확인할 수 없으며, 클릭 액션이 발생하면 안내모달창을 띄웁니다.
<img width="375" alt="스크린샷 2022-05-10 오후 2 32 27" src="https://user-images.githubusercontent.com/58814562/167552608-f6405fbf-2d76-4580-a38e-98e7647f6ebb.png">

### styling page
> 캐릭터 선택 페이지
<img width="375" alt="스크린샷 2022-05-04 오후 3 34 08" src="https://user-images.githubusercontent.com/58814562/166635711-98c4320b-9a51-4727-8884-b43393f232fa.png">

### message page
> 메세지 작성 페이지
- 메세지와 닉네임을 모두 작성해야 저장이 가능합니다.
- 저장된 닉네임을 체크하여 중복을 방지합니다. 
<img width="375" alt="스크린샷 2022-05-10 오후 2 35 10" src="https://user-images.githubusercontent.com/58814562/167552639-af41ca3d-e6cf-4a3b-a929-95b7b0413956.png">

### loading page
> 메세지 전달 시의 loader 페이지
<img width="375" alt="스크린샷 2022-05-04 오후 3 36 41" src="https://user-images.githubusercontent.com/58814562/166637062-b9a025e0-cd01-4385-91d8-4218b0d7b238.png">

## 🌼 Contributor
🗣 총괄 진행, 서버 구축 ➡️ ethan <br />
🎨 디자이너 ➡️ heather <br />
🎊 프론트엔드 ➡️ eassy
## 🌼 Gained during this project
새로 일을 시작하면서, 기한이 정해져있는 프로젝트를 진행하다보니 엉성하고 부족한 코드가 여전히 많습니다.<br />
급박하게 작업한 프로젝트였지만, 한 서비스의 시작과 끝을 협업을 통해 경험하게 된 시간이었던 것 같습니다.<br />
<br />
이번 프로젝트를 통해 기획과 디자인 영역에 대한 고민을 깊이 하게 되었고 <br />
협업에서는 원하는 바를 정확하게 전달하는 커뮤니케이션 스킬이 가장 중요하다는 것을 깨닫게 된 것 같습니다.<br />
<br />
> 기존의 코드에서 아쉬웠던 부분을 리팩토링 해볼 예정입니다.
