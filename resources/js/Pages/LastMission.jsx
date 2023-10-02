import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../Components/FooterLogin";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";

export default function Dashboard({ auth }) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id"); //plan_id
    const sp_id = params.get("s"); //selected_plan_id
    const s_id = params.get("s") - 1; //selected_plan_idの配列のために-1
    // console.log(s_id);
    // console.log(id);
    // console.log(select_id);

    const sliderSettings = {
        dots: true, // スライダーの下にドットを表示するかどうか
        infinite: false, // 無限ループスライド
        speed: 300, // スライド/フェードアニメーションの速さ（ミリ秒）
        slidesToShow: 1, // 一度に表示するスライド数
        slidesToScroll: 1, // 一度のスクロールで動かすスライド数
    };

    const [selectedplanlist, setSelectedPlanlist] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 選択されたプランリストを取得
                const selectedplanlistResponse = await axios.get(
                    "/selectedplanlist"
                );
                setSelectedPlanlist(selectedplanlistResponse.data);

                // sp_id が存在する場合、関連するポストを取得
                if (sp_id) {
                    const response = await axios.get(
                        `/get-posts-by-sp-id?sp_id=${sp_id}`
                    );
                    setPosts(response.data);
                }

                // 両方の非同期処理が完了したら loading を false に設定
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // fetchData 関数を呼び出す
    }, [sp_id]);

    // console.log(selectedplanlist);
    // console.log(posts);
    // console.log(posts[0].image_name);
    let datePortion = "";
    if (posts.length > 0 && posts[0].created_at) {
        const dateString = posts[0].created_at;
        datePortion = dateString.split("T")[0];
    }
    // console.log(datePortion);

    const selectedplan = selectedplanlist.data; // s_id番目の要素を取得
    // console.log(selectedplan);
    // console.log(selectedplan[s_id].ryokan_name);

    //送信処理
    const [photoPrivacy, setPhotoPrivacy] = useState(0); // photoPrivacyを初期化

    const handleSubmit = async (e) => {
        e.preventDefault(); // デフォルトのフォーム送信動作を防ぐ

        // 送信したいデータを含むオブジェクトを作成
        const formData = {
            participation_date: datePortion,
            selected_plan_id: sp_id,
            ryokan_id: selectedplan && selectedplan[s_id].ryokan_id,
            photo_privacy: photoPrivacy,
        };
        // console.log("送信するデータ:", formData);

        try {
            // Axiosを使ってLaravelエンドポイントにPOSTリクエストを送信
            const response = await axios.post("/participation", formData);
            window.location.href = route("mypage");
            // 必要に応じてレスポンスを処理
            // console.log(response.data);

            // ユーザーにリダイレクトまたは成功メッセージを表示するなど、アプリの要件に応じて処理を追加
        } catch (error) {
            // エラーを処理
            console.error("データの投稿中にエラーが発生しました:", error);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="思い出を記録 " />
            <div className="py-12">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="mb-24 bg_color_sub px-8">
                        <div className="overflow-hidden sm:rounded-lg">
                            <h2>旅の思い出を記録 </h2>
                            <p>これまでの旅を1つにまとめて記録します。</p>
                            <p>
                                ※広報活動のため、投稿いただきましたお写真を二次利用させて頂きたく、確認をさせていただいております。
                                つきましては下記のフォーマットより写真公開可否をお知らせください。
                            </p>
                            <p>
                                体験旅館:
                                {selectedplan && selectedplan[s_id].ryokan_name}
                            </p>
                            <p>
                                体験プラン:
                                {selectedplan && selectedplan[s_id].plan_name}
                            </p>
                            <p>
                                お守り：
                                {selectedplan &&
                                    selectedplan[s_id].omamori_name}
                            </p>
                            <form onSubmit={handleSubmit}>
                                {/* ここに入力フィールドを追加 */}

                                <input
                                    type="hidden"
                                    name="participation_date"
                                    value={datePortion}
                                    id="date"
                                />
                                <input
                                    type="hidden"
                                    name="selected_plan_id"
                                    value={sp_id}
                                    id="selected_plan"
                                />
                                <input
                                    type="hidden"
                                    name="ryokan_id"
                                    value={
                                        selectedplan &&
                                        selectedplan[s_id].ryokan_id
                                    }
                                    id="ryokan"
                                />

                                <div className="flex my-2">
                                    <p className="mx-4">写真公開可否</p>
                                    <select
                                        name="photo_privacy"
                                        onChange={(e) =>
                                            setPhotoPrivacy(e.target.value)
                                        }
                                        value={photoPrivacy}
                                    >
                                        <option value="0">公開可</option>
                                        <option value="1">非公開</option>
                                    </select>
                                </div>

                                {/* 送信ボタン */}
                                <button type="submit" className="custom-button">
                                    公開可否確定
                                </button>
                            </form>
                        </div>
                        {/* <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center">
                            <button
                                onClick={() => {
                                    window.location.href = route("mypage");
                                }}
                                className="custom-button"
                            >
                                投稿
                            </button>
                        </div> */}
                        <div>
                            <h2>体験記プレビュー</h2>
                        </div>
                        <Slider {...sliderSettings}>
                            <div className="py-6">
                                <div className="card lg:card-side bg-base-100">
                                    <figure>
                                        <img
                                            src={`/storage/images/post_images/${
                                                posts && posts[0].image_name
                                            }`}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <p className="text-right">
                                            {posts &&
                                                posts[0].formatted_created_at}
                                        </p>
                                        <p>ひとことコメント：</p>
                                        <p>{posts && posts[0].comment}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6">
                                <div className="card lg:card-side bg-base-100">
                                    <figure>
                                        <img
                                            src={`/storage/images/post_images/${
                                                posts && posts[1].image_name
                                            }`}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <p className="text-right">
                                            {posts &&
                                                posts[1].formatted_created_at}
                                        </p>
                                        <p>ひとことコメント：</p>
                                        <p>{posts && posts[1].comment}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6">
                                <div className="card lg:card-side bg-base-100">
                                    <figure>
                                        <img
                                            src={`/storage/images/post_images/${
                                                posts && posts[2].image_name
                                            }`}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <p className="text-right">
                                            {posts &&
                                                posts[2].formatted_created_at}
                                        </p>
                                        <p>ひとことコメント：</p>
                                        <p>{posts && posts[2].comment}</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                )}
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
                    .slick-prev:before,
                    .slick-next:before {
                       color: #d3381c;
                    }

                                `}
            </style>
            <Footer />
        </AuthenticatedLayout>
    );
}
