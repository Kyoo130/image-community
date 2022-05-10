# Image Community

<br/>

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

+ URL: https://image-community-43dff.firebaseapp.com/
+ 테스트 계정
    + `ID`: test@test.com
    + `PassWord`: asdf1234

<br/>

### 💬 구현 기능

+ 회원가입, 로그인 기능 개발
+ 이미지 게시글 CRUD 기능 개발
+ 댓글 작성 삭제 기능 개발
+ 댓글 알림 기능 개발
+ 재사용성을 높인 최소 단위 Element 컴포넌트 개발
+ Redux 액션, 액션 생성 함수, 리듀서, 미들웨어 코드 개발
+ Redux 스토어 코드 개발
+ Firebase 서버 연결 코드 개발

<br/>

### 🛠 구현 화면

| 홈 | 회원가입 | 로그인 & 로그아웃 |
|------|------|------|
| ![home](https://user-images.githubusercontent.com/77729264/167630472-6c8f0239-8630-4ed4-96d6-9e783dbcd000.gif) | ![signup](https://user-images.githubusercontent.com/77729264/167628672-0e07847e-25df-4e60-b787-4e0f89f4d7b1.gif) | ![login_logout](https://user-images.githubusercontent.com/77729264/167628705-38607b7b-0141-4619-9b90-051a511bcbfe.gif) |

| 게시글 작성 | 게시글 수정 | 게시글 삭제 |
|------|------|------|
| ![post](https://user-images.githubusercontent.com/77729264/167630683-a0d14088-2403-492f-a861-bba8f16c9787.gif) | ![post_update](https://user-images.githubusercontent.com/77729264/167629412-85b52af8-075d-4ab9-b37f-1d667f01e00f.gif) |![post_del](https://user-images.githubusercontent.com/77729264/167629428-c24f7bf5-475a-47ca-a777-e270970c4c92.gif)|

| 댓글 작성 | 댓글 삭제 | 댓글 알림 |
|------|------|------|
| ![comment](https://user-images.githubusercontent.com/77729264/167629070-423684d5-1d47-4f39-8cac-d8acf8026c73.gif) | ![comment_del](https://user-images.githubusercontent.com/77729264/167629380-4f99d1f1-90db-4260-bf0c-cb363ac56c5e.gif) | ![noti](https://user-images.githubusercontent.com/77729264/167629095-97ae5546-dcad-48a2-b4ef-4b978511d502.gif) |

<br/>

### 📂 프로젝트 구조

```bash
.src
├── index.css
├── index.js
├── components
│   ├── Card.js
│   ├── CommentList.js
│   ├── CommentWrite.js
│   ├── Header.js
│   ├── NotFound.js
│   ├── NotiBadge.js
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
├── shared
│   ├── App.css
│   ├── App.js
│   ├── Cookie.js
│   ├── InfinityScroll.js
│   ├── Permit.js
│   ├── Search.js
│   ├── Upload.js
│   ├── common.js
└   └── firebase.js
```
