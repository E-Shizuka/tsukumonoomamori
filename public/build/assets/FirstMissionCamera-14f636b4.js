import{r as l,j as e,a as j}from"./app-27d2f655.js";import{A as f}from"./AuthenticatedLayout-50872c0e.js";import{F as b}from"./Footer-525e4c66.js";import"./Dropdown-c6f7ce87.js";import"./transition-44ad75c6.js";const m=300,h=400;function A({auth:u}){const[o,r]=l.useState(!1),x=()=>{document.getElementById("camera"),navigator.userAgent.match(/iPhone|Android/)},g=()=>{const s=document.getElementById("camera"),t=navigator.userAgent.match(/iPhone|Android/),n={audio:!1,video:{width:t?h:m,height:t?m:h,facingMode:"environment"}};if(o){const a=s.srcObject;a&&a.getTracks().forEach(c=>{c.stop()}),r(!1),canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height)}else navigator.mediaDevices.getUserMedia(n).then(a=>{s.srcObject=a,r(!0)}).catch(a=>{console.log(a.toString())})},p=()=>{const s=document.getElementById("camera"),t=document.getElementById("canvas"),n=s.videoWidth,a=s.videoHeight;t.width=n*.8,t.height=a*.8,t.getContext("2d").drawImage(s,0,0,t.width,t.height);const c=t.toDataURL("image/jpeg"),d=new Image;d.src=c;const i=document.createElement("a");i.href=d.src,i.download="captured_image.jpg",i.click()};return l.useEffect(()=>{x()},[]),e.jsxs(f,{user:u.user,children:[e.jsx(j,{title:"癒しのひととき"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"overflow-hidden sm:rounded-lg",children:[e.jsx("h2",{children:"癒しのひととき"}),e.jsx("p",{children:"〇〇旅館について"}),e.jsx("p",{children:"温泉について"}),e.jsx("p",{children:"温泉に浸かる"}),e.jsx("p",{children:"写真を撮る"})]}),e.jsxs("div",{className:"max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center mb-5",children:[e.jsxs("div",{children:[e.jsx("input",{type:"button",value:o?"カメラオフ":"カメラ起動",onClick:g,className:"custom-button"}),e.jsx("input",{type:o?"button":"hidden",value:"撮影",onClick:p,className:"custom-button"})]}),e.jsxs("div",{style:{display:o?"block":"none"},children:[e.jsx("video",{id:"camera",autoPlay:!0,muted:!0,playsInline:!0}),e.jsx("canvas",{id:"canvas",crossOrigin:"anonymous"})]})]})]})}),e.jsx("style",{children:`
                    .custom-button {
                        background-color: #f19072; /* ボタンの背景色 */
                        color: black; /* ボタンのテキスト色 */
                        padding: 8px 16px; /* ボタンのパディング */
                        border-radius: 4px; /* ボタンの角丸 */
                        border: none; /* ボーダーなし */
                        margin: 0.5rem;
                    }

                    .bg_color_sub {
                        background-color: #fff1cf;
                    }

                                `}),e.jsx(b,{})]})}export{A as default};
