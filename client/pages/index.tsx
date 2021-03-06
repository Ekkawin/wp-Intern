import React, { useState } from 'react';
import { Table, Progress, Spin, Space, Button } from 'antd';
import {
  LineStatistic,
  AreaStatistic,
  SimpleBarChart,
  SimplePieChart,
} from 'components/graphs';

import Head from 'next/head';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
const leadToContent = (contentname) => {
  console.log(contentname);

  let attr = document.getElementById(contentname);
  console.log(attr);
};
const Navbar = styled.div`
  padding-left: 3em;
  padding-right: 3em;
  background-color: #353538;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const BodyOne = styled.div`
  position: relative;
  background-color: #353538;
  overflow: hidden;
  padding: 100px 20px;
  z-index: -2;
`;
const Date = styled.div`
  color: white;
  font-size: 1.25rem;
  position: absolute;
  top: -50px;
  right: 0;
`;
const PlainText = styled.div<{ color: string; size: string }>`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.size || '1rem'};
  display: flex;
  justify-content: center;
`;
const BodyTwo = styled.div`
  display: flex;
  height: 100%;
`;
const TableOfInfect = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfectInThailand = styled.div`
  display: flex;
  height: 100%;
  width: 260px;
`;

export default function Home() {
  const [data, setData] = useState([
    {
      key: '1',
      no: '1',
      city: 'bkk',
      infectnum: '2',
    },
    {
      key: '2',
      no: '2',
      city: 'phu',
      infectnum: '3',
    },
    {
      key: '3',
      no: '3',
      city: 'yo',
      infectnum: '5',
    },
  ]);

  return (
    <>
      <Navbar>
        <img src="/images/workpointnews.svg" />
        <div className="flex justify-between w-7/12">
          <div className="flex-none py-7 px-4 navbar"> ประเทศไทย</div>
          <a className="flex-none py-7 px-4 navbar" href="#World">
            ตัวเลือก
          </a>
          <div className="flex-none py-7 px-4 navbar">โรงพยาบาล</div>
          <div className="flex-none py-7 px-4 navbar">ความรู้สู้ COVID-19</div>
          <div className="flex-none py-7 px-4 navbar">ความคืบหน้่าล่าสุด</div>
          <div className="flex-none py-7 px-4 navbar">FAQ</div>
        </div>
        <div>อัพเดตล่าสุด</div>
      </Navbar>
      <div id="Thailand">
        <BodyOne>
          {/* <ReactLogo /> */}
          <div className="flex justify-center">
            <div className="flex-col justify-end items-center w-1/3">
              {/* <div className="flex justify-center text-4xl text-white">
              ยืนยันตัวเลขผู้ติดเชื้อ
            </div> */}
              <PlainText color="white" size="3rem">
                ยืนยันตัวเลขผู้ติดเชื้อ
              </PlainText>

              <PlainText color="#EA5771" size="5rem">
                COVID-19
              </PlainText>

              <PlainText color="white" size="2.5rem">
                ทั้งหมดในประเทศไทย
              </PlainText>
            </div>
            <div className="flex-col w-1/3 relative">
              {/* <div className="flex justify-end text-white text-xl mb-4">
              วันที่ 22 กรกฎาคม 2563
            </div> */}
              <Date>วันที่ 23 กรกฎาคม 2563</Date>
              <div className="h-48 bg-pink-500 rounded-lg"></div>
              <div className="flex w-full h-48 justify-between mt-4">
                <div className="bg-yellow-500 w-full mr-4 rounded-lg"></div>

                <div className="bg-green-500 w-full rounded-lg"></div>

                <div className="bg-red-500 w-full ml-4 rounded-lg"></div>
              </div>
            </div>
          </div>
          <img className="imagebackground" src="/images/th.svg" width="400px" />
        </BodyOne>
        <BodyTwo>
          <InfectInThailand></InfectInThailand>
          <div className="w-full">
            <img src="images/thailand.svg" width={260} />
          </div>
          <div className="flex-col h-full w-full">
            <div className="flex items-center justify-center">
              <SimplePieChart />
              <div className="flex-col">
                <div className="flex">
                  <div className="bg-black w-2 h-2"></div>
                  <div>ชาย</div>
                </div>
              </div>
            </div>
            <SimpleBarChart />
          </div>
        </BodyTwo>

        <div className="flex-col w-full justify-center">
          <div className="flex-1">
            <div>แนวโน้มผู้ติดดชื้อทั้งหมดในประเทศ</div>
            <div className="flex-1 flex justify-center">
              <div>ผู้ติดเชื้อ</div>
              <div>กำลังรักษา</div>
              <div>หายดี</div>
              <div>เสียชีวิต</div>
            </div>
          </div>
          <AreaStatistic />
        </div>
        <div className="flex-col w-full justify-center">
          <div className="flex-1">
            <div>แนวโน้มผู้ติดดชื้อทั้งหมดในประเทศ</div>
            <div className="flex-1 flex justify-center">
              <div>ผู้ติดเชื้อ</div>
              <div>กำลังรักษา</div>
              <div>หายดี</div>
              <div>เสียชีวิต</div>
            </div>
          </div>
          <LineStatistic />
        </div>
      </div>

      <div className="h-64" id="World"></div>
    </>
  );
}
