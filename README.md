# Home Appliance Mall

중고 가전 거래 플랫폼을 위한 초기 UI 프로토타입입니다.

## 프론트엔드 미리보기

`frontend/index.html` 파일을 브라우저로 열면 리액트(UMD) 기반의 메인 페이지 목업을 확인할 수 있습니다.

- 상단 네비게이션과 히어로 배너
- 거래 통계 및 카테고리 그리드
- 인기 상품 카드와 서비스 소개 섹션
- 모바일 앱 홍보 및 푸터 정보

### 로컬 미리보기 방법

간단한 정적 서버를 띄우면 브라우저 환경에서도 JSX 트랜스파일링이 정상적으로 동작합니다.

```bash
python -m http.server 8000 --directory frontend
```

서버가 실행되면 브라우저에서 `http://localhost:8000/index.html`을 열어 UI를 확인할 수 있습니다.

![홈어플라이언스 몰 메인](browser:/invocations/nbexjsll/artifacts/artifacts/home_appliance_mall_landing.png)

추후 백엔드(Spring Boot) 및 PostgreSQL 연동을 위한 기반이 될 예정입니다.

