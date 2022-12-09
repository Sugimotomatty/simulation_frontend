import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import StockImg_3 from "../images/stock_img_.jpg";
import oresengraph4 from "../images2/oresen.jpg"
import scatteroresengraph3 from "../images2/scatteroresen.jpg"
import tumitate_bougraph2 from "../images2/tumitate_bou.jpg"
import tumitate_wariaigraph5 from "../images2/tumitate_wariai.jpg"
import scatterline from "../images2/scatterline.jpg"
import simulation from "../images/simulation.pdf"

import { useNavigate,Navigate } from "react-router-dom";
import axios from 'axios'


export default function Simulation() {
  const navigate = useNavigate();
  
  

  
  // React.useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/image4").then((res) => {
	// 		// binary_setData(res.blob());
  //     // var blobURL = URL.createObjectURL(res.data);
  //     console.log(res)
  //       // var image = document.getElementById("myImage");
       
  //       // image.src = blobURL;
      

	// 	});
    
   
  // }, []);
  // function getBase64Image(){

  //   const base64image = window.URL.createObjectURL(binary_data);



  // }
  

  
  

 
  // const img = document.querySelector('img')
  

  // const getBase64Image = async () => {
  //   const responce = await axios.get(`http://127.0.0.1:8000/image4`);
  //   binary_setData(responce.blob());
  // };

 

  return (
    <>
    <div className="flex flex-row-reverse my-8 w-full">
        
    </div>
      <div className="flex justify-between items-center my-4">
        <button onClick={() => navigate("/SelectedBrand")} className="border rounded bg-gray-400 text-white px-6 py-2 mx-4 hover:bg-deepBlue">戻る</button>
        <a href={simulation} download="simulation.pdf"className="bg-orange-400 text-lg text-white px-8 py-1 mx-4 rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition">
          PDF出力
        </a>
      </div>
      <Tabs>
        <TabList>
          <Tab>キャッシュフローシュミレーション</Tab>
          <Tab>利金積立シュミレーション</Tab>
          <Tab>利金受取金額</Tab>
        </TabList>

        <TabPanel>
          <img  name="tumitate_bougraph2" src={tumitate_bougraph2} className="my-12" alt='画像の2'/>
          <img  name="scatteroresengraph3" src={scatteroresengraph3} className="my-12"alt='画像の3' />
          </TabPanel>
        <TabPanel>
          <div>
            <div className="bg-gray-200 px-4 py-2 text-xs">
              <p>
                ※運用シュミレーションは、税金(20.315%)控除後のデータです(譲渡益税は考慮しておりません)。年1回の福利計算をしています。
              </p>
              <p>
                ※本シュミレーションのいかなる内容も、将来の運用成果を予測し、保証するものではありません。
              </p>
              <p>
                ※情報の正確性には万全を期しておりますが、その内容の正確性、完全性、信頼性を保証するものではありません。本シュミレーション及び記載された情報を利用することで生じるいかなる損害(直接的、間接的を問わず)についても、当社は一切の責任を負うものではありません。実際の資産運用や投資判断に当たっては、必ずご自身の責任において最終的に判断してください。
              </p>
            </div>
            <div className="px-4 my-4 flex flex-col gap-1">
              <h2 className="text-deepBlue">積立投資先</h2>
              <div className="flex gap-4">
                <span className="border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue">
                  S&P500
                </span>
                <span className="border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue">
                  ACWI
                </span>
                <span className="border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue">
                  LowRisk
                </span>
                <span className="border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue">
                  MiddleRisk
                </span>
                <span className="border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue">
                  HighRisk
                </span>
                <span className="border rounded bg-gray-400 text-white px-4 py-1 hover:bg-deepBlue">
                  個別指定
                </span>
              </div>
            </div>
            <img name="oresengraph4" src={oresengraph4} alt='画像の4'/>
            <img name="tumitate_wariaigraph5" src={tumitate_wariaigraph5}alt='画像の5' />
            <img name="scatterline" src={scatterline}alt='画像の6' />

          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div className="bg-gray-200 px-4 py-2 text-xs">
              <p>
                ※運用シュミレーションは、税金(20.315%)控除後のデータです(譲渡益税は考慮しておりません)。年1回の福利計算をしています。
              </p>
              <p>
                ※本シュミレーションのいかなる内容も、将来の運用成果を予測し、保証するものではありません。
              </p>
              <p>
                ※情報の正確性には万全を期しておりますが、その内容の正確性、完全性、信頼性を保証するものではありません。本シュミレーション及び記載された情報を利用することで生じるいかなる損害(直接的、間接的を問わず)についても、当社は一切の責任を負うものではありません。実際の資産運用や投資判断に当たっては、必ずご自身の責任において最終的に判断してください。
              </p>
            </div>
            {/* <img name="stock_img_3" src={StockImg_3} className="my-12" /> */}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
