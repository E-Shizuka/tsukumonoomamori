import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../Components/FooterLogin";
import React, { useEffect, useState } from "react";

export default function Dashboard({ auth }) {
    const params = new URLSearchParams(window.location.search);
    // const id = params;
    const id = "id=" + params.get("p");
    const backid = params.get("p");
    // console.log(id);
    const [password, setPassword] = useState("");
    const [plan, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(false); // パスワード一致状態

    useEffect(() => {
        // リクエストの完了を待つPromiseを作成
        const fetchPlan = axios.get(`/plan_select?${id}`);

        Promise.all([fetchPlan]) // Promise.allは配列を受け取る必要があります
            .then((planResponse) => {
                setPlans(planResponse[0].data.plan); // planResponseは配列なので[0]を使用
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // どちらかのリクエストが失敗した場合もloadingをfalseに設定
            });
    }, []);
    // console.log(plan.plan_password);
    const checkPassword = () => {
        if (plan.plan_password === password) {
            // パスワードが一致するプランが見つかった場合の処理
            console.log("パスワードが一致しました。");
            setPasswordMatch(true);
        } else {
            // パスワードが一致しない場合の処理
            console.log("パスワードが一致しません。");
            setPasswordMatch(false);
        }
    };

    // console.log(plan);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="癒しのひととき" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <div className="overflow-hidden sm:rounded-lg">
                                <p>プランパスワードを入力してください。</p>
                                <input
                                    type="text"
                                    placeholder="プランパスワード"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <button
                                    onClick={checkPassword}
                                    className="custom-button"
                                >
                                    送信
                                </button>
                            </div>
                        </>
                    )}

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
