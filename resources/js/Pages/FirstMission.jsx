import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../Components/FooterLogin";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard({ auth }) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const select_id = params.get("s");

    // console.log(id);
    // console.log(select_id);

    const [missions, setMissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState("");

    useEffect(() => {
        axios
            .get(`/mission-by-plan?id=${id}`)
            .then((response) => {
                setMissions(response.data.missions);
                console.log(response.data.missions);
                setLoading(false); // データ取得が完了したらloadingをfalseに設定
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // エラー時もloadingをfalseに設定
            });
    }, []);

    // ステートで選択されたファイルを管理
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    // ファイルが選択されたときに呼ばれるハンドラ
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
        if (file) {
            // 選択されたファイルをステートに保存
            setSelectedFile(URL.createObjectURL(file));
        }
    };

    const submitPost = () => {
        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("comment", comment);
        formData.append("mission_id", "1");
        formData.append("selected_plan_id", select_id);

        axios
            .post("/makepost", formData, {
                headers: { "content-type": "multipart/form-data" },
            })
            .then((response) => {
                // ポストが成功した場合の処理
                console.log(response.data);
                window.location.href =
                    route("second-mission") + `?id=${id}&s=${select_id}`;
            })
            .catch((error) => {
                // エラー処理
                console.error(error);
            });
    };

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
                                <form encType="multipart/form-data">
                                    <h2>
                                        {missions && missions[0].mission_title}
                                    </h2>
                                    <p>
                                        {missions && missions[0].mission_place}
                                    </p>
                                    <p>パワースポットのご紹介</p>
                                    <p>{missions && missions[0].description}</p>
                                    <h3>ミッション</h3>
                                    <p>
                                        ①
                                        {missions &&
                                            missions[0].mission_instruction}
                                    </p>
                                    <p>ひとことコメント・感想を記録</p>
                                    <input
                                        type="text"
                                        placeholder="コメント"
                                        value={comment}
                                        onChange={(e) =>
                                            setComment(e.target.value)
                                        }
                                    />
                                    <p>②写真を撮る</p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                    <input
                                        type="hidden"
                                        name="selected_plan_id"
                                        value={select_id}
                                    />
                                    {/* プレビュー表示 */}
                                    {selectedFile && (
                                        <div>
                                            <h4>
                                                アップロードされた画像プレビュー:
                                            </h4>
                                            <img
                                                src={selectedFile}
                                                alt="アップロードされた画像"
                                                width="200"
                                            />
                                        </div>
                                    )}
                                    <button
                                        type="button"
                                        onClick={submitPost}
                                        className="custom-button"
                                    >
                                        投稿して次の体験へ
                                    </button>
                                </form>
                            </div>
                        </>
                    )}

                    {/* <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5">
                        <button
                            onClick={() => {
                                window.location.href = route("second-mission");
                            }}
                            className="custom-button"
                        >
                            次の体験へ
                        </button>
                    </div> */}
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
