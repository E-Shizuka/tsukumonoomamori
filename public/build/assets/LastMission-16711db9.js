import{r as d,j as e,b as y,a as p}from"./app-3780add7.js";import{A as N}from"./AuthenticatedLayout-4b26186b.js";import{F as S}from"./FooterLogin-aa57060c.js";import{S as k}from"./slick-theme-8d18c6ae.js";import"./Dropdown-e9417f68.js";import"./transition-532d10fb.js";function R({auth:h}){const o=new URLSearchParams(window.location.search);o.get("id");const t=o.get("s"),r=o.get("s")-1,x={dots:!0,infinite:!1,speed:300,slidesToShow:1,slidesToScroll:1},[j,g]=d.useState([]),[s,u]=d.useState([]),[_,f]=d.useState(!0);d.useEffect(()=>{(async()=>{try{const c=await p.get("/selectedplanlist");if(g(c.data),t){const n=await p.get(`/get-posts-by-sp-id?sp_id=${t}`);u(n.data)}f(!1)}catch(c){console.error("Error fetching data:",c)}})()},[t]);let l="";s.length>0&&s[0].created_at&&(l=s[0].created_at.split("T")[0]);const a=j.data,[m,b]=d.useState(0),v=async i=>{i.preventDefault();const c={participation_date:l,selected_plan_id:t,ryokan_id:a&&a[r].ryokan_id,photo_privacy:m};try{const n=await p.post("/participation",c);window.location.href=route("mypage")}catch(n){console.error("データの投稿中にエラーが発生しました:",n)}};return e.jsxs(N,{user:h.user,children:[e.jsx(y,{title:"思い出を記録 "}),e.jsx("div",{className:"py-12",children:_?e.jsx("p",{children:"Loading..."}):e.jsxs("div",{className:"mb-24 bg_color_sub px-8",children:[e.jsxs("div",{className:"overflow-hidden sm:rounded-lg",children:[e.jsx("h2",{children:"旅の思い出を記録 "}),e.jsx("p",{children:"これまでの旅を1つにまとめて記録します。"}),e.jsx("p",{children:"※広報活動のため、投稿いただきましたお写真を二次利用させて頂きたく、確認をさせていただいております。 つきましては下記のフォーマットより写真公開可否をお知らせください。"}),e.jsxs("p",{children:["体験旅館:",a&&a[r].ryokan_name]}),e.jsxs("p",{children:["体験プラン:",a&&a[r].plan_name]}),e.jsxs("p",{children:["お守り：",a&&a[r].omamori_name]}),e.jsxs("form",{onSubmit:v,children:[e.jsx("input",{type:"hidden",name:"participation_date",value:l,id:"date"}),e.jsx("input",{type:"hidden",name:"selected_plan_id",value:t,id:"selected_plan"}),e.jsx("input",{type:"hidden",name:"ryokan_id",value:a&&a[r].ryokan_id,id:"ryokan"}),e.jsxs("div",{className:"flex my-2",children:[e.jsx("p",{className:"mx-4",children:"写真公開可否"}),e.jsxs("select",{name:"photo_privacy",onChange:i=>b(i.target.value),value:m,children:[e.jsx("option",{value:"0",children:"公開可"}),e.jsx("option",{value:"1",children:"非公開"})]})]}),e.jsx("button",{type:"submit",className:"custom-button",children:"公開可否確定"})]})]}),e.jsx("div",{children:e.jsx("h2",{children:"体験記プレビュー"})}),e.jsxs(k,{...x,children:[e.jsx("div",{className:"py-6",children:e.jsxs("div",{className:"card lg:card-side bg-base-100",children:[e.jsx("figure",{children:e.jsx("img",{src:`/storage/images/post_images/${s&&s[0].image_name}`})}),e.jsxs("div",{className:"card-body",children:[e.jsx("p",{className:"text-right",children:s&&s[0].formatted_created_at}),e.jsx("p",{children:"ひとことコメント："}),e.jsx("p",{children:s&&s[0].comment})]})]})}),e.jsx("div",{className:"py-6",children:e.jsxs("div",{className:"card lg:card-side bg-base-100",children:[e.jsx("figure",{children:e.jsx("img",{src:`/storage/images/post_images/${s&&s[1].image_name}`})}),e.jsxs("div",{className:"card-body",children:[e.jsx("p",{className:"text-right",children:s&&s[1].formatted_created_at}),e.jsx("p",{children:"ひとことコメント："}),e.jsx("p",{children:s&&s[1].comment})]})]})}),e.jsx("div",{className:"py-6",children:e.jsxs("div",{className:"card lg:card-side bg-base-100",children:[e.jsx("figure",{children:e.jsx("img",{src:`/storage/images/post_images/${s&&s[2].image_name}`})}),e.jsxs("div",{className:"card-body",children:[e.jsx("p",{className:"text-right",children:s&&s[2].formatted_created_at}),e.jsx("p",{children:"ひとことコメント："}),e.jsx("p",{children:s&&s[2].comment})]})]})})]})]})}),e.jsx("style",{children:`
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

                                `}),e.jsx(S,{})]})}export{R as default};
