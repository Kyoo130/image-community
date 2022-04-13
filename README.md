# Image Community Project
---

### 📝 개요

+ 이미지와 함께 게시글을 공유하며, 소통할 수 있는 SNS 커뮤니티 서비스 입니다.

<br/>

### 💻 사용 기술

+ React
+ Firebase
+ redux
+ redux-thunk
+ redux-actions
+ immer
+ moment
+ lodash

<br/>

### 🏚 개발 환경

+ OS : Mac
+ Front-End : React
+ IDE : IntelliJ
+ Platform : PC Web
+ Test Browser : Chrome v.100.0.4896.60
+ Test Device : iPhone 13 Pro

<br/>

### 🔗 배포 URL

+ 현재 개발 중으로 아직 배포 전 입니다.

<br/>

### 💬 구현 기능

+ 회원가입, 로그인 기능 개발
+ 게시글 CRUD 기능 개발
+ 댓글 작성 삭제 기능 개발
+ 댓글 알림 기능 개발
+ Redux 액션, 액션 생성 함수, 리듀서, 미들웨어 코드 개발
+ Redux 스토어 코드 개발
+ Firebase 서버 연결 코드 개발

<br/>

### 📂 프로젝트 구조

```bash
.src
├── App.test.js
├── components
│   ├── Card.js
│   ├── CommentList.js
│   ├── CommentWrite.js
│   ├── Header.js
│   ├── Post.js
│   └── index.js
├── elements
│   ├── Button.js
│   ├── Grid.js
│   ├── Image.js
│   ├── Input.js
│   ├── Spinner.js
│   ├── Text.js
│   └── index.js
├── index.css
├── index.js
├── logo.svg
├── pages
│   ├── Login.js
│   ├── Notification.js
│   ├── PostDetail.js
│   ├── PostList.js
│   ├── PostWrite.js
│   ├── Signup.js
│   └── index.js
├── redux
│   ├── configureStore.js
│   └── modules
│       ├── comment.js
│       ├── image.js
│       ├── post.js
│       └── user.js
├── reportWebVitals.js
├── setupTests.js
└── shared
    ├── App.css
    ├── App.js
    ├── Cookie.js
    ├── InfinityScroll.js
    ├── Permit.js
    ├── Upload.js
    ├── common.js
    └── firebase.js
```
