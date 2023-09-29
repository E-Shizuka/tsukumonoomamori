import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../Components/FooterLogin";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Dashboard({ auth }) {
    // const [plans, setPlans] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get("/plans") // /plans エンドポイントにアクセス
    //         .then((response) => {
    //             setPlans(response.data.plans);
    //         })
    //         .catch((error) => console.error(error));
    // }, []);

    // console.log(plans);

    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/plans")
            .then((response) => {
                setPlans(response.data.plans);
                setLoading(false); // データ取得が完了したらloadingをfalseに設定
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // エラー時もloadingをfalseに設定
            });
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="ご案内" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                <h2>開運の旅へ</h2>
                                <h3>{plans && plans[0].plan_name}</h3>
                                <h3>【全体の流れ】</h3>
                                <h4>{plans && plans[0].first_title}</h4>
                                <p>{plans && plans[0].first_instruction}</p>
                                <h4>{plans && plans[0].second_title}</h4>
                                <p>{plans && plans[0].second_instruction}</p>
                                <h4>{plans && plans[0].third_title}</h4>
                                <p>{plans && plans[0].third_instruction}</p>
                                <h4>{plans && plans[0].last_title}</h4>
                                <p>{plans && plans[0].last_instruction}</p>
                            </>
                        )}
                        {/* <h2>開運の旅へ</h2>
                        <h3>{plans && plans[0].plan_name}</h3>
                        <h3>【全体の流れ】</h3>
                        <h4>{plans && plans[0].first_title}</h4>
                        <p>{plans && plans[0].first_instruction}</p>
                        <h4>{plans && plans[0].second_title}</h4>
                        <p>{plans && plans[0].second_instruction}</p>
                        <h4>{plans && plans[0].third_title}</h4>
                        <p>{plans && plans[0].third_instruction}</p>
                        <h4>{plans && plans[0].last_title}</h4>
                        <p>{plans && plans[0].last_instruction}</p> */}
                    </div>
                    <div className=" overflow-hidden sm:rounded-lg">
                        <h3>【注意事項】</h3>
                        <p>
                            開運の旅へ出発する際に、以下の注意事項を守りましょう。これらのアドバイスは、パワースポットを訪れる際に大切なポイントです。
                        </p>

                        <p>服装について</p>
                        <p>
                            パワースポットへ向かう際は、歩きやすい服装を選びましょう。また、お守りは洋服の上から羽織ること
                        </p>
                        <p>パワースポットでの禁止事項について</p>
                        <p>
                            パワースポットにあるものは、神聖なものであり、その場所にとどまるべきです。石ころや葉っぱひとつにも、特別な意味が込められています。これらを外部に持ち出すことは、ルール違反であり、神域への不敬です。自然と神聖な場所を尊重しましょう。
                        </p>
                        <p>
                            常識外れの行動をすると、因果応報の原則に従い、それがあなたに返ってくることがあります。せっかくの開運の旅ですので、パワースポットでの行動には留意し、神様や自然に感謝の気持ちを忘れずに持ちましょう。
                        </p>

                        <p>
                            パワースポット巡りは素晴らしい経験ですが、その場所とその力を尊重し、感謝の心を持って訪れることが大切です。安全で幸せな旅をお楽しみください。
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5">
                        <button
                            onClick={() => {
                                window.location.href = route("first-mission");
                            }}
                            className="custom-button"
                        >
                            出かける
                        </button>
                    </div>
                </div>
            </div>
            <style>
                {`
                    .custom-button {
                        background-color: #f19072; /* ボタンの背景色 */
                        color: black; /* ボタンのテキスト色 */
                        padding: 8px 16px; /* ボタンのパディング */
                        border-radius: 4px; /* ボタンの角丸 */
                        border: none; /* ボーダーなし */
                        margin: 0.5rem;
                    }

                    .custom-button:hover {
                        background-color: #d3381c; /* ホバー時の背景色 */
                        color: white; /* ボタンのテキスト色 */
                    }
                    .bg_color_sub {
                        background-color: #fff1cf;
                    }

                                `}
            </style>
            <Footer />
        </AuthenticatedLayout>
    );
}
