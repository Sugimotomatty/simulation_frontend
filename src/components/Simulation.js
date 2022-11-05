import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StockImg_1 from "../images/stock_img_1.jpg";
import StockImg_2 from "../images/stock_img_2.jpg";
import StockImg_3 from "../images/stock_img_3.jpg";
import { useNavigate } from "react-router-dom";

export default function Simulation() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <button onClick={() => navigate("/SelectedBrand")} className="border rounded bg-gray-400 text-white px-6 py-2 mx-4 hover:bg-deepBlue">戻る</button>
        <button className="bg-orange-400 text-lg text-white px-8 py-1 mx-4 rounded transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition">
          PDF出力
        </button>
      </div>
      <Tabs>
        <TabList>
          <Tab>キャッシュフローシュミレーション</Tab>
          <Tab>利金積立シュミレーション</Tab>
          <Tab>利金受取金額</Tab>
        </TabList>

        <TabPanel>
          <img name="stock_img_1" src={StockImg_1} className="my-12" />
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
            <img name="stock_img_2" src={StockImg_2} />
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
            <img name="stock_img_3" src={StockImg_3} className="my-12" />
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
