import{r as a,j as e,b as g}from"./app-3c7e9641.js";import{A as u}from"./AuthenticatedLayout-ec31ab5a.js";import{F as f}from"./FooterLogin-17fec0b7.js";import{S as j}from"./slick-theme-85dd75cf.js";import"./Dropdown-8850899f.js";import"./transition-3127a4f2.js";function D({auth:i}){const n={dots:!0,infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1},[b,d]=a.useState([]),[S,l]=a.useState([]),[c,p]=a.useState([]),[m,x]=a.useState(!0);a.useEffect(()=>{(async()=>{try{const s=await axios.get("/selectedplanlist");d(s.data);const t=await axios.get("/user-post");l(t.data);const o=await axios.get("/selectedpost");p(o.data),x(!1)}catch(s){console.error("Error fetching data:",s)}})()},[]);function h(r){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(r).toLocaleDateString("ja-JP",s).replace(/\//g,"年").replace("-","月")+"日"}return e.jsxs(u,{user:i.user,children:[e.jsx(g,{title:"mypage "}),e.jsx("div",{className:"py-12",children:m?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h2",{children:"これまでの体験一覧"})}),c&&c.map((r,s)=>e.jsxs("div",{className:"mb-20 bg_color_sub px-8",children:[e.jsx("div",{className:"overflow-hidden sm:rounded-lg",children:e.jsxs("p",{children:["体験プラン:",r.plan.plan_name]})}),e.jsx("div",{children:e.jsx(j,{...n,children:r.posts.map((t,o)=>e.jsx("div",{className:"py-6",children:e.jsxs("div",{className:"card lg:card-side bg-base-100",children:[e.jsx("figure",{children:e.jsx("img",{src:`/storage/images/post_images/${t.image_name}`})}),e.jsxs("div",{className:"card-body",children:[e.jsx("p",{className:"text-right",children:h(t.created_at)}),e.jsx("p",{children:"ひとことコメント："}),e.jsx("p",{children:t.comment})]})]})},o))})})]},s))]})}),e.jsx("style",{children:`
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

                                `}),e.jsx(f,{})]})}export{D as default};
