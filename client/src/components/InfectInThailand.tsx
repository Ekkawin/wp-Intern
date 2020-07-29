const data = [
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
  { city: 'กรุงเทพ', number: 10 },
];
export const InfectInThailand = (props) => {
  <table className="table-fixed">
    <thead>
      <tr>
        <th className="w-1/2 px-4 py-2"></th>
        <th className="w-1/4 px-4 py-2">จังหวัด</th>
        <th className="w-1/4 px-4 py-2">ผู้ติดเชื้อ</th>
      </tr>
    </thead>
    <tbody>
      {/* {data.map((data, index)=>{
                    return

                })} */}

      <tr>
        <td className="border px-4 py-2">Intro to CSS</td>
        <td className="border px-4 py-2">Adam</td>
        <td className="border px-4 py-2">858</td>
      </tr>
      <tr className="bg-gray-100">
        <td className="border px-4 py-2">
          A Long and Winding Tour of the History of UI Frameworks and Tools and
          the Impact on Design
        </td>
        <td className="border px-4 py-2">Adam</td>
        <td className="border px-4 py-2">112</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Intro to JavaScript</td>
        <td className="border px-4 py-2">Chris</td>
        <td className="border px-4 py-2">1,280</td>
      </tr>
    </tbody>
  </table>;
};
