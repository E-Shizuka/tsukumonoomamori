export default function Footer(auth) {
    return (
        <footer className="absolute bottom-0 bg_color_acc">
            <div className="flex">
                <div className="flex-1 w-screen m-3">
                    <div className="flex justify-between mx-2">
                        <div className="flex flex-col items-center text-center w-1/4">
                            {/* <a href={route("home")}> */}
                            <a href={route("welcome")}>
                                <div className="text_size">ホーム</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-home-2 mx-auto"
                                    // width="24"
                                    height="7vh"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                    <path d="M10 12h4v4h-4z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col items-center text-center w-1/4">
                            <a href={route("experience")}>
                                <div className="text_size">開運の旅</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-torii mx-auto"
                                    // width="24"
                                    height="7vh"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M4 4c5.333 1.333 10.667 1.333 16 0"></path>
                                    <path d="M4 8h16"></path>
                                    <path d="M12 5v3"></path>
                                    <path d="M18 4.5v15.5"></path>
                                    <path d="M6 4.5v15.5"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col items-center text-center w-1/4">
                            <a href={route("mypage")}>
                                <div className="text_size">自分の体験記</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-book mx-auto"
                                    // width="24"
                                    height="7vh"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                                    <path d="M3 6l0 13"></path>
                                    <path d="M12 6l0 13"></path>
                                    <path d="M21 6l0 13"></path>
                                </svg>
                            </a>
                        </div>

                        {/* <div className="flex flex-col items-center text-center">
                        // その他
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-dots"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            </svg>
                        </div> */}
                        {/* <div className="flex flex-col items-center text-center">
                        //ダンボール
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-box-seam"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5"></path>
                                <path d="M12 12l8 -4.5"></path>
                                <path d="M8.2 9.8l7.6 -4.6"></path>
                                <path d="M12 12v9"></path>
                                <path d="M12 12l-8 -4.5"></path>
                            </svg>
                        </div> */}
                        {/* <div className="flex flex-col items-center text-center">
                        //ユーザー管理
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user-cog"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h2.5"></path>
                                <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                <path d="M19.001 15.5v1.5"></path>
                                <path d="M19.001 21v1.5"></path>
                                <path d="M22.032 17.25l-1.299 .75"></path>
                                <path d="M17.27 20l-1.3 .75"></path>
                                <path d="M15.97 17.25l1.3 .75"></path>
                                <path d="M20.733 20l1.3 .75"></path>
                            </svg>
                        </div> */}
                        <div className="flex flex-col items-center text-center w-1/4">
                            {/* 梅 */}
                            <a href={route("omamori")}>
                                <div className="text_size">つくものお守り</div>
                                <svg
                                    version="1.0"
                                    className="mx-auto mt-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    // width="24"
                                    height="calc(7vh * 0.9)"
                                    viewBox="0 0 1280.000000 1249.000000"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <g
                                        transform="translate(0.000000,1249.000000) scale(0.100000,-0.100000)"
                                        fill="#ffffff"
                                        stroke="none"
                                    >
                                        <path
                                            d="M6190 12484 c-19 -2 -84 -9 -145 -15 -969 -97 -1869 -654 -2407
-1489 -353 -549 -536 -1212 -515 -1865 35 -1045 557 -2001 1419 -2598 186
-128 437 -262 657 -348 122 -48 427 -143 441 -137 4 2 -35 53 -88 113 -52 61
-132 160 -177 220 -78 105 -210 301 -221 329 -4 9 14 16 62 24 95 16 169 55
241 128 l61 63 95 -142 c91 -136 225 -313 232 -305 1 1 -1 29 -5 62 -43 308
-34 691 25 1041 104 618 366 1201 767 1703 133 166 398 431 567 565 487 388
1057 649 1655 757 140 25 353 50 428 50 38 0 58 4 58 12 0 40 -188 351 -316
521 -537 717 -1323 1174 -2225 1293 -108 14 -534 27 -609 18z"
                                        />
                                        <path
                                            d="M9195 10209 c-330 -38 -597 -104 -880 -216 -665 -263 -1226 -740
-1598 -1358 -254 -421 -412 -902 -456 -1395 -12 -126 -15 -479 -5 -529 6 -31
9 -28 73 81 113 191 223 346 355 502 l64 75 31 -63 c41 -84 136 -174 217 -206
32 -13 60 -24 62 -26 2 -1 -27 -39 -65 -84 -64 -77 -210 -279 -249 -344 -13
-22 -14 -28 -3 -23 8 3 64 28 124 55 226 102 559 203 834 252 406 72 888 70
1295 -5 955 -176 1794 -713 2363 -1510 143 -201 307 -498 398 -725 21 -52 39
-96 40 -98 3 -5 182 182 237 248 404 481 660 1072 744 1715 22 163 25 591 6
745 -94 766 -411 1428 -937 1956 -506 508 -1130 822 -1860 936 -103 16 -190
21 -420 23 -159 2 -326 -1 -370 -6z"
                                        />
                                        <path
                                            d="M2698 10170 c-965 -180 -1779 -756 -2268 -1604 -278 -482 -430 -1057
-430 -1621 1 -1033 489 -2007 1317 -2627 323 -242 722 -435 1111 -538 445
-119 933 -141 1388 -65 887 149 1676 658 2179 1404 42 62 75 115 73 117 -2 2
-62 -22 -133 -53 -147 -63 -399 -149 -552 -187 -56 -14 -104 -26 -107 -26 -3
0 -1 12 5 28 16 42 14 170 -4 232 -9 30 -30 77 -47 104 -17 26 -29 50 -27 52
2 3 60 20 128 39 123 33 360 113 395 133 17 10 17 11 -6 16 -14 3 -110 26
-215 51 -1774 434 -2973 2125 -2794 3940 14 144 55 382 88 513 25 98 27 112
12 111 -9 0 -60 -9 -113 -19z"
                                        />
                                        <path
                                            d="M8095 6550 c-340 -28 -676 -109 -1005 -242 -21 -9 -4 -15 123 -43
211 -48 453 -124 606 -191 l54 -24 -55 -58 c-73 -77 -110 -156 -116 -250 -6
-87 11 -85 -172 -17 -111 42 -369 119 -376 112 -1 -1 32 -40 73 -87 558 -630
878 -1379 943 -2209 36 -471 -27 -971 -182 -1436 -211 -634 -614 -1229 -1119
-1652 l-80 -67 68 -35 c326 -165 710 -280 1098 -328 190 -23 579 -23 760 1
673 87 1253 344 1761 777 124 106 332 323 430 450 385 494 612 1051 685 1684
17 143 17 549 1 690 -70 585 -265 1098 -593 1557 -547 764 -1382 1252 -2324
1358 -131 15 -453 20 -580 10z"
                                        />
                                        <path
                                            d="M6964 5348 c14 -117 26 -330 25 -443 0 -126 -12 -322 -20 -329 -2 -3
-32 9 -65 25 -83 41 -176 56 -256 42 -35 -6 -70 -14 -80 -18 -15 -6 -16 12
-11 217 2 123 1 255 -4 293 l-9 70 -39 -75 c-58 -109 -239 -378 -341 -505
-113 -142 -428 -457 -569 -569 -882 -701 -2008 -967 -3099 -731 -196 42 -397
104 -606 186 -123 48 -418 197 -540 272 l-105 65 -7 -32 c-42 -192 -54 -651
-24 -901 77 -635 311 -1198 702 -1690 113 -142 380 -407 514 -511 511 -397
1018 -606 1680 -696 145 -19 604 -16 760 6 549 76 1020 253 1445 544 803 549
1303 1384 1416 2367 17 143 17 529 0 675 -59 528 -235 1023 -514 1448 -82 126
-243 342 -254 342 -3 0 -3 -24 1 -52z"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    .bg_color_acc {
                        background-color: #d3381c;
                        color: white;
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        width: 100%; /* ウィンドウの幅いっぱいに要素を広げる */
                    }
                    .text_size{
                        font-size:8px;
                        margin-top: auto;
                        text-align: center;
                    }

                                `}
            </style>
        </footer>
    );
}
