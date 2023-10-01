import{r as n,a as m,j as e,b as w}from"./app-58604280.js";import{A as v}from"./AuthenticatedLayout-68690ad6.js";import{F as y}from"./FooterLogin-8562a5c3.js";import"./Dropdown-fdf485d6.js";import"./transition-c6d76b7b.js";function N({auth:p}){const a=new URLSearchParams(window.location.search),c=a.get("id"),i=a.get("s"),[t,h]=n.useState([]),[u,r]=n.useState(!0),[l,x]=n.useState("");n.useEffect(()=>{m.get(`/mission-by-plan?id=${c}`).then(s=>{h(s.data.missions),console.log(s.data.missions),r(!1)}).catch(s=>{console.error(s),r(!1)})},[]);const[d,j]=n.useState(null),[g,f]=n.useState(null),b=s=>{const o=s.target.files[0];f(o),o&&j(URL.createObjectURL(o))},_=()=>{const s=new FormData;s.append("image",g),s.append("comment",l),s.append("mission_id","1"),s.append("selected_plan_id",i),m.post("/makepost",s,{headers:{"content-type":"multipart/form-data"}}).then(o=>{console.log(o.data),window.location.href=route("second-mission")+`?id=${c}&s=${i}`}).catch(o=>{console.error(o)})};return e.jsxs(v,{user:p.user,children:[e.jsx(w,{title:"癒しのひととき"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:u?e.jsx("p",{children:"Loading..."}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"overflow-hidden sm:rounded-lg",children:e.jsxs("form",{encType:"multipart/form-data",children:[e.jsx("h2",{children:t&&t[0].mission_title}),e.jsx("p",{children:t&&t[0].mission_place}),e.jsx("p",{children:"パワースポットのご紹介"}),e.jsx("p",{children:t&&t[0].description}),e.jsx("h3",{children:"ミッション"}),e.jsxs("p",{children:["①",t&&t[0].mission_instruction]}),e.jsx("p",{children:"ひとことコメント・感想を記録"}),e.jsx("input",{type:"text",placeholder:"コメント",value:l,onChange:s=>x(s.target.value)}),e.jsx("p",{children:"②写真を撮る"}),e.jsx("input",{type:"file",accept:"image/*",onChange:b}),e.jsx("input",{type:"hidden",name:"selected_plan_id",value:i}),d&&e.jsxs("div",{children:[e.jsx("h4",{children:"アップロードされた画像プレビュー:"}),e.jsx("img",{src:d,alt:"アップロードされた画像",width:"200"})]}),e.jsx("button",{type:"button",onClick:_,className:"custom-button",children:"投稿して次の体験へ"})]})})})})}),e.jsx("style",{children:`
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

                                `}),e.jsx(y,{})]})}export{N as default};
