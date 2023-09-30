import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../Components/FooterLogin";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard({ auth }) {
    const params = new URLSearchParams(window.location.search);
    // const id = params;
    const id = "id=" + params.get("p");
    const backid = params.get("p");
    // console.log(id);
    const [password, setPassword] = useState("");
    const [planId, setPlanId] = useState(""); // プランIDの状態を管理
    const [passwordMatch, setPasswordMatch] = useState(false); // パスワード一致状態

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const backid = params.get("p");

        // プランIDを取得し、planIdに設定
        setPlanId(backid);
    }, []);

    // console.log(plan.plan_password);
    const checkPassword = () => {
        // プランIDとパスワードをLaravelに送信
        axios
            .post("/check_password", {
                plan_id: planId,
                plan_password: password,
            })
            .then((response) => {
                // Laravelからの応答を処理
                if (response.data.success) {
                    // // 追加の処理が成功した場合、次のページにリダイレクト
                    // window.location.href =
                    //     route("first-mission") + `?id=${planId}`;

                    // パスワードが一致した場合の処理
                    const selectedPlanId = response.data.selectedPlanId;

                    // 追加の処理が成功した場合、次のページにリダイレクト
                    window.location.href =
                        route("first-mission") +
                        `?id=${planId}&s=${selectedPlanId}`;

                    setPasswordMatch(true);
                } else {
                    // 追加の処理が失敗した場合の処理を行う
                    console.log("追加の処理が失敗しました");
                    setPasswordMatch(false);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // console.log(plan);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="癒しのひととき" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <>
                        <div className="overflow-hidden sm:rounded-lg">
                            <p>プランパスワードを入力してください。</p>
                            <input
                                type="hidden"
                                placeholder="プランID"
                                value={planId}
                                onChange={(e) => setPlanId(`${backid}`)} // プランIDの入力を受け付ける
                            />
                            <input
                                type="text"
                                placeholder="プランパスワード"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                onClick={checkPassword}
                                className="custom-button"
                            >
                                送信
                            </button>
                        </div>
                    </>

                    <div
                        id="next"
                        className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5"
                    >
                        {passwordMatch ? (
                            <button
                                onClick={() => {
                                    window.location.href =
                                        route("first-mission") + `?${id}`;
                                }}
                                className="go-button"
                            >
                                次の体験へ
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    window.location.href =
                                        route("dashboard") + `?p=${backid}`;
                                }}
                                className="custom-button"
                            >
                                戻る
                            </button>
                        )}
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

                    .go-button {
                        background-color: #d3381c; /* ボタンの背景色 */
                        color: white; /* ボタンのテキスト色 */
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
