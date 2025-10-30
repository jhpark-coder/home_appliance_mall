const mockListings = [
  {
    id: 1,
    title: "삼성 무풍 에어컨",
    price: 750000,
    location: "서울 마포구",
    status: "예약중",
    condition: "사용감 적음",
    thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "LG 트롬 세탁기",
    price: 420000,
    location: "경기 성남시",
    status: "판매중",
    condition: "깨끗함",
    thumbnail: "https://images.unsplash.com/photo-1604335399105-a0c28ab1ec1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "쿠쿠 정수기",
    price: 180000,
    location: "부산 해운대구",
    status: "판매완료",
    condition: "6개월 사용",
    thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "발뮤다 더 토스터",
    price: 230000,
    location: "대구 수성구",
    status: "판매중",
    condition: "정상작동",
    thumbnail: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=600&q=80",
  },
];

const stats = [
  { id: 1, label: "등록된 중고가전", value: 1280 },
  { id: 2, label: "오늘의 거래", value: 56 },
  { id: 3, label: "안전거래 완료", value: 874 },
];

const categories = [
  { id: 1, name: "에어컨", icon: "❄️", color: "#eff6ff" },
  { id: 2, name: "세탁기", icon: "🧺", color: "#fef3c7" },
  { id: 3, name: "냉장고", icon: "🥶", color: "#ecfdf5" },
  { id: 4, name: "주방가전", icon: "🍳", color: "#fce7f3" },
  { id: 5, name: "생활가전", icon: "🧹", color: "#f3e8ff" },
];

const NavBar = () => (
  <header className="navbar">
    <div className="logo">Home Appliance Mall</div>
    <nav className="nav-links">
      <a href="#listings">상품 보기</a>
      <a href="#services">거래 가이드</a>
      <a href="#app">모바일 앱</a>
      <button className="cta">가전 올리기</button>
    </nav>
  </header>
);

const HeroSection = () => (
  <section className="hero">
    <div className="hero-text">
      <span className="badge">믿을 수 있는 중고가전 거래</span>
      <h1>
        우리 집 중고가전,<br />
        쉽고 빠르게 판매하세요
      </h1>
      <p>
        전문가 검수와 안심결제 시스템으로 더욱 편리해진 중고가전 거래 플랫폼.
        지금 바로 인기 상품을 만나보세요.
      </p>
      <div className="hero-actions">
        <button className="primary">오늘의 특가 보기</button>
        <button className="secondary">검수 신청하기</button>
      </div>
    </div>
    <div className="hero-card">
      <div className="card-header">
        <span className="status-tag">실시간 문의</span>
        <span className="time">3분 전</span>
      </div>
      <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80" alt="에어컨" />
      <div className="card-body">
        <div>
          <h3>삼성 무풍 에어컨</h3>
          <p className="condition">사용감 적음 · 서울 마포구</p>
        </div>
        <strong>750,000원</strong>
      </div>
    </div>
  </section>
);

const StatsBar = () => (
  <section className="stats">
    {stats.map((item) => (
      <div className="stat" key={item.id}>
        <strong>{item.value.toLocaleString()}</strong>
        <span>{item.label}</span>
      </div>
    ))}
  </section>
);

const Categories = () => (
  <section className="categories" aria-label="카테고리">
    <div className="section-heading">
      <h2>카테고리 둘러보기</h2>
      <a href="#" className="link">
        전체 보기 →
      </a>
    </div>
    <div className="category-grid">
      {categories.map((category) => (
        <button
          key={category.id}
          className="category-card"
          style={{ backgroundColor: category.color }}
        >
          <span className="icon" aria-hidden>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  </section>
);

const ListingCard = ({ listing }) => {
  const statusClass = {
    판매완료: "sold",
    예약중: "reserved",
    판매중: "available",
  }[listing.status];

  return (
    <article className="listing-card">
      <div className="thumbnail">
        <img src={listing.thumbnail} alt={listing.title} loading="lazy" />
        <span className={`status ${statusClass}`}>{listing.status}</span>
      </div>
      <div className="info">
        <h3>{listing.title}</h3>
        <p className="meta">
          <span>{listing.condition}</span>
          <span>·</span>
          <span>{listing.location}</span>
        </p>
        <strong>{listing.price.toLocaleString()}원</strong>
      </div>
      <button className="detail-btn">상세보기</button>
    </article>
  );
};

const ListingsSection = () => (
  <section className="listings" id="listings">
    <div className="section-heading">
      <h2>오늘의 인기 상품</h2>
      <div className="filters">
        <button className="filter active">전체</button>
        <button className="filter">안심거래</button>
        <button className="filter">빠른배송</button>
      </div>
    </div>
    <div className="listing-grid">
      {mockListings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  </section>
);

const ServiceHighlights = () => (
  <section className="services" id="services">
    <div className="section-heading">
      <h2>Home Appliance Mall이 특별한 이유</h2>
    </div>
    <div className="service-grid">
      <article className="service-card">
        <h3>전문가 방문 검수</h3>
        <p>엔지니어가 직접 방문해 상태를 확인하고, 정확한 시세를 안내해드립니다.</p>
      </article>
      <article className="service-card">
        <h3>판매 완료까지 케어</h3>
        <p>상품 등록부터 픽업, 설치까지 모든 과정을 컨시어지가 대신 진행해드립니다.</p>
      </article>
      <article className="service-card">
        <h3>24시간 안전결제</h3>
        <p>에스크로 기반 결제 시스템으로 구매자와 판매자 모두 안심하고 거래하세요.</p>
      </article>
    </div>
  </section>
);

const AppDownload = () => (
  <section className="app-promo" id="app">
    <div className="app-text">
      <h2>앱으로 더 쉽고 빠르게</h2>
      <p>
        실시간 알림으로 구매자 문의를 놓치지 않고, 터치 한 번으로 판매완료 처리까지!
      </p>
      <div className="store-buttons">
        <button>App Store</button>
        <button>Google Play</button>
      </div>
    </div>
    <div className="app-preview" role="presentation">
      <div className="phone-frame">
        <div className="screen">
          <span className="status sold">판매완료</span>
          <h3>LG 트롬 세탁기</h3>
          <p>안심거래 · 오늘 픽업</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-brand">
      <strong>Home Appliance Mall</strong>
      <p>중고가전 거래를 보다 쉽고 안전하게, 홈어플라이언스 몰과 함께하세요.</p>
    </div>
    <div className="footer-links">
      <a href="#">회사소개</a>
      <a href="#">이용약관</a>
      <a href="#">개인정보처리방침</a>
      <a href="#">고객센터</a>
    </div>
    <p className="copyright">© 2025 Home Appliance Mall. All rights reserved.</p>
  </footer>
);

const App = () => (
  <div className="page">
    <NavBar />
    <main>
      <HeroSection />
      <StatsBar />
      <Categories />
      <ListingsSection />
      <ServiceHighlights />
      <AppDownload />
    </main>
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
