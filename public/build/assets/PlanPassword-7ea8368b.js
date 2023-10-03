import{r as e,j as o,b as h,a as b}from"./app-237fc0c5.js";import{A as w}from"./AuthenticatedLayout-ca844a3a.js";import"./Dropdown-db4c145d.js";import"./transition-1a9a0c3a.js";function v({auth:i}){const r=new URLSearchParams(window.location.search),u="id="+r.get("p"),c=r.get("p"),[n,p]=e.useState(""),[a,d]=e.useState(""),[m,l]=e.useState(!1);e.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("p");d(t)},[]);const x=()=>{b.post("/check_password",{plan_id:a,plan_password:n}).then(s=>{if(s.data.success){const t=s.data.selectedPlanId;window.location.href=route("first-mission")+`?id=${a}&s=${t}`,l(!0)}else console.log("追加の処理が失敗しました"),l(!1)}).catch(s=>{console.error(s)})};return o.jsxs(w,{user:i.user,children:[o.jsx(h,{title:"癒しのひととき"}),o.jsx("div",{className:"py-12",children:o.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[o.jsx(o.Fragment,{children:o.jsxs("div",{className:"overflow-hidden sm:rounded-lg",children:[o.jsx("p",{children:"プランパスワードを入力してください。"}),o.jsx("input",{type:"hidden",placeholder:"プランID",value:a,onChange:s=>d(`${c}`)}),o.jsx("input",{type:"text",placeholder:"プランパスワード",value:n,onChange:s=>p(s.target.value)}),o.jsx("button",{onClick:x,className:"custom-button",children:"送信"})]})}),o.jsx("div",{id:"next",className:"max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5",children:m?o.jsx("button",{onClick:()=>{window.location.href=route("first-mission")+`?${u}`},className:"go-button",children:"次の体験へ"}):o.jsx("button",{onClick:()=>{window.location.href=route("dashboard")+`?p=${c}`},className:"custom-button",children:"戻る"})})]})}),o.jsx("style",{children:`
                    .custom-button {
                        background-color: #f19072; /* ボタンの背景色 */
                        color: black; /* ボタンのテキスト色 */
                        padding: 8px 16px; /* ボタンのパディング */
                        border-radius: 4px; /* ボタンの角丸 */
                        border: none; /* ボーダーなし */
                        margin: 0.5rem;
                    }

                    .go-button {
                        background-color: #d3381c; /* ボタンの背景色 */
                        color: white; /* ボタンのテキスト色 */
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

                                `})]})}export{v as default};
