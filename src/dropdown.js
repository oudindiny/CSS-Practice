import React from "react";

const Dropdown = () => {
  return (
    <div className="Dropdown">
      <button className="dropdown-btn">메뉴</button>
      <div className="dropdown-submenu">
        <a>고객 검색</a>
        <a>예약 현황</a>
        <a>후기 현황</a>
        <a>고객 정보 수정</a>
        <a>병원 정보</a>
      </div>
    </div>
  );
};
export default Dropdown;
