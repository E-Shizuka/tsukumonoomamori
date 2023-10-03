import{r as t,j as e,b as h,a as g}from"./app-3ca3b049.js";import{A as b}from"./AuthenticatedLayout-c3cc6c86.js";import"./Dropdown-5e83510a.js";import"./transition-83953855.js";function N({auth:i}){const r=new URLSearchParams(window.location.search),m="id="+r.get("p"),c=r.get("p"),[n,u]=t.useState(""),[a,d]=t.useState(""),[p,l]=t.useState(!1);t.useEffect(()=>{const o=new URLSearchParams(window.location.search).get("p");d(o)},[]);const x=()=>{g.post("/check_password",{plan_id:a,plan_password:n}).then(s=>{if(s.data.success){const o=s.data.selectedPlanId;window.location.href=route("first-mission")+`?id=${a}&s=${o}`,l(!0)}else console.log("追加の処理が失敗しました"),l(!1)}).catch(s=>{console.error(s)})};return e.jsxs(b,{user:i.user,children:[e.jsx(h,{title:"癒しのひととき"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(e.Fragment,{children:e.jsxs("div",{className:"overflow-hidden sm:rounded-lg",children:[e.jsx("p",{className:"text-sm text-gray-800 leading-tight m-2",children:"プランパスワードを入力してください。"}),e.jsx("input",{type:"hidden",placeholder:"プランID",className:"text-sm text-gray-800 leading-tight m-2 p-2 w-5/6",value:a,onChange:s=>d(`${c}`)}),e.jsx("input",{type:"text",placeholder:"プランパスワード",className:"text-sm text-gray-800 leading-tight m-2 p-2 w-2/3",value:n,onChange:s=>u(s.target.value)}),e.jsx("button",{onClick:x,className:"custom-button",children:"送信"})]})}),e.jsx("div",{id:"next",className:"max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5",children:p?e.jsx("button",{onClick:()=>{window.location.href=route("first-mission")+`?${m}`},className:"go-button",children:"次の体験へ"}):e.jsx("button",{onClick:()=>{window.location.href=route("dashboard")+`?p=${c}`},className:"custom-button",children:"戻る"})})]})}),e.jsx("style",{children:`
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

                                `})]})}export{N as default};
