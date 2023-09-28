import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../Components/Footer";
import YesChecked from "../Components/YesChecked";
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
                        <h2>旅の思い出を記録 </h2>
                        <p>
                            これまでの旅を1つにまとめて記録します。
                            投稿の外部への公開可否はmypageからいつでも変更できます。
                        </p>
                        <p>①体験旅館</p>
                        <select name="example">
                            <option>旅館名①</option>
                            <option>旅館名②</option>
                            <option>旅館名③</option>
                        </select>
                        <p>②体験記プレビュー（mypageで後から修正可能）</p>
                        <div className="mb-2 bg_color_sub">
                            <div className="py-6">
                                <div className="card lg:card-side bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            src="/images/oogosha_oosugi.jpg"
                                            alt="natural"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <p>mission場所　日付</p>
                                        <p>ひとことコメント：</p>
                                        <p>お守り：銀座きもの装</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>③投稿可否</p>
                        <YesChecked />
                        <p>体験日付</p>
                        <input type="date" />
                        {/* 位置情報 */}
                        <input type="hidden" />
                    </div>

                    <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5">
                        <button
                            onClick={() => {
                                window.location.href = route("mypage");
                            }}
                            className="custom-button"
                        >
                            投稿
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
