import{r,j as e,b as u}from"./app-58604280.js";import{A as f}from"./AuthenticatedLayout-68690ad6.js";import{F as j}from"./FooterLogin-5c41cec9.js";import{S as b}from"./slick-theme-4f02f563.js";import"./Dropdown-fdf485d6.js";import"./transition-c6d76b7b.js";function D({auth:i}){const n={dots:!0,infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1},[S,l]=r.useState([]),[d,p]=r.useState([]),[a,m]=r.useState([]),[x,g]=r.useState(!0);r.useEffect(()=>{(async()=>{try{const s=await axios.get("/selectedplanlist");l(s.data);const o=await axios.get("/user-post");p(o.data);const c=await axios.get("/selectedpost");m(c.data),g(!1)}catch(s){console.error("Error fetching data:",s)}})()},[]);function h(t){const s={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(t).toLocaleDateString("ja-JP",s).replace(/\//g,"年").replace("-","月")+"日"}return console.log("ポスト",d),console.log("select_posts",a),e.jsxs(f,{user:i.user,children:[e.jsx(u,{title:"mypage "}),e.jsx("div",{className:"py-12",children:x?e.jsx("p",{children:"Loading..."}):e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h2",{children:"これまでの体験一覧"})}),a&&a.map((t,s)=>(console.log("post",t),e.jsxs("div",{className:"mb-20 bg_color_sub px-8",children:[e.jsx("div",{className:"overflow-hidden sm:rounded-lg",children:e.jsxs("p",{children:["体験プラン:",t.plan.plan_name]})}),e.jsx("div",{children:e.jsx(b,{...n,children:t.posts.map((o,c)=>e.jsx("div",{className:"py-6",children:e.jsxs("div",{className:"card lg:card-side bg-base-100",children:[e.jsx("figure",{children:e.jsx("img",{src:`/storage/images/post_images/${o.image_name}`})}),e.jsxs("div",{className:"card-body",children:[e.jsx("p",{className:"text-right",children:h(o.created_at)}),e.jsx("p",{children:"ひとことコメント："}),e.jsx("p",{children:o.comment})]})]})},c))})})]},s)))]})}),e.jsx("style",{children:`
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

                                `}),e.jsx(j,{})]})}export{D as default};
