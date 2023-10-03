import{r as o,j as e,b as h}from"./app-3ca3b049.js";import{A as u}from"./AuthenticatedLayout-c3cc6c86.js";import{F as b}from"./FooterLogin-f8f4adca.js";import{S as f}from"./slick-theme-892d9c1a.js";import"./Dropdown-5e83510a.js";import"./transition-83953855.js";function D({auth:i}){const n={dots:!0,infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1},[j,l]=o.useState([]),[_,d]=o.useState([]),[c,m]=o.useState([]),[p,g]=o.useState(!0);o.useEffect(()=>{(async()=>{try{const s=await axios.get("/selectedplanlist");l(s.data);const t=await axios.get("/user-post");d(t.data);const r=await axios.get("/selectedpost");m(r.data),g(!1)}catch(s){console.error("Error fetching data:",s)}})()},[]);function x(a){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(a).toLocaleDateString("ja-JP",s).replace(/\//g,"年").replace("-","月")+"日"}return e.jsxs(u,{user:i.user,children:[e.jsx(h,{title:"mypage "}),e.jsx("div",{className:"py-12",children:p?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h2",{className:"font-bold text-gray-800 leading-tight m-2 mb-5",children:"これまでの体験一覧"})}),c&&c.map((a,s)=>e.jsxs("div",{className:"mb-20 bg_color_sub px-8",children:[e.jsx("div",{className:"bg_color_main my-2 rounded py-2",children:e.jsxs("p",{className:"text-sm font-semibold text-white leading-tight m-2",children:["体験プラン:",a.plan.plan_name]})}),e.jsx("div",{children:e.jsx(f,{...n,children:a.posts.map((t,r)=>e.jsx("div",{className:"pb-1 ",children:e.jsxs("div",{className:"card lg:card-side bg-base-100",children:[e.jsx("figure",{children:e.jsx("img",{src:`/storage/images/post_images/${t.image_name}`})}),e.jsxs("div",{className:"card-body",children:[e.jsx("p",{className:"text-right",children:x(t.created_at)}),e.jsx("p",{children:"ひとことコメント："}),e.jsx("p",{children:t.comment})]})]})},r))})})]},s))]})}),e.jsx("style",{children:`
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

                                `}),e.jsx(b,{})]})}export{D as default};
