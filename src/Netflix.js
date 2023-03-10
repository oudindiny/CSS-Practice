import React, { useState } from "react";

const NetFlix = () => {
  const [state, setState] = useState(false);

  return (
    <div className="Netflix">
      <section className="faq">
        <div className="faq-inner">
          <h1>자주 묻는 질문</h1>
          <div className="accordion">
            <div className="title">
              넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?
            </div>
            <div className="content">
              넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을
              수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다.
              마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수
              있습니다.
            </div>
            <div className="title">넷플릭스란 무엇인가요?</div>
            <div className="content">
              넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션,
              다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의
              디바이스에서 시청할 수 있는 스트리밍 서비스입니다. 저렴한 월
              요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한
              콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.
            </div>
            <div className="title">넷플릭스 요금은 얼마인가요?</div>
            <div className="content">
              스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한
              디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십
              요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나
              약정이 없습니다.
            </div>
            <div className="title">광고형 멤버십은 뭐가 다른가요?</div>
            <div className="content">
              광고형 멤버십은 저렴한 요금으로 영화와 시리즈를 즐길 수 있는
              방법입니다. 제한된 수의 중간 광고와 함께 좋아하는 콘텐츠를
              스트리밍할 수 있습니다(일부 위치 및 디바이스 제한 적용). 저장
              기능은 지원되지 않으며, 라이선스 제한으로 인해 일부 영화와
              시리즈를 이용할 수 없습니다.
            </div>
            <div className="title">어디에서 시청할 수 있나요?</div>
            <div className="content">
              .언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면
              PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어
              있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿,
              스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수
              있습니다. iOS, Android, Windows 10용 앱에서는 좋아하는 시리즈를
              저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에
              연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든
              함께니까요.
            </div>
            <div className="title">멤버십을 해지하려면 어떻게 하나요?</div>
            <div className="content">
              넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요.
              멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지
              수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.
            </div>
          </div>
          <div className="newsletter">
            <p>
              시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
              주소를 입력하세요.
            </p>
            <div>
              <input type="text" placeholder="이메일 주소"></input>
              <button>시작하기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetFlix;
