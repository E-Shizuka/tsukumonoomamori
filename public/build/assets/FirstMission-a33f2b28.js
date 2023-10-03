import{r as i,a as x,j as e,b as N}from"./app-3ca3b049.js";import{A as w}from"./AuthenticatedLayout-c3cc6c86.js";import"./Dropdown-5e83510a.js";import"./transition-83953855.js";function k({auth:g}){const r=new URLSearchParams(window.location.search),c=r.get("id"),o=r.get("s"),[s,h]=i.useState([]),[p,d]=i.useState(!0),[n,u]=i.useState("");i.useEffect(()=>{x.get(`/mission-by-plan?id=${c}`).then(t=>{h(t.data.missions),d(!1)}).catch(t=>{console.error(t),d(!1)})},[]);const[m,f]=i.useState(null),[l,j]=i.useState(null),b=t=>{const a=t.target.files[0];j(a),a&&f(URL.createObjectURL(a))},y=()=>{if(!l&&!n.trim()){alert("コメントを入力し、画像を選択してください");return}if(!l){alert("画像を選択してください");return}if(!n.trim()){alert("コメントを入力してください");return}const t=new FormData;t.append("image",l),t.append("comment",n),t.append("mission_id","1"),t.append("selected_plan_id",o),x.post("/makepost",t,{headers:{"content-type":"multipart/form-data"}}).then(a=>{console.log(a.data),window.location.href=route("second-mission")+`?id=${c}&s=${o}`}).catch(a=>{console.error(a)})};return e.jsxs(w,{user:g.user,children:[e.jsx(N,{title:"癒しのひととき"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:p?e.jsx("p",{children:"Loading..."}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"overflow-hidden sm:rounded-lg",children:e.jsxs("form",{encType:"multipart/form-data",children:[e.jsx("h2",{className:"font-bold text-gray-800 leading-tight m-2 mb-5",children:s&&s[0].mission_title}),e.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:s&&s[0].mission_place}),e.jsx("h2",{className:"font-semibold text-gray-800 leading-tight m-2",children:"パワースポットのご紹介"}),e.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:s&&s[0].description}),e.jsx("h3",{className:"font-semibold text-gray-800 leading-tight m-2",children:"ミッション"}),e.jsxs("p",{className:"text-sm text-gray-800 leading-tight m-2",children:["①",s&&s[0].mission_instruction]}),e.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"ひとことコメント・感想を記録"}),e.jsx("input",{type:"text",className:"text-sm text-gray-800 leading-tight m-2 p-2 w-5/6",placeholder:"コメント",value:n,onChange:t=>u(t.target.value)}),e.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"②お守りが映るように記念写真を撮る"}),e.jsx("input",{type:"file",accept:"image/*",className:"text-sm text-gray-800 leading-tight m-2",onChange:b}),e.jsx("input",{type:"hidden",name:"selected_plan_id",value:o}),m&&e.jsxs("div",{children:[e.jsx("h4",{children:"アップロードされた画像プレビュー:"}),e.jsx("img",{src:m,alt:"アップロードされた画像",width:"200"})]}),e.jsx("div",{className:"flex justify-center my-4",children:e.jsx("button",{type:"button",onClick:y,className:"custom-button",children:"投稿して次の体験へ"})})]})})})})}),e.jsx("style",{children:`
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

                                `})]})}export{k as default};
