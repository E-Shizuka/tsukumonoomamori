import GuestLayout from "@/Layouts/GuestLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Head } from "@inertiajs/react";
import FooterLogin from "../components/FooterLogin";
import Footer from "../Components/Footer";

// メモ
// $plan = Plan::find(1); // プランをIDをurlパラムに
// $ryokan = $plan->ryokan; // 関連する旅館を取得
// $omamori = $plan->omamori; // 関連するお守りを取得

function CommonContent() {
    const [plans, setPlans] = useState([]);
    const [planlist, setPlanlist] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // リクエストの完了を待つPromiseを作成
        const fetchPlans = axios.get("/plans");
        const fetchPlanList = axios.get("/planlist");

        // 両方のリクエストが成功した場合にデータを設定しloadingをfalseに設定
        Promise.all([fetchPlans, fetchPlanList])
            .then(([plansResponse, planlistResponse]) => {
                setPlans(plansResponse.data.plans);
                setPlanlist(planlistResponse.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // どちらかのリクエストが失敗した場合もloadingをfalseに設定
            });
    }, []);

    // console.log(plans);
    // console.log(ryokans);
    // console.log(omamoris);
    // console.log(planlist);

    return (
        <>
            <Head title="体験プラン一覧" />
            <div className="mb-24 bg_color_sub">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {planlist &&
                            planlist.map((plan, index) => (
                                <div key={index} className="py-6">
                                    <div className="card lg:card-side bg-base-100 shadow-xl">
                                        <figure>
                                            <img
                                                src={`../images/${plan.plan_image}`}
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {plan.ryokan_name}
                                            </h2>
                                            <p>{plan.ryokan_prefectures}</p>
                                            <p>{plan.plan_name}</p>
                                            <p>{plan.omamori_name}</p>
                                            <div className="card-actions justify-end">
                                                <button
                                                    onClick={() => {
                                                        window.location.href =
                                                            route("dashboard") +
                                                            `?p=${plan.plan_id}`;
                                                    }}
                                                    className="custom-button"
                                                >
                                                    詳細を見る
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </>
                )}
            </div>
        </>
    );
}

export default function Welcome({ auth }) {
    return (
        <>
            {auth.user ? (
                <AuthenticatedLayout user={auth.user}>
                    <CommonContent />
                </AuthenticatedLayout>
            ) : (
                <GuestLayout>
                    <CommonContent />
                </GuestLayout>
            )}
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
            {auth.user ? <FooterLogin /> : <Footer />}
        </>
    );
}
