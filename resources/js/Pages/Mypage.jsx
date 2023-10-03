import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "../components/FooterLogin";
import YesChecked from "../Components/YesChecked";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";

export default function Dashboard({ auth }) {
    const sliderSettings = {
        dots: true, // スライダーの下にドットを表示するかどうか
        infinite: false, // 無限ループスライド
        speed: 300, // スライド/フェードアニメーションの速さ（ミリ秒）
        slidesToShow: 1, // 一度に表示するスライド数
        slidesToScroll: 1, // 一度のスクロールで動かすスライド数
    };

    const [selectedplanlist, setSelectedPlanlist] = useState([]);
    const [posts, setPosts] = useState([]);
    const [select_posts, setSelectPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 選択されたプランリストを取得
                const selectedplanlistResponse = await axios.get(
                    "/selectedplanlist"
                );
                setSelectedPlanlist(selectedplanlistResponse.data);
                const response = await axios.get("/user-post");
                setPosts(response.data);

                const postresponse = await axios.get("/selectedpost");
                setSelectPosts(postresponse.data);
                // console.log("select_posts", postresponse.data);
                // console.log("all_posts", postresponse.data[0].posts);

                // 両方の非同期処理が完了したら loading を false に設定
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // fetchData 関数を呼び出す
    }, []);

    function formatDate(dateString) {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const date = new Date(dateString);
        return (
            date
                .toLocaleDateString("ja-JP", options)
                .replace(/\//g, "年")
                .replace("-", "月") + "日"
        );
    }

    // console.log("ポスト", posts);
    // console.log("select_posts", select_posts);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="mypage " />
            <div className="py-12">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div>
                            <h2 className="font-bold text-gray-800 leading-tight m-2 mb-5">
                                これまでの体験一覧
                            </h2>
                        </div>
                        {select_posts &&
                            select_posts.map((plan, index) => {
                                // console.log("post", plan);
                                return (
                                    <div
                                        className="mb-20 bg_color_sub px-8"
                                        key={index}
                                    >
                                        {/* <div className="overflow-hidden sm:rounded-lg bg-white m-2 rounded py-2"> */}
                                        <div className="bg_color_main my-2 rounded py-2">
                                            <p className="text-sm font-semibold text-white leading-tight m-2">
                                                体験プラン:
                                                {plan.plan.plan_name}
                                            </p>
                                        </div>
                                        <div>
                                            <Slider {...sliderSettings}>
                                                {plan.posts.map(
                                                    (post, index) => (
                                                        <div
                                                            key={index}
                                                            className="py-3 "
                                                        >
                                                            <div className="card lg:card-side bg-base-100">
                                                                <figure>
                                                                    <img
                                                                        src={`/storage/images/post_images/${post.image_name}`}
                                                                    />
                                                                </figure>
                                                                <div className="card-body">
                                                                    <p className="text-right">
                                                                        {formatDate(
                                                                            post.created_at
                                                                        )}
                                                                        {/* {
                                                                            post.created_at
                                                                        } */}
                                                                    </p>
                                                                    <p>
                                                                        ひとことコメント：
                                                                    </p>
                                                                    <p>
                                                                        {
                                                                            post.comment
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </Slider>
                                        </div>
                                    </div>
                                );
                            })}
                    </>
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
                    .bg_color_main {
                        background-color: #d3381c;
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
