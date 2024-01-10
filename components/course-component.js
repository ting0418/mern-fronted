import React from "react";
import Image from "next/image";
export default function courseComponent() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">課程列表</h1>
        <div className="row pb-5">
          <div className="card  col-4 ">
            <p className="text-center">基礎網頁課程</p>
            <img src="../data/htmlcssjs.png" alt="css圖片" />
            <p className="p-3">
              <b>課程內容:</b>
              <br />
              在此堂課中，您將會學到最基礎的html及css網頁設計架構，超過80小時的內容，學習HTML,
              CSS,
              JavaScript,，透過9個實作專案豐富作品集，透徹學習網頁開發的知識與技巧!
            </p>
            <button className="btn btn-primary ">點我報名</button>
          </div>
          <div className="card col-4 ">
            <p className="text-center">基礎HTMLCSS網頁課程</p>
          </div>
          <div className="card col-4 ">
            <p className="text-center">基礎HTMLCSS網頁課程</p>
          </div>
        </div>
      </div>
    </>
  );
}
