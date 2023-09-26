import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../components/footer";

const cameraWidth = 300;
const cameraHeight = 400;

export default function Dashboard({ auth }) {
    const [cameraIsOn, setCameraIsOn] = useState(false); // カメラの状態を追跡
    // カメラの初期化関数
    const cameraInitSmartphoneSupport = () => {
        const video = document.getElementById("camera");

        // スマホからの閲覧か
        const isMobile = navigator.userAgent.match(/iPhone|Android/);

        const cameraSetting = {
            audio: false,
            video: {
                // スマホの場合は縦横を逆に設定する
                width: isMobile ? cameraHeight : cameraWidth,
                height: isMobile ? cameraWidth : cameraHeight,
                facingMode: "environment",
            },
        };
    };

    const cameraBtnClick = () => {
        const video = document.getElementById("camera");

        // スマホからの閲覧か
        const isMobile = navigator.userAgent.match(/iPhone|Android/);

        const cameraSetting = {
            audio: false,
            video: {
                // スマホの場合は縦横を逆に設定する
                width: isMobile ? cameraHeight : cameraWidth,
                height: isMobile ? cameraWidth : cameraHeight,
                facingMode: "environment",
            },
        };

        if (cameraIsOn) {
            // カメラが既に起動している場合はオフにする
            const stream = video.srcObject;
            if (stream) {
                stream.getTracks().forEach((track) => {
                    track.stop();
                });
            }
            setCameraIsOn(false); // カメラの状態をオフに設定
            // canvas をクリアする
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        } else {
            // カメラを起動
            navigator.mediaDevices
                .getUserMedia(cameraSetting)
                .then((mediaStream) => {
                    video.srcObject = mediaStream;
                    setCameraIsOn(true); // カメラの状態をオンに設定
                })
                .catch((err) => {
                    console.log(err.toString());
                });
        }
    };

    // 撮影関数
    const shoot = () => {
        // video要素
        const video = document.getElementById("camera");
        // canvas要素
        const canvas = document.getElementById("canvas");
        // video要素の実際の幅と高さを取得
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        // canvas要素の大きさを設定（80%のサイズ）
        canvas.width = videoWidth * 0.8;
        canvas.height = videoHeight * 0.8;

        // 描画用オブジェクトを取得
        const ctx = canvas.getContext("2d");

        // 描画する
        ctx.drawImage(
            video, // データソース
            0, // 描画開始x座標
            0, // 描画開始y座標
            canvas.width, // 描画横サイズ
            canvas.height // 描画縦サイズ
        );

        // 画像を保存する
        const imageData = canvas.toDataURL("image/jpeg"); // Canvasから画像データURLを取得
        const image = new Image();
        image.src = imageData;

        // ダウンロードリンクを生成してクリック
        const downloadLink = document.createElement("a");
        downloadLink.href = image.src;
        downloadLink.download = "captured_image.jpg"; // 保存するファイル名
        downloadLink.click();
    };

    // コンポーネントがマウントされたときにカメラを初期化
    useEffect(() => {
        cameraInitSmartphoneSupport();
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="癒しのひととき" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg">
                        <h2>癒しのひととき</h2>
                        <p>〇〇旅館について</p>
                        <p>温泉について</p>
                        <p>温泉に浸かる</p>
                        <p>写真を撮る</p>
                    </div>

                    {/* カメラ関連の要素 */}
                    <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5">
                        <div>
                            <input
                                type="button"
                                value={cameraIsOn ? "カメラオフ" : "カメラ起動"} // ボタンのラベルをカメラの状態に応じて変更
                                onClick={cameraBtnClick}
                                className="custom-button"
                            />
                            <input
                                type={cameraIsOn ? "button" : "hidden"}
                                value="撮影"
                                onClick={shoot}
                                className="custom-button"
                            />
                        </div>
                        <div style={{ display: cameraIsOn ? "block" : "none" }}>
                            <video
                                id="camera"
                                autoPlay
                                muted
                                playsInline
                            ></video>
                            <canvas
                                id="canvas"
                                crossOrigin="anonymous"
                            ></canvas>
                        </div>
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

                    .bg_color_sub {
                        background-color: #fff1cf;
                    }

                                `}
            </style>
            <Footer />
        </AuthenticatedLayout>
    );
}
