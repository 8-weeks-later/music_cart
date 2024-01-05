# 뮤직마켓

<p align="center">
  <img src="https://github.com/8-weeks-later/music_cart/assets/123740296/15fad732-021d-457d-b352-1a867026005a" width="248px" height="442px"/>
</p>

Spotify api를 이용해 최근 30일간 들은 곡을 조회해 즐겨 듣는 노래를 Three.js를 활용하고 영수증으로 표현해보았습니다. 


## 화면
|홈|
|---|
|<img src="https://github.com/8-weeks-later/music_cart/assets/123740296/15fad732-021d-457d-b352-1a867026005a"/> |

|Spotify 로그인|
|---|
|<img src="https://github.com/8-weeks-later/music_cart/assets/123740296/e97eaf2b-c30c-4146-8e61-3aeb3d9bd2da" width="150px"/> <img src="https://github.com/8-weeks-later/music_cart/assets/123740296/45d6c5bc-a16c-4682-8ff2-e259b68eb7ca" width="150px"/>|

|결과|
|---|
|<img src="https://github.com/8-weeks-later/music_cart/assets/123740296/7bda5673-c979-47ca-a08f-5ceb9100b198" width="150px" /> <img src="https://github.com/8-weeks-later/music_cart/assets/123740296/f6ad6f76-4650-4657-815d-3d1cb279abef" width="150px" /> <img src="https://github.com/8-weeks-later/music_cart/assets/123740296/cb262f32-bfb0-4d38-80d5-5c19058f3451" width="150px"/>|

## 프로젝트 목표

- Three.js 먹어보기: 오브젝트와 카메라를 원하는 곳에 위치시키는 것을 배웠습니다. 또 cannon을 이용해 물리 엔진을 구현했습니다.
  
- jwt 토큰 이해: Spotify API 요청 중 access token이 만료되면 refresh token으로 갱신했습니다.
  

## 기술 스택
```json
{
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@react-three/cannon": "^6.6.0",
    "@react-three/drei": "^9.88.17",
    "@react-three/fiber": "^8.15.11",
    "@react-three/gltfjsx": "^4.3.4",
    "@tanstack/react-query": "^5.15.3",
    "three": "^0.158.0"
    "axios": "^1.6.2",
    "next": "14.0.3",
  }
```

## 프로젝트 실행 방법

```bash
npm run dev
```



