import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../components/FooterLogin";
import YesChecked from "../Components/YesChecked";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Dashboard({ auth }) {
    const sliderSettings = {
        dots: true, // スライダーの下にドットを表示するかどうか
        infinite: false, // 無限ループスライド
        speed: 300, // スライド/フェードアニメーションの速さ（ミリ秒）
        slidesToShow: 1, // 一度に表示するスライド数
        slidesToScroll: 1, // 一度のスクロールで動かすスライド数
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="mypage " />
            <div className="py-12">
                <div className="sm:fixed top-0 right-0 p-0 flex justify-end items-center space-x-4">
                    <p className="mr-2">投稿可否</p>
                    <YesChecked />
                </div>
                <div className="sm:fixed sm:top-0 sm:right-0 p-0 text-right">
                    <button
                        onClick={() => {
                            window.location.href = route("mypage");
                        }}
                        className="custom-button"
                    >
                        修正
                    </button>
                </div>
                <div className="mb-24 bg_color_sub px-8">
                    <Slider {...sliderSettings}>
                        <div className="py-6">
                            <div className="card lg:card-side bg-base-100 shadow-xl">
                                <figure>
                                    {/* 写真は自分が撮影したものが出るように */}
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
                        <div className="py-6">
                            <div className="card lg:card-side bg-base-100 shadow-xl ">
                                <figure>
                                    {/* 写真は自分が撮影したものが出るように */}
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
                        <div className="py-6">
                            <div className="card lg:card-side bg-base-100 shadow-xl">
                                <figure>
                                    {/* 写真は自分が撮影したものが出るように */}
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
                    </Slider>
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
