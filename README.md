# 🍚 Make Lunch Group!🍚

_래액트 네이티브로 구현한 IOS Todo List 어플리케이션입니다_

![Findicle](/readme-assets/random-lunch-grouping.gif)

## Table of contents

1. [Feature](#feature)
2. [How to use](#how-to-use)
3. [How to run](#how-to-run)
4. [Tech Stack](#tech-stack)
5. [Architecture](#architecture)
6. [New Challenge](#new-challenge)
7. [Logs](#logs)
8. [Comment](#comment)

---

## 📌 Feature

1. 할 일을 추가하거나 삭제할 수 있고 목록을 확인 할 수 있습니다.
2. 완료한 일을 표시 할 수 있습니다.

---

## 🎯 How to use

- **할 일 추가/삭제/완료**
  - 앱 첫 화면 상단에서 할 일을 입력하고 `추가` 버튼을 누르면 할 일을 추가 할 수 있습니다.
  - 빈 입력창에서 `추가` 버튼을 누르면 등록 할 수 없다는 알림메세지가 보입니다.
  - 할 일 오른쪽에 `삭제` 버튼을 누르면 할 일을 삭제 할 수 있습니다.
  - 완료한 일을 눌러서 표시 할 수 있습니다.
- **할 일 목록 확인**
  - 앱을 종료 한 후 다시 실행하여도 등록한 할일 목록을 확인 할 수 있습니다.

---

## 🏃‍♀️ How to run

- **Installation**

  ```
  cd ios
  pods install

  //template
  npm install
  npm run ios

  ```

1. ios 디렉토리에서 pods install을 통해 패키지를 설치합니다.
2. npm install을 통해 패키지를 설치합니다.
3. 터미널에서 `npm run ios` 로 실행을 확인할 수 있습니다.

---

## 💻 Tech Stack

- **Frontend**
  - TypeScript
  - React-native
  - Redux (Reduxjs/toolkit)
  - Redux-thunk
  - Eslint
  - Jest and Enzyme

---

## 😅 Logs

- ### _dispatch 함수와 리액트의 사이클 문제_
  expo와 cli 차이점, typescript any 지우기, saga와 redux-thunk, why await AsyncStorage

---

## 💡 Comment
