import{r as i,a as p,j as e,b as w}from"./app-086e6157.js";import{A as v}from"./AuthenticatedLayout-121bfeb2.js";import"./Dropdown-544993f0.js";import"./transition-e6286a32.js";function C({auth:u}){const c=new URLSearchParams(window.location.search),l=c.get("id"),a=c.get("s"),[s,h]=i.useState([]),[x,d]=i.useState(!0),[o,j]=i.useState("");i.useEffect(()=>{p.get(`/mission-by-plan?id=${l}`).then(t=>{h(t.data.missions),d(!1)}).catch(t=>{console.error(t),d(!1)})},[]);const[m,f]=i.useState(null),[r,g]=i.useState(null),b=t=>{const n=t.target.files[0];g(n),n&&f(URL.createObjectURL(n))},_=()=>{if(!r&&!o.trim()){alert("コメントを入力し、画像を選択してください");return}if(!r){alert("画像を選択してください");return}if(!o.trim()){alert("コメントを入力してください");return}const t=new FormData;t.append("image",r),t.append("comment",o),t.append("mission_id","3"),t.append("selected_plan_id",a),p.post("/makepost",t,{headers:{"content-type":"multipart/form-data"}}).then(n=>{console.log(n.data),window.location.href=route("last-mission")+`?id=${l}&s=${a}`}).catch(n=>{console.error(n)})};return e.jsxs(v,{user:u.user,children:[e.jsx(w,{title:"癒しのひととき"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:x?e.jsx("p",{children:"Loading..."}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"overflow-hidden sm:rounded-lg",children:e.jsxs("form",{encType:"multipart/form-data",children:[e.jsx("h2",{children:s&&s[2].mission_title}),e.jsx("p",{children:s&&s[2].mission_place}),e.jsx("p",{children:"パワースポットのご紹介"}),e.jsx("p",{children:s&&s[2].description}),e.jsx("h3",{children:"ミッション"}),e.jsxs("p",{children:["①",s&&s[2].mission_instruction]}),e.jsx("p",{children:"ひとことコメント・感想を記録"}),e.jsx("input",{type:"text",placeholder:"コメント",value:o,onChange:t=>j(t.target.value)}),e.jsx("p",{children:"②お守りが映るように記念写真を撮る"}),e.jsx("input",{type:"file",accept:"image/*",onChange:b}),e.jsx("input",{type:"hidden",name:"selected_plan_id",value:a}),m&&e.jsxs("div",{children:[e.jsx("h4",{children:"アップロードされた画像プレビュー:"}),e.jsx("img",{src:m,alt:"アップロードされた画像",width:"200"})]}),e.jsx("button",{type:"button",onClick:_,className:"custom-button",children:"投稿して体験記録の確認へ"})]})})})})}),e.jsx("style",{children:`
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

                                `})]})}export{C as default};
