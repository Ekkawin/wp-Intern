import Head from 'next/head';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
const Navbar = styled.div`
  padding-left: 3em;
  padding-right: 3em;
  background-color: #353538;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
`;
const imagebackground = css`
  position: absolute;
  top: 20px;
`;

const BodyOne = styled.div`
  position: relative;
  background-color: #353538;
  height: 40%;
  overflow: hidden;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 10%;
  z-index: -2;
`;

export default function Home() {
  return (
    <div className="h-full bg-transparent">
      <Navbar>
        <img src="/images/workpointnews.svg" />
        <div className="flex justify-between w-7/12">
          <div className="flex-none py-7 px-4 navbar"> ประเทศไทย</div>
          <div className="flex-none py-7 px-4 navbar">ตัวเลือก</div>
          <div className="flex-none py-7 px-4 navbar">โรงพยาบาล</div>
          <div className="flex-none py-7 px-4 navbar">ความรู้สู้ COVID-19</div>
          <div className="flex-none py-7 px-4 navbar">ความคืบหน้่าล่าสุด</div>
          <div className="flex-none py-7 px-4 navbar">FAQ</div>
        </div>
        <div>อัพเดตล่าสุด</div>
      </Navbar>
      <BodyOne>
        {/* <ReactLogo /> */}
        <div className="flex">
          <div className="flex-col items-center w-5/12">
            <div className="text-white text-4xl">ยืนยันตัวเลขผู้ติดเชื้อ</div>
            <div>COVID-19</div>
            <div>ทั้งหมดในประเทศไทย</div>
          </div>
          <div>กล่องๆๆๆๆ</div>
        </div>
        <img className="imagebackground" src="/images/th.svg" width="30%" />
      </BodyOne>
      <div className="bg-black h-32"></div>
    </div>
  );
}
