import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../Components/Footer";
import React, { Component, useState } from "react";
export default function Dashboard({ auth }) {
    // ステートで選択されたファイルを管理
    const [selectedFile, setSelectedFile] = useState(null);

    // ファイルが選択されたときに呼ばれるハンドラ
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // 選択されたファイルをステートに保存
            setSelectedFile(URL.createObjectURL(file));
        }
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="地元の美食を堪能 " />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <h2>地元の美食を堪能 </h2>
                        <p>地元の食材の紹介</p>
                        <p>お店の紹介</p>
                        <p>料理のこだわり</p>
                        <p>①料理を食べる</p>
                        <p>ひとことコメント・感想を記録</p>
                        <input type="text" />
                        <p>②写真を撮る</p>
                        {/* 画像アップロード用の input 要素 */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />

                        {/* プレビュー表示 */}
                        {selectedFile && (
                            <div>
                                <h4>アップロードされた画像プレビュー:</h4>
                                <img
                                    src={selectedFile}
                                    alt="アップロードされた画像"
                                    width="200"
                                />
                            </div>
                        )}
                    </div>

                    <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5">
                        <button
                            onClick={() => {
                                window.location.href = route("last-mission");
                            }}
                            className="custom-button"
                        >
                            次の体験へ
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
